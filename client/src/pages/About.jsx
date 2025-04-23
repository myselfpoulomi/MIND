import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h1>
              <p className="text-xl text-gray-600 mb-6">
                We're dedicated to making mental health support accessible to everyone through technology, education, and community.
              </p>
              <div className="flex justify-center">
                <Button className="bg-[#9e93e9] hover:bg-[#8076c5]" asChild>
                  <Link to="/dashboard">
                    Start Your Journey
                  </Link>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Story Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  MIND began with a simple observation: despite the growing awareness around mental health, many people still struggle to access the support they need when they need it.
                </p>
                <p className="text-gray-600 mb-4">
                  Founded in 2023, our team of mental health professionals, technologists, and advocates came together with a shared vision – to create a platform that combines evidence-based tools, professional support, and community connection in one accessible place.
                </p>
                <p className="text-gray-600">
                  Today, MIND is helping thousands of people understand their mental health, practice self-care, and connect with professional support when needed. We believe that mental wellbeing is a journey, not a destination, and we're honored to be part of yours.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=600&auto=format&fit=crop" 
                  alt="Team working together" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          
          {/* Core Values */}
          <section className="mb-16 py-12 bg-[#EFEAFF] rounded-xl">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#F1EDFE] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9B87F5]">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M9 9h6v6H9z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
                    <p className="text-gray-600">
                      We believe mental health support should be available to everyone, regardless of location, background, or circumstances.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#F1EDFE] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9B87F5]">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Evidence-Based</h3>
                    <p className="text-gray-600">
                      Our tools and resources are grounded in scientific research and clinical expertise to ensure effectiveness.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#F1EDFE] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9B87F5]">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                    <p className="text-gray-600">
                      We foster connection and understanding, recognizing that shared experiences can be powerful in healing.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" 
                    alt="Dr. Anjali Sharma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Dr. Anjali Sharma</h3>
                <p className="text-gray-500">Founder & Clinical Director</p>
                <p className="text-gray-600 mt-2">
                  Clinical psychologist with 15+ years of experience in mental health advocacy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                    alt="Rahul Mehta" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Rahul Mehta</h3>
                <p className="text-gray-500">Chief Technology Officer</p>
                <p className="text-gray-600 mt-2">
                  Tech innovator focused on creating accessible mental health solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop" 
                    alt="Dr. Priya Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Dr. Priya Patel</h3>
                <p className="text-gray-500">Head of Research</p>
                <p className="text-gray-600 mt-2">
                  Specializes in evidence-based approaches to digital mental health interventions.
                </p>
              </div>
            </div>
          </section>
          
          {/* Partners Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Partners</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="w-32 h-20 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="text-gray-400 font-semibold">Partner 1</div>
              </div>
              <div className="w-32 h-20 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="text-gray-400 font-semibold">Partner 2</div>
              </div>
              <div className="w-32 h-20 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="text-gray-400 font-semibold">Partner 3</div>
              </div>
              <div className="w-32 h-20 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="text-gray-400 font-semibold">Partner 4</div>
              </div>
              <div className="w-32 h-20 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="text-gray-400 font-semibold">Partner 5</div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-[#E5DEFF] p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Ready to be part of a movement that's changing how we approach mental health?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7c6cc2]" asChild>
                <Link to="/dashboard">
                  Try Our Tools
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/subscription">
                  See Premium Plans
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
