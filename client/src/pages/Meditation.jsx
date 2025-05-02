import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeditationCard from "@/components/MeditationCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Meditation = ({ session, setRefetch }) => {
  const [sessionsData, setSessionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/sessions/")
      .then((res) => res.json())
      .then((data) => {
        setSessionsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch sessions:", err);
        setLoading(false);
      });
  }, []);

  const filteredSessions = (type) => {
    return sessionsData.filter((session) => session.type?.toLowerCase() === type);
  };

  const extractYouTubeId = (url) => {
    const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };
  

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar session={session} setRefetch={setRefetch} />
      
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#827EBD] to-transparent flex items-center">
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
                <TabsTrigger value="yoga">Yoga</TabsTrigger>
                {/* <TabsTrigger value="favorites">Favorites</TabsTrigger> */}
              </TabsList>

              <TabsContent value="meditation">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSessions("meditation").map((session) => (
                    <MeditationCard 
                    key={session.id}
                    title={session.title}
                    description={session.description}
                    duration={`${session.duration_minutes} min`}
                    category={session.category[0] || "General"}
                    imageUrl={session.thumbnail_url}
                    videoId={extractYouTubeId(session.media_url)}
                  />
                  
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="yoga">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSessions("yoga").map((session) => (
                     <MeditationCard 
                     key={session.id}
                     title={session.title}
                     description={session.description}
                     duration={`${session.duration_minutes} min`}
                     category={session.category[0] || "General"}
                     imageUrl={session.thumbnail_url}
                     videoId={extractYouTubeId(session.media_url)}
                   />
                   
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* <TabsContent value="favorites">
                <div className="text-center py-12">
                  <p className="text-gray-500">You haven't saved any favorites yet.</p>
                </div>
              </TabsContent> */}
            </Tabs>

            {/* Tips Section */}
            <div className="bg-[#b9b3f196] rounded-lg p-6 mb-12">
              <h2 className="text-xl font-semibold text-mind-purple-dark mb-4">Meditation Tips for Beginners</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-mind-purple mr-2">•</span><span>Start with just 5 minutes per day and gradually increase</span></li>
                <li className="flex items-start"><span className="text-mind-purple mr-2">•</span><span>Find a quiet space where you won't be disturbed</span></li>
                <li className="flex items-start"><span className="text-mind-purple mr-2">•</span><span>Don't worry about "doing it right" - meditation is a practice</span></li>
                <li className="flex items-start"><span className="text-mind-purple mr-2">•</span><span>Try different styles to find what works best for you</span></li>
                <li className="flex items-start"><span className="text-mind-purple mr-2">•</span><span>Consistency is more important than duration</span></li>
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
