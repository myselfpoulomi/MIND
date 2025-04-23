import { useState } from "react";
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

  const getBillingAmount = (plan) => {
    if (plan.id === "free") return "₹0";

    if (billingCycle === "monthly" && plan.monthlyPrice) {
      return `₹${plan.monthlyPrice}/month`;
    } else if (billingCycle === "halfyearly" && plan.halfYearlyPrice) {
      return `₹${plan.halfYearlyPrice}/6 months`;
    } else if (billingCycle === "yearly" && plan.yearlyPrice) {
      return `₹${plan.yearlyPrice}/year`;
    }

    return "";
  };

  const getSavingsAmount = (plan) => {
    if (plan.id === "free" || !plan.monthlyPrice) return null;

    if (billingCycle === "halfyearly" && plan.halfYearlyPrice) {
      const monthly = plan.monthlyPrice * 6;
      const savings = monthly - plan.halfYearlyPrice;
      const percentage = Math.round((savings / monthly) * 100);
      return `Save ${percentage}%`;
    } else if (billingCycle === "yearly" && plan.yearlyPrice) {
      const monthly = plan.monthlyPrice * 12;
      const savings = monthly - plan.yearlyPrice;
      const percentage = Math.round((savings / monthly) * 100);
      return `Save ${percentage}%`;
    }

    return null;
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Subscription Plans</h2>
        <p className="text-gray-500">Choose the plan that best fits your needs</p>

        <div className="inline-flex items-center justify-center bg-gray-100 p-1 rounded-lg mt-4">
          <Button
            variant={billingCycle === "monthly" ? "default" : "ghost"}
            onClick={() => setBillingCycle("monthly")}
            className={
              billingCycle === "monthly"
                ? "bg-[#9b87f5] hover:bg-mind-purple-dark"
                : ""
            }
          >
            Monthly
          </Button>
          <Button
            variant={billingCycle === "halfyearly" ? "default" : "ghost"}
            onClick={() => setBillingCycle("halfyearly")}
            className={
              billingCycle === "halfyearly"
                ? "bg-[#9b87f5] hover:bg-mind-purple-dark"
                : ""
            }
          >
            6 Months
          </Button>
          <Button
            variant={billingCycle === "yearly" ? "default" : "ghost"}
            onClick={() => setBillingCycle("yearly")}
            className={
              billingCycle === "yearly"
                ? "bg-[#9b87f5] hover:bg-[#5a4e8f]"
                : ""
            }
          >
            Yearly
          </Button>
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
                <span className="text-3xl font-bold">{getBillingAmount(plan)}</span>
                {getSavingsAmount(plan) && (
                  <Badge
                    className="ml-2 bg-green-100 text-green-800 hover:bg-green-100"
                    variant="outline"
                  >
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
