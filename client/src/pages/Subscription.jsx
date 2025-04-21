import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionPlans from "../components/SubscriptionPlans";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const Subscription = () => {
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
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Features Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-6 py-4 text-left text-gray-500 font-medium">Feature</th>
                    <th className="px-6 py-4 text-center text-gray-500 font-medium">Free Plan</th>
                    <th className="px-6 py-4 text-center text-mind-purple font-bold">Premium Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-800">Basic meditation guides</td>
                    <td className="px-6 py-4 text-center text-green-500">✓</td>
                    <td className="px-6 py-4 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-800">Music playlists</td>
                    <td className="px-6 py-4 text-center text-gray-500">Limited</td>
                    <td className="px-6 py-4 text-center text-green-500">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-800">Mental wellness to-do list</td>
                    <td className="px-6 py-4 text-center text-green-500">✓</td>
                    <td className="px-6 py-4 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-800">Mood tracking</td>
                    <td className="px-6 py-4 text-center text-green-500">Basic</td>
                    <td className="px-6 py-4 text-center text-green-500">Advanced analytics</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-800">Expert counseling</td>
                    <td className="px-6 py-4 text-center text-gray-500">✗</td>
                    <td className="px-6 py-4 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-800">Priority support</td>
                    <td className="px-6 py-4 text-center text-gray-500">✗</td>
                    <td className="px-6 py-4 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-800">Video consultations</td>
                    <td className="px-6 py-4 text-center text-gray-500">✗</td>
                    <td className="px-6 py-4 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-800">Access to meditation content</td>
                    <td className="px-6 py-4 text-center text-gray-500">Basic only</td>
                    <td className="px-6 py-4 text-center text-green-500">All content</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-800">Advanced exercises & resources</td>
                    <td className="px-6 py-4 text-center text-gray-500">✗</td>
                    <td className="px-6 py-4 text-center text-green-500">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What Premium Users Say</h2>
            
            <Tabs defaultValue="tab1" className="mb-12">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
                <TabsTrigger value="tab1">Rahul</TabsTrigger>
                <TabsTrigger value="tab2">Meera</TabsTrigger>
                <TabsTrigger value="tab3">Vikram</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tab1">
                <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
                  <div className="mb-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-mind-purple">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                          alt="Rahul" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">Rahul M.</h3>
                    <p className="text-gray-500">Premium user for 6 months</p>
                  </div>
                  <p className="text-gray-600 italic">
                    "The premium subscription has been worth every rupee. The personalized counseling sessions helped me navigate a particularly difficult time in my life, and the meditation content is exceptional. I sleep better and feel more equipped to handle stress."
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="tab2">
                <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
                  <div className="mb-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-mind-purple">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
                          alt="Meera" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">Meera S.</h3>
                    <p className="text-gray-500">Premium user for 1 year</p>
                  </div>
                  <p className="text-gray-600 italic">
                    "As someone with a busy schedule, I appreciate the flexibility of the video consultations. I can speak with a professional from anywhere, and the advanced analytics really help me understand my mood patterns. The yearly subscription is great value."
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="tab3">
                <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
                  <div className="mb-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-mind-purple">
                        <img 
                          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" 
                          alt="Vikram" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">Vikram T.</h3>
                    <p className="text-gray-500">Premium user for 3 months</p>
                  </div>
                  <p className="text-gray-600 italic">
                    "I was hesitant to upgrade, but the premium features have made a real difference. The expert counseling has provided insights I couldn't get elsewhere, and the unlimited music playlists have become part of my daily relaxation routine."
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left px-6 hover:no-underline hover:text-mind-purple">
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
            <div className="inline-block rounded-full bg-mind-purple p-1">
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
