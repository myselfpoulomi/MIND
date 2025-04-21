import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, MessageCircle, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import EmergencyContacts from "@/components/EmergencyContacts";

const supportTopics = [
  { id: "anxiety", label: "Anxiety", color: "bg-blue-100 text-blue-800" },
  { id: "depression", label: "Depression", color: "bg-purple-100 text-purple-800" },
  { id: "stress", label: "Stress", color: "bg-orange-100 text-orange-800" },
  { id: "sleep", label: "Sleep", color: "bg-indigo-100 text-indigo-800" },
  { id: "relationships", label: "Relationships", color: "bg-pink-100 text-pink-800" },
  { id: "self-esteem", label: "Self-Esteem", color: "bg-green-100 text-green-800" },
];

const Support = () => {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "1",
      content: "Hello! I'm your mental health assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (chatInput.trim() === "") return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content: chatInput,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setChatInput("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I understand how you feel. It's normal to experience these emotions.",
        "Thank you for sharing that with me. Would you like to talk more about it?",
        "I'm here to listen. Have you tried any coping strategies that helped in the past?",
        "That sounds challenging. Remember that it's okay to ask for help when you need it.",
        "I appreciate you opening up. Would you like some resources on this topic?",
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Support & Resources</h1>

          <Tabs defaultValue="chat">
            <TabsList className="mb-6">
              <TabsTrigger value="chat">Chat Support</TabsTrigger>
              <TabsTrigger value="emergency">Emergency Help</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="chat">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chat Section */}
                <div className="lg:col-span-2">
                  <Card className="h-[600px] flex flex-col">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Chat Support</CardTitle>
                      <CardDescription>
                        Talk to our mental health assistant for guidance
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow overflow-y-auto">
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] p-3 rounded-lg ${
                                message.sender === "user"
                                  ? "bg-mind-purple text-white"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {message.sender === "bot" && (
                                <div className="flex items-center mb-1">
                                  <Avatar className="h-6 w-6 mr-2">
                                    <AvatarImage src="https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?q=80&w=100&auto=format&fit=crop" />
                                    <AvatarFallback>MA</AvatarFallback>
                                  </Avatar>
                                  <span className="text-xs font-medium">Mental Health Assistant</span>
                                </div>
                              )}
                              <p>{message.content}</p>
                              <div
                                className={`text-xs mt-1 ${
                                  message.sender === "user" ? "text-white/70" : "text-gray-500"
                                }`}
                              >
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="border-t pt-4">
                      <div className="flex w-full space-x-2">
                        <Input
                          placeholder="Type your message..."
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSendMessage();
                            }
                          }}
                        />
                        <Button
                          onClick={handleSendMessage}
                          className="bg-mind-purple hover:bg-mind-purple-dark"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>

                {/* Topic Selection */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Common Topics</CardTitle>
                      <CardDescription>
                        Select a topic to get targeted support
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {supportTopics.map((topic) => (
                          <Badge
                            key={topic.id}
                            className={`cursor-pointer ${topic.color}`}
                            variant="outline"
                          >
                            {topic.label}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Need More Help?</CardTitle>
                      <CardDescription>
                        Connect with professional support
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button
                        className="w-full flex items-center justify-center gap-2 bg-mind-purple hover:bg-mind-purple-dark"
                        asChild
                      >
                        <Link to="/appointments">
                          <Calendar className="h-4 w-4" />
                          <span>Schedule an Appointment</span>
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2" asChild>
                        <Link to="/emergency">
                          <Phone className="h-4 w-4" />
                          <span>Emergency Contacts</span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Contact Us</CardTitle>
                      <CardDescription>
                        Send us your questions or feedback
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div>
                          <Input placeholder="Your email" type="email" />
                        </div>
                        <div>
                          <Textarea
                            placeholder="Your message..."
                            className="resize-none min-h-[100px]"
                          />
                        </div>
                        <Button className="w-full bg-mind-purple hover:bg-mind-purple-dark">
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="emergency">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-red-600">Emergency Support</CardTitle>
                    <CardDescription>
                      Immediate resources for crisis situations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EmergencyContacts />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Mental Health Articles</CardTitle>
                    <CardDescription>
                      Educational content for awareness
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <Link to="#" className="text-mind-purple hover:text-mind-purple-dark">
                          Coping Strategies for Anxiety
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="text-mind-purple hover:text-mind-purple-dark">
                          Managing Depression: A Guide
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="text-mind-purple hover:text-mind-purple-dark">
                          Stress Reduction Techniques
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
