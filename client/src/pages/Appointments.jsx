import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentScheduler from "@/components/AppointmentScheduler";
import AppointmentList from "@/components/AppointmentList";

const Appointments = ({ session, setRefetch }) => {
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

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

          {/* Scheduler */}
          <div className="max-w-3xl mx-auto">
            <AppointmentScheduler onSchedule={handleAddAppointment} />
          </div>

          {/* List */}
          <div className="max-w-3xl mx-auto mt-10">
            <AppointmentList appointments={appointments} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Appointments;
