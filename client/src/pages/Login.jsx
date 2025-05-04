import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

const Login = ({ setRefetch }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      // SIGN-UP FLOW
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const res = await axios.post("http://localhost:5000/api/user/addUser", {
          email,
          password,
          confirmPassword,
        });

        alert("Account created successfully!");
      } catch (error) {
        console.error("Signup Error:", error.response?.data || error.message);
        alert(
          error.response?.data?.message ||
          "Something went wrong during sign-up."
        );
        return;
      }
    } else {
      // LOGIN FLOW
      try {
        const res = await axios.post("http://localhost:5000/api/user/login", {
          email,
          password,
        });

        if (res.data?.token) {
          // Save token and user info in localStorage
          localStorage.setItem("session", email);
          localStorage.setItem("token", res.data.token);

          setRefetch((prev) => !prev);
          navigate("/");
        } else {
          alert("Login failed. Invalid response from server.");
        }
      } catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
        alert(
          error.response?.data?.message ||
          "Invalid email or password. Please try again."
        );
        return;
      }
    }

    // Clear inputs after successful operation
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-white p-6 gap-8">
      <Link to="/" className="flex items-center flex-col space-y-1">
        <div className="flex items-center">
          <HeartHandshake className="h-9 w-9 text-[#8e89bd]" />
          <span className="ml-2 text-3xl font-bold bg-gradient-to-r from-[#8e89bd] to-[#7e79a7] bg-clip-text text-transparent">
            MIND
          </span>
        </div>
        <p className="text-sm text-gray-500 text-center font-medium">
          Your Mindful Space to Heal, Grow & Thrive
        </p>
      </Link>

      <Card className="w-full max-w-md rounded-3xl shadow-xl border-none animate-fade-in">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-semibold text-[#4a3f75]">
            {isLogin ? "Welcome Back" : "Create Account"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="focus:ring-2 focus:ring-[#9b87f5] transition"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="focus:ring-2 focus:ring-[#9b87f5] transition"
              />
              {!isLogin && (
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="focus:ring-2 focus:ring-[#9b87f5] transition"
                />
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white py-2.5 text-lg font-medium rounded-xl transition-colors"
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>
            <p className="text-center text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#9b87f5] hover:text-[#7E69AB] font-semibold transition-colors"
              >
                {isLogin ? "Sign up here" : "Login here"}
              </button>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
