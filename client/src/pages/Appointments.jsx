import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentScheduler from "@/components/AppointmentScheduler";

const Appointments = ({session,setRefetch}) => {
  return (
    <div className="min-h-screen flex flex-col">
     <Navbar session={session} setRefetch={setRefetch} />
      
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Professional Support</h1>
            <p className="mt-2 text-lg text-gray-600">
              Schedule a video consultation with mental health professionals
            </p>
          </div>
          
          {/* Main Content */}
          <div className="max-w-3xl mx-auto">
            <AppointmentScheduler />
          </div>
          
          {/* Info Section */}
          <div className="max-w-3xl mx-auto mt-12 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#9B87F5] p-6">
              <h2 className="text-xl font-semibold text-white">What to Expect</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Before Your Appointment</h3>
                  <p className="text-gray-600 mt-2">
                    Take some time to think about what you'd like to discuss. Consider writing down any questions or concerns you have, as well as any symptoms you've been experiencing. This will help your provider understand your needs better.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg text-gray-900">During Your Appointment</h3>
                  <p className="text-gray-600 mt-2">
                    Your provider will ask questions about your mental health, lifestyle, and any challenges you're facing. Be open and honest in your responses - this helps them provide the best care possible. The session typically lasts 45-50 minutes.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg text-gray-900">After Your Appointment</h3>
                  <p className="text-gray-600 mt-2">
                    Your provider may recommend follow-up appointments, suggest resources, or provide recommendations for managing your mental health. You'll have the option to schedule additional sessions as needed.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium text-mind-purple-dark">Technical Requirements</h3>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• A device with a camera and microphone (smartphone, tablet, or computer)</li>
                    <li>• Stable internet connection</li>
                    <li>• Google Meet app or access via web browser</li>
                    <li>• A quiet, private space for your appointment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Appointments;
