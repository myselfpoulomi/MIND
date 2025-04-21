import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Shield, Clock, CheckCheck } from "lucide-react";

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const plans = [
    {
      id: "free",
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Basic tools for mental wellness",
      features: [
        "Daily mood tracking",
        "Limited meditation content",
        "Basic to-do list",
        "Emergency resources",
        "Community forums access",
      ],
      buttonText: "Current Plan",
      recommended: false,
    },
    {
      id: "monthly",
      name: "Premium",
      price: "₹49",
      period: "per month",
      description: "Full access to all features",
      features: [
        "Unlimited access to all content",
        "Priority chat support",
        "Personalized wellness plan",
        "Progress tracking and insights",
        "Expert Q&A sessions",
        "Ad-free experience",
      ],
      buttonText: "Subscribe Monthly",
      recommended: true,
    },
    {
      id: "semiannual",
      name: "Premium+",
      price: "₹249",
      period: "for 6 months",
      description: "Best value for long-term support",
      features: [
        "All Premium features",
        "Video consultation credits",
        "One-on-one counseling session",
        "Specialized courses access",
        "Advanced analytics",
        "Family account (up to 3 members)",
      ],
      buttonText: "Subscribe Semi-Annually",
      recommended: false,
      savePercent: 15,
    },
    {
      id: "annual",
      name: "Ultimate",
      price: "₹549",
      period: "per year",
      description: "Complete mental health solution",
      features: [
        "All Premium+ features",
        "Monthly therapy sessions",
        "Wellness workshops",
        "Priority appointment scheduling",
        "Personalized resources",
        "Family account (up to 5 members)",
      ],
      buttonText: "Subscribe Annually",
      recommended: false,
      savePercent: 40,
    },
  ];
  
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Choose Your Wellness Journey</h1>
        <p className="text-lg text-muted-foreground">
          Select the plan that best fits your mental health and wellbeing needs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative ${
              selectedPlan === plan.id ? "border-2 border-mind-purple" : ""
            } ${plan.recommended ? "shadow-lg" : ""}`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Badge className="bg-mind-purple">Recommended</Badge>
              </div>
            )}
            
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
                {plan.savePercent && (
                  <Badge variant="outline" className="ml-2 text-green-600 border-green-200 bg-green-50">
                    Save {plan.savePercent}%
                  </Badge>
                )}
              </div>
              
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-mind-purple flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button
                className={`w-full ${
                  plan.id === "free" ? "bg-secondary hover:bg-secondary" : "bg-mind-purple hover:bg-mind-purple-dark"
                }`}
                onClick={() => setSelectedPlan(plan.id)}
                disabled={plan.id === "free"}
              >
                {plan.id === "free" ? (
                  <CheckCheck className="h-4 w-4 mr-2" />
                ) : null}
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* What's Included */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">What's Included in Premium</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-mind-purple-light/30 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-mind-purple" />
              </div>
              <h3 className="text-xl font-medium mb-2">Expert Counseling</h3>
              <p className="text-muted-foreground">
                Connect with licensed therapists and mental health professionals through chat, phone, or video.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-mind-blue-light/30 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-mind-blue" />
              </div>
              <h3 className="text-xl font-medium mb-2">Premium Content</h3>
              <p className="text-muted-foreground">
                Unlock our full library of guided meditations, yoga sessions, and specialized mental wellness courses.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-mind-green-light/30 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-mind-green" />
              </div>
              <h3 className="text-xl font-medium mb-2">Priority Support</h3>
              <p className="text-muted-foreground">
                Get faster responses from our support team and priority scheduling for consultations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-base">How do I change my subscription plan?</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground">
                You can upgrade, downgrade, or cancel your subscription at any time from your account settings.
                Changes to a lower-tier plan will take effect at the end of your current billing cycle.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-base">Is my payment information secure?</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground">
                Yes, we use industry-standard encryption to protect your payment information. 
                We never store your complete credit card details on our servers.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-base">Can I get a refund if I'm not satisfied?</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground">
                We offer a 7-day money-back guarantee for all subscription plans. If you're not completely
                satisfied, contact our support team within 7 days of your purchase for a full refund.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-base">How do I schedule a session with a therapist?</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground">
                Once you're subscribed to a premium plan, you can schedule sessions through the app's
                appointment booking system. You'll be able to choose from available professionals 
                based on your needs and their specialties.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* CTA */}
      <div className="mt-16 text-center p-8 bg-gradient-to-r from-mind-purple-light/20 to-mind-blue-light/20 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Start Your Wellness Journey Today</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Invest in your mental health and wellbeing with our comprehensive support tools and professional guidance.
        </p>
        <Button size="lg" className="bg-mind-purple hover:bg-mind-purple-dark">
          Get Started
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          No long-term commitment required. Cancel anytime.
        </p>
      </div>
    </div>
  );
}
