import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate, Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

const Login = ({ setRefetch }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (!email || !password || (!isLogin && !confirmPassword)) {
      setErrorMsg("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      if (!isLogin) {
        // SIGN-UP FLOW
        await axios.post(`${BASE_URL}/api/user/addUser`, {
          email,
          password,
          confirmPassword,
          currentPassword: password,
        });

        // Auto login after signup
        const loginRes = await axios.post(`${BASE_URL}/api/user/login`, {
          email,
          password,
        });

        await handleLoginSuccess(loginRes);
      } else {
        // LOGIN FLOW
        const res = await axios.post(`${BASE_URL}/api/user/login`, {
          email,
          password,
        });

        await handleLoginSuccess(res);
      }
    } catch (error) {
      console.error("Auth Error:", error.response?.data || error.message);
      setErrorMsg(error.response?.data?.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = async (res) => {
  if (res.data?.token && res.data?.userId) {
    localStorage.setItem("session", res.data.userId);
    localStorage.setItem("token", res.data.token);

    try {
      // 👇 Fetch user with Authorization header
      const userRes = await axios.get(
        `${BASE_URL}/api/user/${res.data.userId}`,
        {
          headers: {
            Authorization: `Bearer ${res.data.token}`,
          },
        }
      );
      const userType = userRes.data?.user?.userType || "basic";
      localStorage.setItem("userType", userType);
    } catch (err) {
      console.warn("Failed to fetch userType:", err);
      localStorage.setItem("userType", "basic"); // fallback
    }

    setRefetch((prev) => !prev);
    navigate("/");
  } else {
    setErrorMsg("Login failed. Invalid response from server.");
  }
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

            {errorMsg && (
              <p className="text-sm text-red-500 text-center">{errorMsg}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white py-2.5 text-lg font-medium rounded-xl transition-colors"
            >
              {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
            </Button>

            <p className="text-center text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrorMsg("");
                }}
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
