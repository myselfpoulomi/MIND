import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import MeditationCard from "@/components/meditation-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const meditations = [
  {
    id: "med1",
    title: "Morning Calm",
    description: "Start your day with clarity and intention through this guided meditation",
    duration: "10 min",
    category: "Relaxation",
    imageUrl: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?q=80&w=500&auto=format&fit=crop",
    videoId: "O-6f5wQXSu8",
  },
  {
    id: "med2",
    title: "Anxiety Relief",
    description: "Release tension and find peace with this specialized anxiety-reducing meditation",
    duration: "15 min",
    category: "Anxiety",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=500&auto=format&fit=crop",
    videoId: "O-6f5wQXSu8",
  },
  {
    id: "med3",
    title: "Deep Sleep",
    description: "Prepare your mind and body for restful sleep with gentle guidance",
    duration: "20 min",
    category: "Sleep",
    imageUrl: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?q=80&w=500&auto=format&fit=crop",
    videoId: "O-6f5wQXSu8",
  },
  {
    id: "med4",
    title: "Focus & Concentration",
    description: "Sharpen your mind and improve your focus with this concentration meditation",
    duration: "12 min",
    category: "Focus",
    imageUrl: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=500&auto=format&fit=crop",
    videoId: "O-6f5wQXSu8",
  },
  {
    id: "med5",
    title: "Loving-Kindness",
    description: "Cultivate compassion for yourself and others with this heart-centered practice",
    duration: "15 min",
    category: "Compassion",
    imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=500&auto=format&fit=crop",
    videoId: "O-6f5wQXSu8",
  },
  {
    id: "med6",
    title: "Body Scan Relaxation",
    description: "Release tension throughout your body with this progressive relaxation technique",
    duration: "18 min",
    category: "Relaxation",
    imageUrl: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=500&auto=format&fit=crop",
    videoId: "O-6f5wQXSu8",
  },
];

const yogaSessions = [
  {
    id: "yoga1",
    title: "Morning Stretch",
    description: "Gentle yoga sequence to wake up your body and prepare for the day",
    duration: "15 min",
    category: "Beginners",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=500&auto=format&fit=crop",
    videoId: "O-6f5wQXSu8",
  },
  {
    id: "yoga2",
    title: "Stress Relief Yoga",
    description: "Release tension in your body with gentle poses focused on relaxation",
    duration: "20 min",
    category: "Relaxation",
    imageUrl: "https://images.unsplash.com/photo-1599447292180-45fd84092ef4?q=80&w=500&auto=format&fit=crop",
    videoId: "O-6f5wQXSu8",
  },
  {
    id: "yoga3",
    title: "Bedtime Yoga",
    description: "Calm your mind and body with restful poses to prepare for sleep",
    duration: "12 min",
    category: "Sleep",
    imageUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=500&auto=format&fit=crop",
    videoId: "O-6f5wQXSu8",
  },
  {
    id: "yoga4",
    title: "Energy Boost Flow",
    description: "Revitalize your body and mind when you need an energy lift",
    duration: "25 min",
    category: "Energizing",
    imageUrl: "https://images.unsplash.com/photo-1593810450967-f9c42742e319?q=80&w=500&auto=format&fit=crop",
    videoId: "O-6f5wQXSu8",
  },
];

const Meditation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="relative rounded-xl overflow-hidden h-64 md:h-80">
              <img 
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1600&auto=format&fit=crop" 
                alt="Meditation and yoga" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-mind-purple/80 to-transparent flex items-center">
                <div className="max-w-lg px-6 md:px-10">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Meditation & Yoga
                  </h1>
                  <p className="text-white/90 text-lg">
                    Discover peace of mind and physical wellness through our guided sessions
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Main Content */}
          <section>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
              <h2 className="text-2xl font-bold text-gray-900">Explore Sessions</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search meditations..." 
                  className="pl-10 w-full md:w-64" 
                />
              </div>
            </div>
            
            <Tabs defaultValue="meditation" className="mb-12">
              <TabsList className="mb-6">
                <TabsTrigger value="meditation">Meditation</TabsTrigger>
                <TabsTrigger value="yoga" id="yoga">Yoga</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>
              
              <TabsContent value="meditation">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {meditations.map((meditation) => (
                    <MeditationCard 
                      key={meditation.id}
                      title={meditation.title}
                      description={meditation.description}
                      duration={meditation.duration}
                      category={meditation.category}
                      imageUrl={meditation.imageUrl}
                      videoId={meditation.videoId}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="yoga">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {yogaSessions.map((yoga) => (
                    <MeditationCard 
                      key={yoga.id}
                      title={yoga.title}
                      description={yoga.description}
                      duration={yoga.duration}
                      category={yoga.category}
                      imageUrl={yoga.imageUrl}
                      videoId={yoga.videoId}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="favorites">
                <div className="text-center py-12">
                  <p className="text-gray-500">You haven't saved any favorites yet.</p>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Tips Section */}
            <div className="bg-mind-purple-light rounded-lg p-6 mb-12">
              <h2 className="text-xl font-semibold text-mind-purple-dark mb-4">Meditation Tips for Beginners</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-mind-purple mr-2">•</span>
                  <span>Start with just 5 minutes per day and gradually increase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mind-purple mr-2">•</span>
                  <span>Find a quiet space where you won't be disturbed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mind-purple mr-2">•</span>
                  <span>Don't worry about "doing it right" - meditation is a practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mind-purple mr-2">•</span>
                  <span>Try different styles to find what works best for you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mind-purple mr-2">•</span>
                  <span>Consistency is more important than duration</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Meditation;
