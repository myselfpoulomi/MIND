import React from "react";

const AppointmentList = ({ appointments }) => {
  if (!appointments || appointments.length === 0) {
    return (
      <div className="text-center text-gray-500 py-6">
        No appointments scheduled.
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Scheduled Appointments</h2>
      <ul className="space-y-3">
        {appointments.map((appt, index) => (
          <li key={index} className="border p-4 rounded-md hover:bg-gray-50">
            <p className="text-gray-700"><strong>Date:</strong> {appt.date}</p>
            <p className="text-gray-700"><strong>Time:</strong> {appt.time}</p>
            <p className="text-gray-700"><strong>With:</strong> {appt.provider}</p>
            <p className="text-gray-600 text-sm">{appt.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
