import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Phone, MessageCircle, MapPin, AlertCircle, ExternalLink, Search,
  Heart, Info, Globe, Clock, Calendar, CheckCircle
} from "lucide-react";

export default function Support() {
  const emergencyContacts = [
    {
      id: 1,
      name: "National Suicide Prevention Lifeline",
      phone: "1-800-273-8255",
      available: "24/7",
      description: "Free and confidential support for people in distress, prevention and crisis resources for you or your loved ones.",
      type: "hotline"
    },
    {
      id: 2,
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      available: "24/7",
      description: "Free, 24/7 support for those in crisis. Text with a trained Crisis Counselor.",
      type: "hotline"
    },
    {
      id: 3,
      name: "National Alliance on Mental Illness (NAMI) Helpline",
      phone: "1-800-950-6264",
      available: "Mon-Fri, 10 AM to 6 PM",
      description: "Information, resource referrals and support for people living with mental health conditions and their family members and caregivers.",
      type: "hotline"
    },
    {
      id: 4,
      name: "Veterans Crisis Line",
      phone: "1-800-273-8255 (Press 1)",
      available: "24/7",
      description: "Connects veterans in crisis and their families with qualified Department of Veterans Affairs responders.",
      type: "hotline"
    },
    {
      id: 5,
      name: "Disaster Distress Helpline",
      phone: "1-800-985-5990",
      available: "24/7",
      description: "Crisis counseling for people experiencing emotional distress related to natural or human-caused disasters.",
      type: "hotline"
    },
  ];
  
  const localResources = [
    {
      id: 1,
      name: "City General Hospital",
      address: "123 Main Street, Downtown",
      phone: "(555) 123-4567",
      hours: "24/7 Emergency Services",
      type: "hospital",
      distance: "2.3 miles"
    },
    {
      id: 2,
      name: "Community Mental Health Center",
      address: "456 Oak Avenue, Midtown",
      phone: "(555) 987-6543",
      hours: "Mon-Fri: 9 AM - 5 PM, Sat: 10 AM - 2 PM",
      type: "clinic",
      distance: "1.5 miles"
    },
    {
      id: 3,
      name: "Wellness Counseling Services",
      address: "789 Pine Street, Westside",
      phone: "(555) 456-7890",
      hours: "Mon-Fri: 8 AM - 7 PM",
      type: "counseling",
      distance: "3.8 miles"
    },
    {
      id: 4,
      name: "University Health Services",
      address: "101 College Road, Campus Area",
      phone: "(555) 234-5678",
      hours: "Mon-Fri: 8 AM - 8 PM, Sat-Sun: 10 AM - 6 PM",
      type: "clinic",
      distance: "4.2 miles"
    },
  ];
  
  return (
    <div className="container py-8">
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center p-2 bg-red-100 text-red-700 rounded-full mb-4">
          <AlertCircle className="h-5 w-5" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Emergency Support Resources</h1>
        <p className="text-lg text-muted-foreground">
          If you're experiencing a mental health emergency or crisis, please use the resources below to get immediate help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Phone className="h-4 w-4 mr-2" />
            Call Emergency Services
          </Button>
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Find Local Resources
          </Button>
        </div>
      </div>
      
      {/* Alert Card */}
      <Card className="mb-8 border-red-200 bg-red-50">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-red-700 mb-1">In Case of Immediate Danger</h2>
              <p className="text-muted-foreground">
                If you or someone you know is in immediate danger of self-harm, suicide, or harm to others, please call emergency services (911 in the US) or go to your nearest emergency room immediately.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="hotlines" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="hotlines">Crisis Hotlines</TabsTrigger>
          <TabsTrigger value="local">Local Resources</TabsTrigger>
          <TabsTrigger value="specialists">Specialists</TabsTrigger>
        </TabsList>
        
        <TabsContent value="hotlines">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Crisis Hotlines & Resources</h2>
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="pl-10" placeholder="Search resources..." />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {emergencyContacts.map((contact) => (
                <Card key={contact.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-mind-purple-light/10 p-6 md:w-1/3 flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{contact.name}</h3>
                          <div className="inline-flex items-center px-2 py-1 rounded bg-mind-purple-light/20 text-mind-purple text-xs font-medium">
                            {contact.available}
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="font-bold text-xl">{contact.phone}</div>
                          <Button variant="link" className="p-0 h-auto text-sm text-mind-purple mt-1">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Visit Website
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-6 md:w-2/3 flex flex-col justify-between">
                        <div>
                          <p className="text-muted-foreground mb-4">
                            {contact.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <div className="inline-flex items-center px-2 py-1 rounded-full bg-secondary text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {contact.available}
                            </div>
                            <div className="inline-flex items-center px-2 py-1 rounded-full bg-secondary text-xs">
                              <Globe className="h-3 w-3 mr-1" />
                              National Service
                            </div>
                            <div className="inline-flex items-center px-2 py-1 rounded-full bg-secondary text-xs">
                              <Phone className="h-3 w-3 mr-1" />
                              Toll Free
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button className="bg-mind-purple hover:bg-mind-purple-dark">
                            <Phone className="h-4 w-4 mr-2" />
                            Call Now
                          </Button>
                          {contact.type === "hotline" && (
                            <Button variant="outline">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Text Support
                            </Button>
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

        {/* Add other TabsContent for "local" and "specialists" as needed */}
        
      </Tabs>
    </div>
  );
}
