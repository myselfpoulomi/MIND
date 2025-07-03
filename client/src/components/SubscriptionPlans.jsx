import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    id: "free",
    name: "Free Plan",
    features: [
      { name: "Basic meditation guides", included: true },
      { name: "Limited music playlists", included: true },
      { name: "Mental wellness to-do list", included: true },
      { name: "Community forums", included: true },
      { name: "Expert counseling", included: false },
      { name: "Priority support", included: false },
      { name: "Video consultations", included: false },
      { name: "Advanced exercises & resources", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: 49,
    halfYearlyPrice: 249,
    yearlyPrice: 549,
    features: [
      { name: "Basic meditation guides", included: true },
      { name: "Unlimited music playlists", included: true },
      { name: "Mental wellness to-do list", included: true },
      { name: "Community forums", included: true },
      { name: "Expert counseling", included: true },
      { name: "Priority support", included: true },
      { name: "Video consultations", included: true },
      { name: "Advanced exercises & resources", included: true },
    ],
    popular: true,
  },
];

const SubscriptionPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const getBillingAmount = (plan) => {
    if (plan.id === "free") return 0;
    if (billingCycle === "monthly") return plan.monthlyPrice;
    if (billingCycle === "halfyearly") return plan.halfYearlyPrice;
    if (billingCycle === "yearly") return plan.yearlyPrice;
    return 0;
  };

  const formatBillingText = (plan) => {
    const amount = getBillingAmount(plan);
    if (plan.id === "free") return "₹0";
    if (billingCycle === "monthly") return `₹${amount}/month`;
    if (billingCycle === "halfyearly") return `₹${amount}/6 months`;
    if (billingCycle === "yearly") return `₹${amount}/year`;
    return "";
  };

  const getSavingsAmount = (plan) => {
    if (plan.id === "free" || !plan.monthlyPrice) return null;
    if (billingCycle === "halfyearly") {
      const savings = plan.monthlyPrice * 6 - plan.halfYearlyPrice;
      const percent = Math.round((savings / (plan.monthlyPrice * 6)) * 100);
      return `Save ${percent}%`;
    }
    if (billingCycle === "yearly") {
      const savings = plan.monthlyPrice * 12 - plan.yearlyPrice;
      const percent = Math.round((savings / (plan.monthlyPrice * 12)) * 100);
      return `Save ${percent}%`;
    }
    return null;
  };

  const handlePayment = (plan) => {
    const amount = getBillingAmount(plan);
    if (amount === 0) {
      alert("You're already on the Free Plan.");
      return;
    }

    const options = {
      key: "rzp_test_7cs83Ikm791P0j",
      amount: amount * 100, // Convert to paise
      currency: "INR",
      name: "Mindful Wellness",
      description: `Subscription: ${plan.name} (${billingCycle})`,
      handler: (response) => {
        console.log("Payment successful:", response);
        alert("Payment successful! Subscription activated.");
        // You can also update backend or user state here
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#9b87f5",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Subscription Plans</h2>
        <p className="text-gray-500">Choose the plan that best fits your needs</p>

        <div className="inline-flex items-center justify-center bg-gray-100 p-1 rounded-lg mt-4">
          {["monthly", "halfyearly", "yearly"].map((cycle) => (
            <Button
              key={cycle}
              variant={billingCycle === cycle ? "default" : "ghost"}
              onClick={() => setBillingCycle(cycle)}
              className={
                billingCycle === cycle ? "bg-[#9b87f5] hover:bg-mind-purple-dark" : ""
              }
            >
              {cycle === "monthly"
                ? "Monthly"
                : cycle === "halfyearly"
                ? "6 Months"
                : "Yearly"}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative ${
              plan.popular ? "border-[#9b87f5] shadow-lg" : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <Badge className="absolute top-4 right-4 bg-[#9b87f5] hover:bg-[#6b5dac]">
                Popular
              </Badge>
            )}

            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>
                {plan.id === "free"
                  ? "Basic mental wellness support"
                  : "Complete mental wellness journey"}
              </CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">{formatBillingText(plan)}</span>
                {getSavingsAmount(plan) && (
                  <Badge className="ml-2 bg-green-100 text-green-800" variant="outline">
                    {getSavingsAmount(plan)}
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={`${
                        feature.included
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-400"
                      } rounded-full p-1 mr-2 mt-0.5`}
                    >
                      <Check className="h-3 w-3" />
                    </div>
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-gray-700"
                          : "text-gray-400 line-through"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                className={`w-full ${
                  plan.id === "free"
                    ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    : "bg-[#9b87f5] hover:bg-[#7464b9]"
                }`}
                onClick={() => handlePayment(plan)}
              >
                {plan.id === "free" ? "Current Plan" : "Subscribe Now"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
