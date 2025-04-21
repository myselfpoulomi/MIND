import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Send, User, Calendar, MessageCircle, Clock, CheckCheck, Phone,
  Video, Plus, Calendar as CalendarIcon, Star, Heart
} from "lucide-react";

export default function ChatSupport() {
  const [activeTab, setActiveTab] = useState("bot");
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! I'm your MIND support assistant. How are you feeling today?", time: "10:30 AM" },
    { id: 2, sender: "user", text: "I've been feeling anxious lately and having trouble sleeping.", time: "10:31 AM" },
    { id: 3, sender: "bot", text: "I'm sorry to hear that. Anxiety can definitely affect sleep patterns. Would you like to talk more about what's causing your anxiety, or would you prefer some suggestions for better sleep?", time: "10:31 AM" },
  ]);
  
  const professionals = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Clinical Psychologist",
      image: null,
      initials: "SJ",
      available: true,
      rating: 4.9,
      reviews: 124,
      experience: "10+ years",
      nextAvailable: "Today, 3:00 PM",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Mental Health Counselor",
      image: null,
      initials: "MC",
      available: true,
      rating: 4.8,
      reviews: 98,
      experience: "8 years",
      nextAvailable: "Tomorrow, 11:00 AM",
    },
    {
      id: 3,
      name: "Dr. Aisha Patel",
      specialty: "Psychiatrist",
      image: null,
      initials: "AP",
      available: false,
      rating: 4.7,
      reviews: 156,
      experience: "12 years",
      nextAvailable: "Friday, 2:30 PM",
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      specialty: "Wellness Coach",
      image: null,
      initials: "RK",
      available: true,
      rating: 4.6,
      reviews: 75,
      experience: "5 years",
      nextAvailable: "Today, 5:00 PM",
    },
  ];
  
  const appointments = [
    {
      id: 1,
      professional: "Dr. Sarah Johnson",
      date: "Today",
      time: "3:00 PM",
      type: "Video Call",
      status: "upcoming",
    },
    {
      id: 2,
      professional: "Rajesh Kumar",
      date: "May 24, 2025",
      time: "10:00 AM",
      type: "Chat Session",
      status: "upcoming",
    },
    {
      id: 3,
      professional: "Dr. Michael Chen",
      date: "May 15, 2025",
      time: "2:30 PM",
      type: "Video Call",
      status: "completed",
    },
  ];
  
  const sendMessage = () => {
    if (message.trim() === "") return;
    
    // Add user message
    const newUserMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      text: message,
      time: formatTime(new Date()),
    };
    
    setChatMessages(prev => [...prev, newUserMessage]);
    setMessage("");
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        sender: "bot",
        text: "Thank you for sharing. It's common to experience sleep issues when dealing with anxiety. Have you tried any relaxation techniques before bedtime? Our app has some guided meditations specifically for sleep that might help.",
        time: formatTime(new Date()),
      };
      
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };
  
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Chat & Support</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chat Area */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="bot" onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="bot">Support Bot</TabsTrigger>
              <TabsTrigger value="professionals">Professionals</TabsTrigger>
              <TabsTrigger value="appointments">My Appointments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bot" className="h-[70vh] flex flex-col">
              <Card className="flex-1 flex flex-col">
                <CardHeader className="pb-3 border-b">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3 bg-mind-purple-light">
                      <AvatarFallback>MB</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>MIND Bot</CardTitle>
                      <CardDescription>AI Support Assistant</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div 
                        className={`max-w-[75%] rounded-lg p-3 ${
                          msg.sender === "user" 
                            ? "bg-mind-purple text-white rounded-tr-none" 
                            : "bg-muted rounded-tl-none"
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
                
                <CardFooter className="border-t p-3">
                  <div className="flex gap-2 w-full">
                    <Input 
                      placeholder="Type your message..." 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} className="bg-mind-purple hover:bg-mind-purple-dark">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="professionals">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">Mental Health Professionals</h2>
                  <Button variant="outline" size="sm" className="hidden md:flex">
                    <Calendar className="h-4 w-4 mr-2" />
                    View All Specialists
                  </Button>
                </div>
                
                <div className="grid gap-6">
                  {professionals.map((professional) => (
                    <Card key={professional.id}>
                      <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-16 w-16 bg-mind-purple-light text-base">
                            {professional.image ? (
                              <AvatarImage src={professional.image} alt={professional.name} />
                            ) : (
                              <AvatarFallback>{professional.initials}</AvatarFallback>
                            )}
                          </Avatar>
                          
                          <div>
                            <h3 className="font-semibold text-lg">{professional.name}</h3>
                            <p className="text-muted-foreground">{professional.specialty}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center text-amber-500">
                                <Star className="h-4 w-4 fill-current" />
                                <span className="ml-1 text-sm">{professional.rating}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">({professional.reviews} reviews)</span>
                              <span className="text-sm text-muted-foreground">• {professional.experience}</span>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                              <Button size="sm" className="bg-mind-purple hover:bg-mind-purple-dark">
                                <Phone className="h-4 w-4" />
                                Book Now
                              </Button>
                              {professional.available ? (
                                <span className="text-green-600 font-medium text-sm">Available now</span>
                              ) : (
                                <span className="text-red-600 font-medium text-sm">Not Available</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="appointments">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Appointments</h2>
                
                {appointments.map((appointment) => (
                  <Card key={appointment.id}>
                    <CardContent className="flex justify-between items-center p-4">
                      <div>
                        <p className="font-semibold">{appointment.professional}</p>
                        <p className="text-muted-foreground">{appointment.type} - {appointment.date} at {appointment.time}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs ${appointment.status === 'upcoming' ? 'text-green-600' : 'text-gray-500'}`}>
                          {appointment.status === 'upcoming' ? "Upcoming" : "Completed"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar with quick action buttons */}
        <div className="hidden lg:block">
          <Card>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" fullWidth>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start New Chat
                </Button>
                <Button variant="outline" fullWidth>
                  <Plus className="h-4 w-4 mr-2" />
                  New Appointment
                </Button>
                <Button variant="outline" fullWidth>
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  View Appointments
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
