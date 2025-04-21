import { useState } from "react";
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

const doctors = [
  {
    id: "dr-emily-chen",
    name: "Dr. Emily Chen",
    specialty: "Clinical Psychologist",
    imageUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
    availability: ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
  },
  {
    id: "dr-marcus-patel",
    name: "Dr. Marcus Patel",
    specialty: "Psychiatrist",
    imageUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop",
    availability: ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM"],
  },
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    specialty: "Therapist",
    imageUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&auto=format&fit=crop",
    availability: ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM"],
  },
];

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const handleSchedule = () => {
    if (!selectedDate || !selectedDoctor || !selectedTime || !name || !email) {
      alert("Please fill in all required fields");
      return;
    }

    const appointmentData = {
      date: selectedDate,
      doctorId: selectedDoctor,
      time: selectedTime,
      name,
      email,
      notes,
    };

    console.log("Appointment scheduled:", appointmentData);

    alert(
      "Your appointment has been scheduled. Please check your email for confirmation."
    );

    setSelectedDate(undefined);
    setSelectedDoctor("");
    setSelectedTime("");
    setNotes("");
  };

  const getSelectedDoctor = () => {
    return doctors.find((doctor) => doctor.id === selectedDoctor);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-mind-purple-dark">
          Schedule an Appointment
        </CardTitle>
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
                    {doctor.name} - {doctor.specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedDoctor && (
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={getSelectedDoctor()?.imageUrl}
                  alt={getSelectedDoctor()?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{getSelectedDoctor()?.name}</p>
                <p className="text-sm text-gray-500">
                  {getSelectedDoctor()?.specialty}
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
              date < new Date() ||
              date.getDay() === 0 ||
              date.getDay() === 6
            }
          />
        </div>

        {selectedDate && selectedDoctor && (
          <div>
            <Label className="flex items-center mb-2">
              <Clock className="h-4 w-4 mr-2" /> Select a Time
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {getSelectedDoctor()?.availability.map((time) => (
                <Button
                  key={time}
                  type="button"
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className={
                    selectedTime === time
                      ? "bg-mind-purple hover:bg-mind-purple-dark"
                      : ""
                  }
                >
                  {time}
                </Button>
              ))}
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
          className="w-full bg-mind-purple hover:bg-mind-purple-dark"
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
