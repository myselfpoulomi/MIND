import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

const AppointmentScheduler = ({ onSchedule }) => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  // 🔄 Fetch doctors from the API
  useEffect(() => {
    fetch("http://localhost:5000/api/professionals/")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => {
        console.error("Failed to load doctors:", err);
        alert("Unable to fetch professionals from server.");
      });
  }, []);

  const handleSchedule = () => {
    if (!selectedDate || !selectedDoctor || !selectedTime || !name || !email) {
      alert("Please fill in all required fields");
      return;
    }

    const doctor = doctors.find((doc) => doc.id === selectedDoctor);

    const appointmentData = {
      date: selectedDate.toLocaleDateString(),
      time: selectedTime,
      provider: doctor.name,
      notes,
    };

    onSchedule(appointmentData);
    alert("Appointment scheduled!");

    setSelectedDate(undefined);
    setSelectedDoctor("");
    setSelectedTime("");
    setName("");
    setEmail("");
    setNotes("");
  };

  const getSelectedDoctor = () =>
    doctors.find((doctor) => doctor.id === selectedDoctor);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-[#7F76C4]">Schedule an Appointment</CardTitle>
        <CardDescription>
          Book a video consultation with a mental health professional
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="doctor">Select a Professional</Label>
            <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
              <SelectTrigger id="doctor" className="w-full">
                <SelectValue placeholder="Choose a doctor" />
              </SelectTrigger>
              <SelectContent>
                {doctors.map((doctor) => (
                  <SelectItem key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialization}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedDoctor && (
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={getSelectedDoctor()?.photo_url}
                  alt={getSelectedDoctor()?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{getSelectedDoctor()?.name}</p>
                <p className="text-sm text-gray-500">
                  {getSelectedDoctor()?.specialization}
                </p>
              </div>
            </div>
          )}
        </div>

        <div>
          <Label className="flex items-center mb-2">
            <CalendarIcon className="h-4 w-4 mr-2" /> Select a Date
          </Label>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="border rounded-md p-3"
            disabled={(date) =>
              date < new Date() || date.getDay() === 0 || date.getDay() === 6
            }
          />
        </div>

        {selectedDate && selectedDoctor && (
          <div>
            <Label className="flex items-center mb-2">
              <Clock className="h-4 w-4 mr-2" /> Select a Time
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {getSelectedDoctor()?.available_slots.map((slot) => {
                const date = new Date(slot);
                const timeString = date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });
                return (
                  <Button
                    key={slot}
                    type="button"
                    variant={selectedTime === timeString ? "default" : "outline"}
                    onClick={() => setSelectedTime(timeString)}
                    className={
                      selectedTime === timeString
                        ? "bg-[#7F76C4] hover:bg-[#7F76C4]"
                        : ""
                    }
                  >
                    {timeString}
                  </Button>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="notes">Notes (Optional)</Label>
          <Input
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any specific concerns or questions"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSchedule}
          className="w-full bg-[#8076cc] hover:bg-[#6e62c2]"
          disabled={
            !selectedDate || !selectedDoctor || !selectedTime || !name || !email
          }
        >
          Schedule Google Meet Appointment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AppointmentScheduler;
