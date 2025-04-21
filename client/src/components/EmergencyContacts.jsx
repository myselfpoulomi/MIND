import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

const emergencyContacts = [
  {
    name: "National Mental Health Helpline",
    description: "24/7 crisis support and suicide prevention services",
    phoneNumber: "1800-599-0019",
    chatUrl: "#",
    hours: "24 hours, everyday",
  },
  {
    name: "AASRA",
    description: "For individuals in emotional distress or suicidal crisis",
    phoneNumber: "91-9820466726",
    hours: "24 hours, everyday",
  },
  {
    name: "Vandrevala Foundation",
    description: "Mental health support and crisis intervention",
    phoneNumber: "9999666555",
    chatUrl: "#",
    hours: "24 hours, everyday",
  },
  {
    name: "Connecting Trust",
    description: "Emotional support helpline",
    phoneNumber: "9922001122",
    hours: "12pm to 8pm, everyday",
  },
  {
    name: "iCALL",
    description: "Psychosocial helpline for emotional and mental health concerns",
    phoneNumber: "022-25521111",
    chatUrl: "#",
    hours: "8am to 10pm, Mon-Sat",
  },
];

const EmergencyContacts = () => {
  const handleCallNumber = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="space-y-4">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Emergency Warning</h3>
            <div className="mt-2 text-sm text-red-700">
              <p>
                If you or someone you know is in immediate danger, please call emergency services at <strong>112</strong> immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {emergencyContacts.map((contact, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">{contact.name}</CardTitle>
              <CardDescription>{contact.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">Hours:</span>
                  <span className="ml-2">{contact.hours}</span>
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Button onClick={() => handleCallNumber(contact.phoneNumber)} className="bg-mind-purple hover:bg-mind-purple-dark">
                    <Phone className="h-4 w-4 mr-2" /> {contact.phoneNumber}
                  </Button>

                  {contact.chatUrl && (
                    <Button variant="outline" asChild>
                      <a href={contact.chatUrl}>
                        <MessageSquare className="h-4 w-4 mr-2" /> Chat
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;
