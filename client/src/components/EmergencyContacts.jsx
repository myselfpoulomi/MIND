import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe } from "lucide-react";

const EmergencyContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCallNumber = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/resources");
        const data = await res.json();
        setContacts(data);
      } catch (error) {
        console.error("Failed to fetch emergency contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

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

      {loading ? (
        <p className="text-gray-600">Loading emergency contacts...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map((contact, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{contact.title}</CardTitle>
                <CardDescription>{contact.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-700">
                  {contact.hours && (
                    <div>
                      <span className="font-medium">Hours:</span> {contact.hours}
                    </div>
                  )}

                  {contact.contact_info?.email && (
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-600" />
                      <a href={`mailto:${contact.contact_info.email}`} className="hover:underline">
                        {contact.contact_info.email}
                      </a>
                    </div>
                  )}

                  {contact.contact_info?.website && (
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-gray-600" />
                      <a href={contact.contact_info.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {contact.contact_info.website}
                      </a>
                    </div>
                  )}

                  {contact.contact_info?.phone && (
                    <Button onClick={() => handleCallNumber(contact.contact_info.phone)} className="bg-[#9B87F5] hover:bg-[#7364b9]">
                      <Phone className="h-4 w-4 mr-2" /> {contact.contact_info.phone}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmergencyContacts;
