import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TodoList from "@/components/TodoList";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Todos = ({session,setRefetch}) => {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar session={session} setRefetch={setRefetch} />
      
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Mental Wellness Tasks</h1>
            <p className="mt-2 text-lg text-gray-600">
              Track small daily actions to improve your mental wellbeing
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Todo List */}
            <div className="lg:col-span-2">
              <TodoList />
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#7E69AB]">Why Daily Tasks Matter</CardTitle>
                  <CardDescription>The science behind small actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Small, consistent actions can have a significant impact on your mental health. Research shows that developing healthy habits can:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-mind-purple mr-2">•</span>
                      <span>Reduce stress and anxiety levels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mind-purple mr-2">•</span>
                      <span>Improve your overall mood</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mind-purple mr-2">•</span>
                      <span>Boost productivity and energy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mind-purple mr-2">•</span>
                      <span>Increase your sense of accomplishment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#7E69AB]">Task Ideas</CardTitle>
                  <CardDescription>Simple actions for mental wellness</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-[#F2EEFF] rounded-md">
                      <h3 className="font-medium text-[#7E69AB]">Self-Care</h3>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        <li>Take a relaxing bath or shower</li>
                        <li>Drink 8 glasses of water</li>
                        <li>Get at least 7 hours of sleep</li>
                        <li>Step outside for 15 minutes</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-[#E9F1FE] rounded-md">
                      <h3 className="font-medium text-[#1EAEDB]">Mindfulness</h3>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        <li>Meditate for 5 minutes</li>
                        <li>Practice deep breathing for 3 minutes</li>
                        <li>Write 3 things you're grateful for</li>
                        <li>Do a body scan meditation</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-[#FFEEF0] rounded-md">
                      <h3 className="font-medium text-pink-700">Connection</h3>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        <li>Call or message a friend</li>
                        <li>Have a meaningful conversation</li>
                        <li>Give someone a compliment</li>
                        <li>Perform a random act of kindness</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Todos;
