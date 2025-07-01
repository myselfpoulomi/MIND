import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const sampleAudioUrl = "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3";

const playlists = [
  {
    id: "relaxation",
    title: "Deep Relaxation",
    description: "Calm your mind with these soothing tracks",
    coverUrl: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=500&auto=format&fit=crop",
    tracks: [
      {
        id: "track1",
        title: "Ocean Waves",
        artist: "Nature Sounds",
        duration: "5:23",
        coverUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200&auto=format&fit=crop",
        audioUrl: "https://res.cloudinary.com/db7eai6te/video/upload/v1751387316/Moh_Moh_Ke_Dhaage_Male_m7qlob.mp3",
      },
      {
        id: "track2",
        title: "Gentle Rain",
        artist: "Ambient Moods",
        duration: "6:17",
        coverUrl: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=200&auto=format&fit=crop",
        audioUrl: "https://res.cloudinary.com/db7eai6te/video/upload/v1751402558/Labon_Ko_Full_Song_Bhool_Bhulaiyaa_mnrkwt.mp3",
      },
      {
        id: "track3",
        title: "Forest Morning",
        artist: "Nature Sounds",
        duration: "4:45",
        coverUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=200&auto=format&fit=crop",
        audioUrl: sampleAudioUrl,
      },
    ],
  },
  {
    id: "focus",
    title: "Deep Focus",
    description: "Enhance concentration and productivity",
    coverUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=500&auto=format&fit=crop",
    tracks: [
      {
        id: "track4",
        title: "Study Session",
        artist: "Focus Flow",
        duration: "4:10",
        coverUrl: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=200&auto=format&fit=crop",
        audioUrl: sampleAudioUrl,
      },
      {
        id: "track5",
        title: "Ambient Work",
        artist: "Mindful Music",
        duration: "5:32",
        coverUrl: "https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?q=80&w=200&auto=format&fit=crop",
        audioUrl: sampleAudioUrl,
      },
      {
        id: "track6",
        title: "Zen Productivity",
        artist: "Focus Flow",
        duration: "6:22",
        coverUrl: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=200&auto=format&fit=crop",
        audioUrl: sampleAudioUrl,
      },
    ],
  },
  {
    id: "sleep",
    title: "Sleep Well",
    description: "Drift off with these calming melodies",
    coverUrl: "https://images.unsplash.com/photo-1455642305367-68834a9d4591?q=80&w=500&auto=format&fit=crop",
    tracks: [
      {
        id: "track7",
        title: "Dreamy Night",
        artist: "Sleep Sounds",
        duration: "8:15",
        coverUrl: "https://images.unsplash.com/photo-1572715376701-98568319fd0b?q=80&w=200&auto=format&fit=crop",
        audioUrl: sampleAudioUrl,
      },
      {
        id: "track8",
        title: "Starlight Lullaby",
        artist: "Night Melodies",
        duration: "7:23",
        coverUrl: "https://images.unsplash.com/photo-1528991435120-e73e05a57dcc?q=80&w=200&auto=format&fit=crop",
        audioUrl: sampleAudioUrl,
      },
      {
        id: "track9",
        title: "Gentle Slumber",
        artist: "Sleep Sounds",
        duration: "9:45",
        coverUrl: "https://images.unsplash.com/photo-1534304283789-222d24704d16?q=80&w=200&auto=format&fit=crop",
        audioUrl: sampleAudioUrl,
      },
    ],
  },
];

const Music = ({ session, setRefetch }) => {
  const [playlistQueue, setPlaylistQueue] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);

  const handleSelectTrack = (track, tracks = []) => {
    const index = tracks.findIndex((t) => t.id === track.id);
    setPlaylistQueue(tracks);
    setCurrentTrackIndex(index);
  };

  const handlePlayAll = (tracks) => {
    setPlaylistQueue(tracks);
    setCurrentTrackIndex(0);
  };

  const handleNext = () => {
    if (currentTrackIndex < playlistQueue.length - 1) {
      setCurrentTrackIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar session={session} setRefetch={setRefetch} />

      <main className="flex-grow pt-24 pb-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="relative rounded-xl overflow-hidden h-64 md:h-80">
              <img 
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop" 
                alt="Music for wellbeing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A8AAE] to-transparent flex items-center">
                <div className="max-w-lg px-6 md:px-10">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Calming Music</h1>
                  <p className="text-white/90 text-lg">
                    Soothing sounds to relax your mind, improve focus, and help you sleep better
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Playlists Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Playlists</h2>

            <Tabs defaultValue="relaxation">
              <TabsList className="mb-6">
                {playlists.map((p) => (
                  <TabsTrigger key={p.id} value={p.id}>
                    {p.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {playlists.map((playlist) => (
                <TabsContent key={playlist.id} value={playlist.id}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="md:col-span-1">
                      <div className="rounded-lg overflow-hidden aspect-square">
                        <img
                          src={playlist.coverUrl}
                          alt={playlist.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mt-3">{playlist.title}</h3>
                      <p className="text-gray-600">{playlist.description}</p>
                      <Button
                        className="mt-4 w-full hover:bg-[#1EAEDB] bg-[#1eafdbe0]"
                        onClick={() => handlePlayAll(playlist.tracks)}
                      >
                        Play All
                      </Button>
                    </div>

                    <div className="md:col-span-2">
                      <div className="space-y-2">
                        {playlist.tracks.map((track) => (
                          <Card key={track.id} className="overflow-hidden hover:bg-gray-50 transition-colors">
                            <CardContent className="p-3">
                              <div className="flex items-center space-x-4">
                                <div className="relative h-14 w-14 flex-shrink-0">
                                  <img
                                    src={track.coverUrl}
                                    alt={track.title}
                                    className="h-full w-full object-cover rounded"
                                  />
                                  <button
                                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity"
                                    onClick={() => handleSelectTrack(track, playlist.tracks)}
                                  >
                                    <Play className="h-6 w-6 text-white" />
                                  </button>
                                </div>

                                <div
                                  className="flex-grow cursor-pointer"
                                  onClick={() => handleSelectTrack(track, playlist.tracks)}
                                >
                                  <h4 className="font-medium text-gray-900 hover:text-mind-blue">
                                    {track.title}
                                  </h4>
                                  <p className="text-sm text-gray-500">{track.artist}</p>
                                </div>

                                <div className="text-sm text-gray-500">{track.duration}</div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* 🎵 Inline Music Player under current playlist */}
                      {playlistQueue === playlist.tracks && currentTrackIndex !== null && (
                        <div className="mt-6">
                          <MusicPlayer
                            title={playlistQueue[currentTrackIndex].title}
                            artist={playlistQueue[currentTrackIndex].artist}
                            coverUrl={playlistQueue[currentTrackIndex].coverUrl}
                            audioUrl={playlistQueue[currentTrackIndex].audioUrl}
                            onNext={handleNext}
                            onPrevious={handlePrevious}
                            hasNext={currentTrackIndex < playlistQueue.length - 1}
                            hasPrevious={currentTrackIndex > 0}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* Benefits Section */}
          <section className="bg-[#D3E4FD] rounded-lg p-6 mb-12">
            <h2 className="text-xl font-semibold text-[#6793d4] mb-4">
              Benefits of Music for Mental Health
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-medium text-[#6793d4] mb-2">Stress Reduction</h3>
                <p className="text-gray-600 text-sm">
                  Listening to calming music can lower cortisol levels and reduce feelings of stress and anxiety.
                </p>
              </div>
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-medium text-[#6793d4] mb-2">Improved Sleep</h3>
                <p className="text-gray-600 text-sm">
                  Soothing music before bedtime can help you fall asleep faster and improve sleep quality.
                </p>
              </div>
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-medium text-[#6793d4] mb-2">Enhanced Focus</h3>
                <p className="text-gray-600 text-sm">
                  Certain types of music can boost concentration and productivity during tasks requiring focus.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Music;
