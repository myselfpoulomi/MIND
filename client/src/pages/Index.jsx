import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowRight, Calendar, Music, List, MessageCircle } from "lucide-react";

const Index = ({session,setRefetch}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar session={session} setRefetch={setRefetch} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#EAE4FF] via-white to-[#D8E7FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Begin Your Mental <span className="text-[#9B87F5]">Wellbeing</span> Journey
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Discover tools to improve your mental health, practice self-care, and connect with professional support.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#9B87F5] hover:bg-[#7e79a7]" asChild>
                  <Link to="/dashboard">
                    Start Your Journey
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" 
                alt="Person meditating in a peaceful setting" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive tools to support your mental wellbeing journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-[#E5DEFF] border-none hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Heart className="h-8 w-8 text-[#9B87F5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Meditation & Yoga</h3>
                <p className="text-gray-600 mb-4">
                  Guided sessions for relaxation, focus, sleep, and anxiety
                </p>
                <Button variant="link" asChild className="text-[#7b68ce]">
                  <Link to="/meditation" className="flex items-center">
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-[#D3E4FD] border-none hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Music className="h-8 w-8 text-[#33C3F0]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calming Music</h3>
                <p className="text-gray-600 mb-4">
                  Curated playlists to help you relax, focus, and sleep better
                </p>
                <Button variant="link" asChild className="text-[#2a95b6]">
                  <Link to="/music" className="flex items-center">
                    Listen <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-[#FFDEE2] border-none hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <List className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Wellness Tasks</h3>
                <p className="text-gray-600 mb-4">
                  Create and track daily goals to improve your mental health
                </p>
                <Button variant="link" asChild className="text-pink-500">
                  <Link to="/todos" className="flex items-center">
                    Create Tasks <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-[#b2e9c8] border-none hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Calendar className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600 mb-4">
                  Schedule appointments with mental health professionals
                </p>
                <Button variant="link" asChild className="text-green-600">
                  <Link to="/appointments" className="flex items-center">
                    Book Now <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#9B87F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Wellness Journey Today</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards better mental health with our comprehensive tools and professional support.
          </p>
          <Button size="lg" className="bg-white text-[#9B87F5] hover:bg-gray-100" asChild>
            <Link to="/dashboard">
              Try Now For Free
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600">
              Hear from people who have improved their mental wellbeing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#E5DEFF] flex items-center justify-center">
                    <span className="text-[#9B87F5] font-bold">DP</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Deblina P.</h4>
                    <p className="text-sm text-gray-500">Nadia</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The meditation sessions have helped me manage my anxiety tremendously. I feel more calm and centered in my daily life."
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#D3E4FD] flex items-center justify-center">
                    <span className="text-[#33C9F5] font-bold">AG</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Anirban G.</h4>
                    <p className="text-sm text-gray-500">Kolkata</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "I was skeptical at first, but the professional appointment feature connected me with a therapist who really understood me. So grateful."
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFDEE2] flex items-center justify-center">
                    <span className="text-pink-500 font-bold">AN</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Ansu N.</h4>
                    <p className="text-sm text-gray-500">Durgapur</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The wellness task feature helps me stay accountable for my mental health. Small daily actions have made a big difference over time."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
