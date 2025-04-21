import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Heart, Search, Clock, Play, BookmarkPlus, Share } from "lucide-react";

export default function YogaMeditation() {
  const [category, setCategory] = useState("all");

  const categories = ["All", "Meditation", "Yoga", "Breathing", "Sleep"];

  const videos = [
    {
      id: 1,
      title: "5-Minute Mindfulness Meditation",
      description: "A quick meditation practice for busy days",
      duration: "5 min",
      category: "meditation",
      thumbnail: "bg-mind-purple-light/30",
      featured: true,
    },
    {
      id: 2,
      title: "Morning Yoga Routine",
      description: "Gentle stretches to start your day with energy",
      duration: "15 min",
      category: "yoga",
      thumbnail: "bg-mind-blue-light/30",
      featured: false,
    },
    {
      id: 3,
      title: "Deep Breathing Exercise",
      description: "Reduce anxiety with controlled breathing",
      duration: "10 min",
      category: "breathing",
      thumbnail: "bg-mind-green-light/30",
      featured: true,
    },
    {
      id: 4,
      title: "Bedtime Relaxation",
      description: "Prepare your mind for restful sleep",
      duration: "20 min",
      category: "sleep",
      thumbnail: "bg-mind-peach/30",
      featured: false,
    },
    {
      id: 5,
      title: "Stress Relief Meditation",
      description: "Let go of tension and find calm",
      duration: "15 min",
      category: "meditation",
      thumbnail: "bg-mind-pink/30",
      featured: false,
    },
    {
      id: 6,
      title: "Yoga for Back Pain",
      description: "Gentle poses to ease back discomfort",
      duration: "25 min",
      category: "yoga",
      thumbnail: "bg-mind-blue-light/30",
      featured: false,
    },
  ];

  const filteredVideos = category === "all"
    ? videos
    : videos.filter(v => v.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Yoga & Meditation</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search for sessions..." 
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category.toLowerCase() === cat.toLowerCase() ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(cat.toLowerCase())}
              className={category.toLowerCase() === cat.toLowerCase() ? "bg-mind-purple hover:bg-mind-purple-dark" : ""}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      {filteredVideos.some(v => v.featured) && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredVideos
              .filter(v => v.featured)
              .map((video) => (
                <Card key={video.id} className="overflow-hidden">
                  <div className={`${video.thumbnail} h-48 relative group cursor-pointer`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{video.title}</h3>
                        <p className="text-sm text-muted-foreground">{video.description}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-secondary px-2 py-1 rounded text-xs">
                        <Clock className="h-3 w-3" />
                        <span>{video.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-4 py-2 border-t flex justify-between">
                    <Button variant="ghost" size="sm">
                      <BookmarkPlus className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      )}

      {/* Session Categories */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">All Sessions</h2>
        <Tabs defaultValue="all" onValueChange={setCategory}>
          <TabsList className="mb-6">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat.toLowerCase()}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((cat) => (
            <TabsContent key={cat} value={cat.toLowerCase()} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videos
                  .filter(v => v.category.toLowerCase() === cat.toLowerCase())
                  .map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Benefits Section */}
      <section className="mt-16 p-6 bg-gradient-to-r from-mind-purple-light/20 to-mind-blue-light/20 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Regular Practice</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/80">
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-full bg-mind-purple-light/30 flex items-center justify-center">
                <Heart className="h-6 w-6 text-mind-purple" />
              </div>
              <h3 className="text-lg font-medium mb-2">Reduced Stress</h3>
              <p className="text-sm text-muted-foreground">
                Regular meditation and yoga can significantly lower cortisol levels, helping your body and mind manage stress more effectively.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/80">
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-full bg-mind-blue-light/30 flex items-center justify-center">
                <Heart className="h-6 w-6 text-mind-blue" />
              </div>
              <h3 className="text-lg font-medium mb-2">Improved Focus</h3>
              <p className="text-sm text-muted-foreground">
                Mindfulness practices strengthen neural connections associated with concentration and attention, enhancing your ability to focus.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/80">
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-full bg-mind-green-light/30 flex items-center justify-center">
                <Heart className="h-6 w-6 text-mind-green" />
              </div>
              <h3 className="text-lg font-medium mb-2">Better Sleep</h3>
              <p className="text-sm text-muted-foreground">
                Relaxation techniques help quiet the mind and prepare the body for rest, promoting deeper and more restorative sleep.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function VideoCard({ video }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className={`${video.thumbnail} h-40 relative group cursor-pointer`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Play className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {video.duration}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium">{video.title}</h3>
        <p className="text-sm text-muted-foreground">{video.description}</p>
      </CardContent>
      <CardFooter className="px-4 py-2 border-t flex justify-between">
        <Button variant="ghost" size="sm">
          <BookmarkPlus className="h-4 w-4 mr-1" />
          Save
        </Button>
        <div className="text-xs bg-secondary px-2 py-1 rounded uppercase font-medium">
          {video.category}
        </div>
      </CardFooter>
    </Card>
  );
}
