import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionPlans from "../components/SubscriptionPlans";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to premium features until the end of your current billing period.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards including Visa, Mastercard, and American Express. We also support UPI payments and select digital wallets.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, all payment information is encrypted and securely processed. We never store your full credit card details on our servers.",
  },
  {
    question: "What's included in the Premium plan?",
    answer: "The Premium plan includes unlimited access to all meditation and yoga content, unlimited music playlists, expert counseling, priority support, video consultations, and advanced mental wellness exercises and resources.",
  },
  {
    question: "How do I access professional support with my subscription?",
    answer: "Premium subscribers can schedule appointments with our mental health professionals through the Appointments section. You'll get priority scheduling and access to video consultations.",
  },
  {
    question: "Can I share my account with family members?",
    answer: "Premium accounts are for individual use only. We offer family plans for households that need multiple accounts - please contact our support team for more information.",
  },
  {
    question: "What happens if I need a refund?",
    answer: "If you're unsatisfied with your subscription for any reason, please contact our support team within 14 days of purchase for a full refund.",
  },
];

const testimonials = [
  {
    name: "Rahul M.",
    duration: "Premium user for 6 months",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "The premium subscription has been worth every rupee. The personalized counseling sessions helped me navigate a particularly difficult time in my life, and the meditation content is exceptional. I sleep better and feel more equipped to handle stress.",
  },
  {
    name: "Meera S.",
    duration: "Premium user for 1 year",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "As someone with a busy schedule, I appreciate the flexibility of the video consultations. I can speak with a professional from anywhere, and the advanced analytics really help me understand my mood patterns. The yearly subscription is great value.",
  },
  {
    name: "Vikram T.",
    duration: "Premium user for 3 months",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
    text: "I was hesitant to upgrade, but the premium features have made a real difference. The expert counseling has provided insights I couldn't get elsewhere, and the unlimited music playlists have become part of my daily relaxation routine.",
  },
];



const Subscription = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Premium Plans</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock advanced features and professional support to accelerate your mental wellness journey
            </p>
          </div>

          {/* Subscription Plans */}
          <div className="mb-16">
            <SubscriptionPlans />
          </div>

          {/* Features Comparison */}
          {/* ...existing feature table remains unchanged... */}

        {/* Testimonials */}
<div className="mb-16">
  <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What Premium Users Say</h2>

  <div className="relative max-w-3xl mx-auto px-4">
    <button
      onClick={() => setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>

    <button
      onClick={() => setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
    >
      <ChevronRight className="w-5 h-5" />
    </button>

    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
      <div className="flex flex-col items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-mind-purple mb-2">
          <img src={testimonials[testimonialIndex].image} alt={testimonials[testimonialIndex].name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold">{testimonials[testimonialIndex].name}</h3>
        <p className="text-gray-500 text-sm">{testimonials[testimonialIndex].duration}</p>
      </div>
      <p className="text-gray-600 italic">"{testimonials[testimonialIndex].text}"</p>
    </div>
  </div>
</div>


          {/* FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left px-6 hover:no-underline hover:text-[#9b87f5]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Mental Wellbeing?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of users who have improved their mental health with our premium tools and support.
            </p>
            <div className="inline-block rounded-full bg-[#9b87f5] p-1">
              <button className="px-8 py-3 text-white font-medium rounded-full">
                Get Premium Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Subscription;
