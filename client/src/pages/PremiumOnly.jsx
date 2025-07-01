import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const PremiumOnly = ({ setRefetch }) => {
  const navigate = useNavigate();
  const session = localStorage.getItem("session");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar session={session} setRefetch={setRefetch} />

      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Plan Required
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Access to professional appointments is only available for premium users.
              Upgrade your plan to book 1-on-1 sessions with licensed professionals.
            </p>
            <Button
              className="bg-[#9B91E3] hover:bg-[#7f76c4]"
              onClick={() => navigate("/subscription")}
            >
              Upgrade to Premium
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PremiumOnly;
