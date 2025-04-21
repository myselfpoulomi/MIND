import { Heart, Star, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-2 bg-purple-200 rounded-full mb-4">
          <Heart className="h-5 w-5 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4">About MIND</h1>
        <p className="text-lg text-gray-500">
          We're on a mission to make mental health support accessible, 
          stigma-free, and integrated into everyday wellness.
        </p>
      </div>

      {/* Our Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-500 mb-4">
              MIND was born from a simple yet powerful idea: mental health support should be as 
              accessible and normalized as physical health care.
            </p>
            <p className="text-gray-500 mb-4">
              Founded in 2023 by a team of mental health professionals, technologists, and people with 
              lived experience of mental health challenges, we set out to create a platform that breaks 
              down barriers to mental wellness.
            </p>
            <p className="text-gray-500">
              Today, MIND serves thousands of users worldwide, providing tools for early identification,
              self-care practices, and professional support - all in one accessible application.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-200 to-blue-200 p-8 rounded-lg">
            <blockquote className="italic text-lg">
              "We envision a world where mental health support is accessible to everyone, 
              where early intervention is the norm, and where people feel empowered to 
              take care of their mental wellbeing every day."
            </blockquote>
            <p className="font-medium mt-4">— Dr. Sarah Johnson, Co-founder</p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-16 bg-purple-100 py-16 px-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl">
            To empower people to identify, understand, and address mental health concerns early,
            through accessible tools, education, and professional support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">Early Identification</h3>
              <p className="text-sm text-gray-500 text-center">
                Helping individuals recognize early signs of mental health challenges before they become crises.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">Accessible Support</h3>
              <p className="text-sm text-gray-500 text-center">
                Making mental health resources available to everyone, regardless of location or circumstances.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center mb-4 mx-auto">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">Stigma Reduction</h3>
              <p className="text-sm text-gray-500 text-center">
                Normalizing mental health conversations and care as an essential part of overall wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Dr. Sarah Johnson",
              role: "Co-founder & Clinical Director",
              desc: "Clinical Psychologist with 15+ years of experience in mental health advocacy.",
              bg: "bg-purple-200"
            },
            {
              name: "Raj Patel",
              role: "Co-founder & CEO",
              desc: "Tech entrepreneur passionate about using technology for social impact.",
              bg: "bg-blue-200"
            },
            {
              name: "Dr. Michael Chen",
              role: "Head of Research",
              desc: "Psychiatrist and researcher specializing in digital mental health interventions.",
              bg: "bg-green-200"
            },
            {
              name: "Aisha Kumar",
              role: "Community Director",
              desc: "Mental health advocate with lived experience leading our user community.",
              bg: "bg-orange-200"
            },
          ].map((member, i) => (
            <div className="bg-white p-6 rounded-lg shadow text-center" key={i}>
              <div className={`h-24 w-24 rounded-full ${member.bg} mx-auto mb-4`}></div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us */}
      <section className="text-center bg-gradient-to-r from-purple-200 to-blue-200 py-16 px-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          We're building a community that treats mental health as an essential part of overall wellness.
          Whether you're seeking support or looking to support others, there's a place for you with MIND.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg text-lg">
            Get Started
          </button>
          <button className="border border-gray-300 py-2 px-6 rounded-lg text-lg">
            Partner With Us
          </button>
        </div>
      </section>
    </div>
  );
}
