import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, Clock, Music, Heart,
  Bookmark, BookmarkPlus, Headphones, ListMusic
} from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePlaylist, setActivePlaylist] = useState("relaxation");
  const [currentTrack, setCurrentTrack] = useState(null);
  
  const playlists = [
    { id: "relaxation", name: "Relaxation", color: "bg-mind-purple-light/20", icon: Music },
    { id: "focus", name: "Focus & Concentration", color: "bg-mind-blue-light/20", icon: Headphones },
    { id: "sleep", name: "Sleep Sounds", color: "bg-mind-green-light/20", icon: Music },
    { id: "nature", name: "Nature Sounds", color: "bg-mind-peach/20", icon: Music },
    { id: "meditation", name: "Meditation", color: "bg-mind-pink/20", icon: Heart },
  ];
  
  const tracks = {
    relaxation: [
      { id: 1, title: "Gentle Piano", artist: "Sarah Johnson", duration: "4:15", category: "relaxation", color: "bg-mind-purple-light/20" },
      { id: 2, title: "Ocean Waves", artist: "Nature Sounds", duration: "10:30", category: "relaxation", color: "bg-mind-blue-light/20" },
      { id: 3, title: "Soft Guitar", artist: "Michael Chen", duration: "3:45", category: "relaxation", color: "bg-mind-purple-light/20" },
      { id: 4, title: "Spa Ambient", artist: "Wellness Audio", duration: "8:20", category: "relaxation", color: "bg-mind-peach/20" },
    ],
    focus: [
      { id: 5, title: "Deep Focus", artist: "Concentration Music", duration: "25:00", category: "focus", color: "bg-mind-blue-light/20" },
      { id: 6, title: "Study Beats", artist: "Brain Wave", duration: "15:30", category: "focus", color: "bg-mind-purple-light/20" },
      { id: 7, title: "Productivity Flow", artist: "Mind Master", duration: "20:15", category: "focus", color: "bg-mind-blue-light/20" },
    ],
    sleep: [
      { id: 8, title: "Night Rain", artist: "Sleep Sounds", duration: "45:00", category: "sleep", color: "bg-mind-green-light/20" },
      { id: 9, title: "Dreamscape", artist: "Sleep Therapy", duration: "30:00", category: "sleep", color: "bg-mind-green-light/20" },
      { id: 10, title: "Peaceful Night", artist: "Rest Easy", duration: "60:00", category: "sleep", color: "bg-mind-green-light/20" },
    ],
    nature: [
      { id: 11, title: "Forest Morning", artist: "Nature Recordings", duration: "15:20", category: "nature", color: "bg-mind-peach/20" },
      { id: 12, title: "Mountain Stream", artist: "Wilderness Audio", duration: "18:45", category: "nature", color: "bg-mind-peach/20" },
      { id: 13, title: "Gentle Rainfall", artist: "Nature Sounds", duration: "30:00", category: "nature", color: "bg-mind-peach/20" },
    ],
    meditation: [
      { id: 14, title: "Mindful Moment", artist: "Zen Master", duration: "10:00", category: "meditation", color: "bg-mind-pink/20" },
      { id: 15, title: "Inner Peace", artist: "Mindfulness", duration: "15:00", category: "meditation", color: "bg-mind-pink/20" },
      { id: 16, title: "Breath Guide", artist: "Meditation Guide", duration: "8:00", category: "meditation", color: "bg-mind-pink/20" },
    ],
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const selectTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };
  
  const currentPlaylist = tracks[activePlaylist] || [];

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Music Therapy</h1>
      
      {/* Now Playing Section */}
      <Card className="mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mind-purple-light/10 to-mind-blue-light/10 pointer-events-none"></div>
        <CardHeader>
          <CardTitle>Now Playing</CardTitle>
          <CardDescription>
            Calming music to help you relax, focus, or sleep better
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className={`h-32 w-32 md:h-48 md:w-48 rounded-lg ${currentTrack ? currentTrack.color : 'bg-mind-purple-light/30'} flex items-center justify-center`}>
              <Music className="h-12 w-12 text-mind-purple" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold">
                {currentTrack ? currentTrack.title : "Select a track to play"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {currentTrack ? currentTrack.artist : "Explore our curated playlists"}
              </p>
              
              {/* Player Controls */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center gap-4">
                  <Button size="icon" variant="ghost">
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    className="h-12 w-12 rounded-full bg-mind-purple hover:bg-mind-purple-dark"
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white" />}
                  </Button>
                  <Button size="icon" variant="ghost">
                    <SkipForward className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex gap-2 items-center text-sm text-muted-foreground">
                  <span>0:00</span>
                  <div className="flex-1">
                    <Slider defaultValue={[0]} max={100} step={1} />
                  </div>
                  <span>{currentTrack ? currentTrack.duration : "0:00"}</span>
                </div>
                
                <div className="flex items-center gap-2 w-32 mx-auto">
                  <Volume2 className="h-4 w-4 text-muted-foreground" />
                  <Slider defaultValue={[70]} max={100} step={1} />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t flex justify-between">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Like
            </Button>
            <Button variant="ghost" size="sm">
              <BookmarkPlus className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
          <div className="text-sm text-muted-foreground flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {currentTrack ? currentTrack.duration : "--:--"}
          </div>
        </CardFooter>
      </Card>
      
      {/* Playlists */}
      <h2 className="text-2xl font-semibold mb-4">Playlists</h2>
      <Tabs defaultValue="relaxation" onValueChange={setActivePlaylist}>
        <TabsList className="mb-6 flex overflow-x-auto pb-1">
          {playlists.map((playlist) => (
            <TabsTrigger key={playlist.id} value={playlist.id} className="min-w-fit">
              {playlist.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {Object.entries(tracks).map(([playlistId, playlistTracks]) => (
          <TabsContent key={playlistId} value={playlistId} className="mt-0">
            <div className="bg-background rounded-lg border">
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-full ${playlists.find(p => p.id === playlistId)?.color || ''} flex items-center justify-center`}>
                    <ListMusic className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{playlists.find(p => p.id === playlistId)?.name}</h3>
                    <p className="text-sm text-muted-foreground">{playlistTracks.length} tracks</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="bg-mind-purple hover:bg-mind-purple-dark"
                  onClick={() => {
                    if (playlistTracks.length > 0) {
                      selectTrack(playlistTracks[0]);
                    }
                  }}
                >
                  Play All
                </Button>
              </div>
              
              <div className="divide-y">
                {playlistTracks.map((track) => (
                  <div 
                    key={track.id} 
                    className={`p-4 flex items-center hover:bg-secondary cursor-pointer ${currentTrack?.id === track.id ? 'bg-secondary' : ''}`}
                    onClick={() => selectTrack(track)}
                  >
                    <div className="mr-4">
                      {currentTrack?.id === track.id && isPlaying ? (
                        <Pause className="h-5 w-5 text-mind-purple" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{track.title}</h4>
                      <p className="text-sm text-muted-foreground">{track.artist}</p>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {track.duration}
                    </div>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Benefits Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Benefits of Music Therapy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-full bg-mind-purple-light/30 flex items-center justify-center">
                <Heart className="h-6 w-6 text-mind-purple" />
              </div>
              <h3 className="text-lg font-medium mb-2">Stress Reduction</h3>
              <p className="text-sm text-muted-foreground">
                Soothing music can lower cortisol levels and help your body enter a more relaxed state, reducing feelings of stress and anxiety.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-full bg-mind-blue-light/30 flex items-center justify-center">
                <Headphones className="h-6 w-6 text-mind-blue" />
              </div>
              <h3 className="text-lg font-medium mb-2">Improved Focus</h3>
              <p className="text-sm text-muted-foreground">
                Certain types of music can enhance concentration and productivity by providing a consistent auditory background that blocks distractions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-full bg-mind-green-light/30 flex items-center justify-center">
                <Music className="h-6 w-6 text-mind-green" />
              </div>
              <h3 className="text-lg font-medium mb-2">Better Sleep</h3>
              <p className="text-sm text-muted-foreground">
                Calming music before bedtime can improve sleep quality by slowing your heart rate and breathing, preparing your body for rest.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
