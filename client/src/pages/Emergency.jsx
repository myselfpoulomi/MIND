import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyContacts from "@/components/EmergencyContacts";

const Emergency = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Emergency Support</h1>
            <p className="mt-2 text-lg text-gray-600">
              Get immediate help during a mental health crisis
            </p>
          </div>
          
          {/* Emergency Contacts */}
          <EmergencyContacts />
          
          {/* Crisis Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recognizing a Mental Health Crisis</h2>
              <p className="text-gray-600 mb-4">
                It's important to recognize the signs of a mental health emergency. Look for:
              </p>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Talking about wanting to die or kill oneself",
                  "Looking for ways to kill oneself",
                  "Talking about feeling hopeless or having no reason to live",
                  "Talking about feeling trapped or in unbearable pain",
                  "Talking about being a burden to others",
                  "Increasing use of alcohol or drugs",
                  "Acting anxious or agitated; behaving recklessly",
                  "Withdrawing or feeling isolated",
                  "Displaying extreme mood swings"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Help Someone in Crisis</h2>
              <p className="text-gray-600 mb-4">
                If you believe someone is at immediate risk of harming themselves or others:
              </p>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Stay with them - Don't leave them alone",
                  "Remove potential means of harm if possible",
                  "Listen without judgment - Let them express their feelings",
                  "Call emergency services (112) if the situation is life-threatening",
                  "Contact a crisis helpline for guidance on how to help",
                  "Reassure them that help is available and recovery is possible"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-mind-purple mr-2">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Safety Plan */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Creating a Safety Plan</h2>
            <p className="text-gray-600 mb-6">
              A safety plan is a personalized, practical plan that can help someone avoid a crisis or get through one. It includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Warning Signs", description: "Identify personal warning signs that may indicate a crisis is developing" },
                { title: "Coping Strategies", description: "List activities that can help distract from difficult thoughts or feelings" },
                { title: "Social Connections", description: "Identify people and social settings that provide distraction and support" },
                { title: "Contact List", description: "Create a list of friends, family members, and professionals who can help" },
                { title: "Professional Resources", description: "Include contact information for mental health professionals and services" },
                { title: "Making the Environment Safe", description: "Steps to make your environment safer by removing potential means of harm" }
              ].map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-md p-4">
                  <h3 className="font-medium text-mind-purple-dark mb-2">{index + 1}. {item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* After a Crisis */}
          <div className="bg-mind-purple-light p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-mind-purple-dark mb-4">After a Crisis: Next Steps</h2>
            <p className="text-gray-600 mb-4">
              After navigating through a mental health emergency, consider these important next steps:
            </p>
            <ul className="space-y-2 text-gray-600">
              {[
                "Follow up with mental health professionals - Schedule appointments with therapists or psychiatrists",
                "Create or review your safety plan - Update it based on what you've learned",
                "Connect with support groups - Sharing experiences with others can help recovery",
                "Practice self-care - Ensure you're meeting basic needs like sleep, nutrition, and exercise",
                "Consider MIND's professional support services - Our mental health professionals can provide guidance and treatment"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-mind-purple mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Emergency;
