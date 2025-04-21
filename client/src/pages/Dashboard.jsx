import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smile, Music, CheckCircle, BookOpen, Clock, Video, Calendar, MessageCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const [mood, setMood] = useState(null);
  
  const moods = [
    { emoji: "😢", label: "Sad", color: "bg-blue-100 hover:bg-blue-200" },
    { emoji: "😔", label: "Down", color: "bg-indigo-100 hover:bg-indigo-200" },
    { emoji: "😐", label: "Neutral", color: "bg-gray-100 hover:bg-gray-200" },
    { emoji: "🙂", label: "Good", color: "bg-green-100 hover:bg-green-200" },
    { emoji: "😄", label: "Great", color: "bg-yellow-100 hover:bg-yellow-200" },
  ];

  const quickAccessItems = [
    { 
      icon: <Video className="h-5 w-5" />, 
      title: "5-Minute Breathing", 
      category: "Meditation",
      duration: "5 min", 
      color: "bg-mind-purple-light/20" 
    },
    { 
      icon: <Music className="h-5 w-5" />, 
      title: "Calm Piano", 
      category: "Music",
      duration: "30 min", 
      color: "bg-mind-blue-light/20" 
    },
    { 
      icon: <BookOpen className="h-5 w-5" />, 
      title: "Beginner Yoga", 
      category: "Yoga",
      duration: "15 min", 
      color: "bg-mind-green-light/20" 
    },
    { 
      icon: <Clock className="h-5 w-5" />, 
      title: "Sleep Meditation", 
      category: "Sleep",
      duration: "20 min", 
      color: "bg-mind-peach/40" 
    },
  ];

  const todoItems = [
    { id: 1, text: "Drink water (2 liters)", completed: true },
    { id: 2, text: "15-minute mindful walk", completed: false },
    { id: 3, text: "Journal thoughts before bed", completed: false },
    { id: 4, text: "Practice gratitude", completed: true },
    { id: 5, text: "Connect with a friend", completed: false },
  ];

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wellness Dashboard</h1>
      
      {/* Mood Tracker */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Smile className="h-5 w-5 mr-2 text-mind-purple" />
            Today's Mood
          </CardTitle>
          <CardDescription>How are you feeling today?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            {moods.map((item) => (
              <button
                key={item.label}
                className={`flex flex-col items-center p-4 rounded-lg transition-colors ${item.color} ${mood === item.label ? "ring-2 ring-mind-purple" : ""}`}
                onClick={() => setMood(item.label)}
              >
                <span className="text-3xl mb-1">{item.emoji}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          {mood ? (
            <p className="text-sm text-muted-foreground">
              You're feeling <span className="font-medium">{mood}</span> today. Remember that all emotions are valid and temporary.
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              Tracking your mood helps you understand patterns in your emotional wellbeing.
            </p>
          )}
        </CardFooter>
      </Card>
      
      {/* Quick Access */}
      <h2 className="text-2xl font-semibold mb-4">Quick Access</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {quickAccessItems.map((item, i) => (
          <Card key={i} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className={`h-10 w-10 rounded-full ${item.color} flex items-center justify-center mb-3`}>
                {item.icon}
              </div>
              <h3 className="font-medium">{item.title}</h3>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>{item.category}</span>
                <span>{item.duration}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Progress and Todo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Weekly Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Your Weekly Progress</CardTitle>
            <CardDescription>Tracking your wellness activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Meditation</span>
                  <span>3/5 days</span>
                </div>
                <Progress value={60} className="h-2 bg-mind-purple-light/30" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Physical Activity</span>
                  <span>2/3 days</span>
                </div>
                <Progress value={66} className="h-2 bg-mind-green-light" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Journaling</span>
                  <span>4/7 days</span>
                </div>
                <Progress value={57} className="h-2 bg-mind-blue-light" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Sleep Quality</span>
                  <span>Good</span>
                </div>
                <Progress value={75} className="h-2 bg-mind-peach" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">View Detailed Report</Button>
          </CardFooter>
        </Card>
        
        {/* Todo List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-mind-purple" />
              Wellness Goals
            </CardTitle>
            <CardDescription>Your mental health tasks for today</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {todoItems.map((item) => (
                <li key={item.id} className="flex items-center p-2 rounded hover:bg-secondary">
                  <input 
                    type="checkbox" 
                    id={`todo-${item.id}`} 
                    defaultChecked={item.completed}
                    className="h-5 w-5 rounded border-gray-300 text-mind-purple focus:ring-mind-purple mr-3"
                  />
                  <label 
                    htmlFor={`todo-${item.id}`} 
                    className={`flex-1 text-sm ${item.completed ? "line-through text-muted-foreground" : ""}`}
                  >
                    {item.text}
                  </label>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">Add New Goal</Button>
            <Button variant="ghost" size="sm">View All</Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Upcoming Sessions and Resources */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Explore More</h2>
      <Tabs defaultValue="recommended" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="saved">Saved Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="recommended">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="bg-mind-blue-light/30 h-40 rounded-md flex items-center justify-center mb-3">
                  <Music className="h-8 w-8 text-mind-blue" />
                </div>
                <h3 className="font-medium">Anxiety Relief Playlist</h3>
                <p className="text-sm text-muted-foreground mt-1">Curated sounds to help reduce anxiety and stress</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="bg-mind-green-light/30 h-40 rounded-md flex items-center justify-center mb-3">
                  <Video className="h-8 w-8 text-mind-green" />
                </div>
                <h3 className="font-medium">Yoga for Beginners</h3>
                <p className="text-sm text-muted-foreground mt-1">Easy yoga poses for mental clarity and relaxation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="bg-mind-purple-light/30 h-40 rounded-md flex items-center justify-center mb-3">
                  <BookOpen className="h-8 w-8 text-mind-purple" />
                </div>
                <h3 className="font-medium">Understanding Stress</h3>
                <p className="text-sm text-muted-foreground mt-1">Article: How stress affects your mind and body</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="upcoming">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4 flex items-center">
                <div className="bg-mind-purple-light/20 p-3 rounded-full mr-4">
                  <Calendar className="h-5 w-5 text-mind-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Group Meditation Session</h3>
                  <p className="text-sm text-muted-foreground">Tomorrow, 7:00 PM</p>
                </div>
                <Button variant="outline" size="sm">Join</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center">
                <div className="bg-mind-blue-light/20 p-3 rounded-full mr-4">
                  <MessageCircle className="h-5 w-5 text-mind-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Chat with Dr. Sharma</h3>
                  <p className="text-sm text-muted-foreground">Friday, 4:30 PM</p>
                </div>
                <Button variant="outline" size="sm">Reschedule</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="saved">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center">
                <div className="bg-mind-green-light/20 p-3 rounded-full mr-4">
                  <BookOpen className="h-5 w-5 text-mind-green" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Breathing Techniques</h3>
                  <p className="text-sm text-muted-foreground">Saved 3 days ago</p>
                </div>
                <Button variant="ghost" size="sm">View</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center">
                <div className="bg-mind-peach/30 p-3 rounded-full mr-4">
                  <Music className="h-5 w-5 text-mind-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Sleep Sounds</h3>
                  <p className="text-sm text-muted-foreground">Saved 1 week ago</p>
                </div>
                <Button variant="ghost" size="sm">Play</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
