import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Phone, Calendar } from "lucide-react";
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

const Support = ({ session, setRefetch }) => {
  const [chatInput, setChatInput] = useState("");
  const [helpData, setHelpData] = useState(null);
  const [loadingResources, setLoadingResources] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/help") // replace with your real endpoint
      .then((res) => {
        setHelpData(res.data[0]); // or just res.data if not an array
        setLoadingResources(false);
      })
      .catch((err) => {
        console.error("Failed to load help data:", err);
        setError("Failed to load resources.");
        setLoadingResources(false);
      });
  }, []);
  

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

    const userMessage = {
      id: Date.now().toString(),
      content: chatInput,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setChatInput("");

    setTimeout(() => {
      const botResponses = [
        "I understand how you feel. It's normal to experience these emotions.",
        "Thank you for sharing that with me. Would you like to talk more about it?",
        "I'm here to listen. Have you tried any coping strategies that helped in the past?",
        "That sounds challenging. Remember that it's okay to ask for help when you need it.",
        "I appreciate you opening up. Would you like some resources on this topic?",
      ];

      const botMessage = {
        id: Date.now().toString(),
        content: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar session={session} setRefetch={setRefetch} />

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
                <div className="lg:col-span-2">
                  <Card className="h-[600px] flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl">Chat Support</CardTitle>
                      <CardDescription>Talk to our mental health assistant for guidance</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow overflow-y-auto space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                          <div className={`max-w-[80%] p-3 rounded-lg ${message.sender === "user" ? "bg-[#9B87F5] text-white" : "bg-gray-100 text-gray-800"}`}>
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
                            <div className={`text-xs mt-1 ${message.sender === "user" ? "text-white/70" : "text-gray-500"}`}>
                              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <div className="flex w-full space-x-2">
                        <Input
                          placeholder="Type your message..."
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleSendMessage();
                          }}
                        />
                        <Button onClick={handleSendMessage} className="bg-[#9B87F5] hover:bg-[#7e6dca]">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Common Topics</CardTitle>
                      <CardDescription>Select a topic to get targeted support</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {supportTopics.map((topic) => (
                          <Badge key={topic.id} className={`cursor-pointer ${topic.color}`} variant="outline">
                            {topic.label}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Need More Help?</CardTitle>
                      <CardDescription>Connect with professional support</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button asChild className="w-full flex items-center justify-center gap-2 bg-[#9B87F5] hover:bg-[#7868be]">
                        <Link to="/appointments">
                          <Calendar className="h-4 w-4" />
                          Schedule an Appointment
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Link to="/emergency">
                          <Phone className="h-4 w-4" />
                          Emergency Contacts
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Contact Us</CardTitle>
                      <CardDescription>Send us your questions or feedback</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <Input placeholder="Your email" type="email" />
                        <Textarea placeholder="Your message..." className="resize-none min-h-[100px]" />
                        <Button className="w-full bg-[#9B87F5] hover:bg-[#6c5eac]">Send Message</Button>
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
                    <CardDescription>Immediate resources for crisis situations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EmergencyContacts />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              {loadingResources ? (
                <div>Loading resources...</div>
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Mental Health Articles */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-[#7F76C4]">Mental Health Articles</CardTitle>
                      <CardDescription>Educational content for awareness</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {helpData.mentalHealthArticles.map((article, i) => (
                          <li key={i}>
                            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
                              {article.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">View All Articles</Button>
                    </CardFooter>
                  </Card>

                  {/* Support Groups */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-[#7F76C4]">Support Groups</CardTitle>
                      <CardDescription>Connect with others for mutual support</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {helpData.supportGroups.map((group, i) => (
                          <li key={i} className="p-3 bg-gray-50 rounded-md">
                            <h3 className="font-medium">{group.name}</h3>
                            <p className="text-sm text-gray-600">{group.schedule}</p>
                            <Badge className="mt-2" variant="outline">{group.mode}</Badge>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Join a Group</Button>
                    </CardFooter>
                  </Card>

                  {/* Recommended Books */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-[#7F76C4]">Recommended Books</CardTitle>
                      <CardDescription>Reading material for mental wellness</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {helpData.recommendedBooks.map((book, i) => (
                          <li key={i} className="flex gap-3">
                            <div className="w-16 h-20 bg-gray-200 rounded" />
                            <div>
                              <h3 className="font-medium">{book.title}</h3>
                              <p className="text-sm text-gray-600">By {book.author}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">See All Recommendations</Button>
                    </CardFooter>
                  </Card>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
