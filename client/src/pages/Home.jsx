import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Smile, Music, CheckCircle, Calendar, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-mind-purple-light/30 to-mind-blue-light/20">
        <div className="container flex flex-col items-center text-center">
          <div className="animate-fade-in mb-6 inline-flex items-center justify-center p-2 bg-white/90 backdrop-blur rounded-full shadow-sm">
            <Heart className="h-5 w-5 text-mind-purple" />
            <span className="ml-2 text-sm font-medium">Mental Wellness for Everyone</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-mind-purple to-mind-blue">
            A Journey Towards Better Mental Health
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            MIND helps you identify early mental health concerns, offering self-care tools and professional support on your wellness journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-mind-purple hover:bg-mind-purple-dark" asChild>
              <Link to="/register">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How MIND Supports You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to mental wellbeing offers tools and resources for every step of your journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-full bg-mind-purple-light/30 flex items-center justify-center mb-4 group-hover:bg-mind-purple-light/50 transition-colors">
                <Smile className="h-6 w-6 text-mind-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mood Tracking</h3>
              <p className="text-muted-foreground">
                Track your daily moods to identify patterns and gain insights into your emotional wellbeing.
              </p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-full bg-mind-purple-light/30 flex items-center justify-center mb-4 group-hover:bg-mind-purple-light/50 transition-colors">
                <Music className="h-6 w-6 text-mind-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Meditation & Music</h3>
              <p className="text-muted-foreground">
                Access curated meditation sessions and calming music to help reduce stress and anxiety.
              </p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-full bg-mind-purple-light/30 flex items-center justify-center mb-4 group-hover:bg-mind-purple-light/50 transition-colors">
                <CheckCircle className="h-6 w-6 text-mind-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wellness Goals</h3>
              <p className="text-muted-foreground">
                Set achievable wellness goals and track your progress with our easy-to-use to-do lists.
              </p>
            </div>
            
            {/* Feature Card 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-full bg-mind-purple-light/30 flex items-center justify-center mb-4 group-hover:bg-mind-purple-light/50 transition-colors">
                <MessageCircle className="h-6 w-6 text-mind-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Chat</h3>
              <p className="text-muted-foreground">
                Connect with our support system for guidance or chat with professionals when needed.
              </p>
            </div>
            
            {/* Feature Card 5 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-full bg-mind-purple-light/30 flex items-center justify-center mb-4 group-hover:bg-mind-purple-light/50 transition-colors">
                <Calendar className="h-6 w-6 text-mind-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Appointment Scheduling</h3>
              <p className="text-muted-foreground">
                Book sessions with mental health professionals at your convenience.
              </p>
            </div>
            
            {/* Feature Card 6 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-full bg-mind-purple-light/30 flex items-center justify-center mb-4 group-hover:bg-mind-purple-light/50 transition-colors">
                <Heart className="h-6 w-6 text-mind-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Resources</h3>
              <p className="text-muted-foreground">
                Quick access to emergency contacts and resources when immediate help is needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-mind-purple-light/20 to-mind-blue-light/20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Wellness Journey?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of others who have taken the first step towards better mental health with MIND.
          </p>
          <Button size="lg" className="bg-mind-purple hover:bg-mind-purple-dark" asChild>
            <Link to="/register">Join Now - It's Free</Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">No credit card required. Premium features available with subscription.</p>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from people who have benefited from MIND.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-mind-green-light flex items-center justify-center mr-3">
                  <span className="font-semibold text-mind-green-dark">A</span>
                </div>
                <div>
                  <h4 className="font-semibold">Amelia</h4>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "The meditation sessions have helped me manage my anxiety during exam periods. I'm sleeping better and feeling more focused."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-mind-blue-light flex items-center justify-center mr-3">
                  <span className="font-semibold text-mind-blue-dark">R</span>
                </div>
                <div>
                  <h4 className="font-semibold">Rajesh</h4>
                  <p className="text-sm text-muted-foreground">IT Professional</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "The to-do list feature has helped me incorporate small wellness activities into my busy day. I feel more balanced now."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-mind-peach flex items-center justify-center mr-3">
                  <span className="font-semibold text-mind-purple-dark">S</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah</h4>
                  <p className="text-sm text-muted-foreground">Teacher</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "Being able to chat with a professional when I needed guidance made all the difference. MIND was there when I needed support."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
