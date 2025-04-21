import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoodTracker from "@/components/MoodTracker";
import TodoList from "@/components/TodoList";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Music, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [tipIndex, setTipIndex] = useState(0);
  
  const nextTip = () => {
    setTipIndex((prevIndex) => (prevIndex + 1) % dailyTips.length);
  };
  
  const currentTip = dailyTips[tipIndex];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Wellness Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Daily Mindfulness</CardTitle>
                  <CardDescription>Tip of the day for your wellbeing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Badge className="bg-mind-purple-light text-mind-purple-dark border-0">
                      {currentTip.category}
                    </Badge>
                    <h3 className="font-semibold text-lg">{currentTip.title}</h3>
                    <p className="text-gray-600">{currentTip.content}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    onClick={nextTip}
                    className="w-full"
                  >
                    Next Tip
                  </Button>
                </CardFooter>
              </Card>
              
              <MoodTracker />
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Quick Access</CardTitle>
                  <CardDescription>Jump to your favorite tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <Link 
                        key={index}
                        to={link.to}
                        className="flex items-center p-3 rounded-lg border border-gray-100 hover:border-mind-purple-light transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-full ${link.color} flex items-center justify-center mr-3`}>
                          {link.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{link.title}</h3>
                          <p className="text-sm text-gray-500">{link.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Center and Right Columns */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Your Wellness Journey</CardTitle>
                  <CardDescription>Recommended activities for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="meditation">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="meditation">Meditation</TabsTrigger>
                      <TabsTrigger value="music">Music</TabsTrigger>
                      <TabsTrigger value="exercises">Exercises</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="meditation" className="space-y-4">
                      <div className="relative rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?q=80&w=800&auto=format&fit=crop" 
                          alt="Meditation session" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                          <div className="text-white">
                            <h3 className="text-lg font-semibold">Morning Calm</h3>
                            <p className="text-sm text-white/80">10-minute guided meditation</p>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-mind-purple hover:bg-mind-purple-dark" asChild>
                        <Link to="/meditation">
                          Start Meditation
                        </Link>
                      </Button>
                    </TabsContent>
                    
                    <TabsContent value="music" className="space-y-4">
                      <div className="relative rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop" 
                          alt="Calming music" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                          <div className="text-white">
                            <h3 className="text-lg font-semibold">Forest Sounds</h3>
                            <p className="text-sm text-white/80">Gentle nature ambience</p>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-mind-blue hover:bg-mind-blue-dark" asChild>
                        <Link to="/music">
                          Listen Now
                        </Link>
                      </Button>
                    </TabsContent>
                    
                    <TabsContent value="exercises" className="space-y-4">
                      <div className="relative rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop" 
                          alt="Gentle yoga" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                          <div className="text-white">
                            <h3 className="text-lg font-semibold">Gentle Morning Stretch</h3>
                            <p className="text-sm text-white/80">15-minute yoga routine</p>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                        <Link to="/meditation#yoga">
                          Start Yoga
                        </Link>
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <TodoList />
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Need Professional Help?</CardTitle>
                  <CardDescription>Connect with mental health experts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Our network of licensed professionals is here to support you through your mental health journey.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button className="bg-mind-purple hover:bg-mind-purple-dark" asChild>
                      <Link to="/appointments">
                        Schedule Appointment
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/support">
                        Chat Support
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Badge component for the Dashboard
const Badge = ({ children, className, ...props }) => {
  return (
    <div 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Dashboard;
