import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const moods = [
  { name: "Happy", emoji: "😊", color: "bg-green-100 border-green-300" },
  { name: "Calm", emoji: "😌", color: "bg-blue-100 border-blue-300" },
  { name: "Tired", emoji: "😴", color: "bg-yellow-100 border-yellow-300" },
  { name: "Anxious", emoji: "😟", color: "bg-orange-100 border-orange-300" },
  { name: "Sad", emoji: "😢", color: "bg-indigo-100 border-indigo-300" },
  { name: "Stressed", emoji: "😩", color: "bg-red-100 border-red-300" },
  { name: "Motivated", emoji: "💪", color: "bg-purple-100 border-purple-300" },
  { name: "Grateful", emoji: "🙏", color: "bg-teal-100 border-teal-300" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      console.log("Mood logged:", selectedMood);
      alert(`Mood logged: ${selectedMood.name}`);
      setSelectedMood(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#7E69AB]">How are you feeling today?</CardTitle>
        <CardDescription>Track your mood to gain insights into your emotional patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-3">
          {moods.map((mood) => (
            <div
              key={mood.name}
              className={`flex flex-col items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                selectedMood?.name === mood.name
                  ? `${mood.color} border-4`
                  : "bg-gray-50 border-gray-200 hover:border-mind-purple-light"
              }`}
              onClick={() => handleMoodSelect(mood)}
            >
              <span className="text-2xl">{mood.emoji}</span>
              <span className="mt-1 text-sm">{mood.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSubmit} 
          disabled={!selectedMood}
          className="w-full bg-[#7E69AB] hover:bg-mind-purple-dark"
        >
          Log Mood
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MoodTracker;
