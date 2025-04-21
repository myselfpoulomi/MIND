import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  
  const MeditationCard = ({
    title,
    description,
    duration,
    category,
    imageUrl,
    videoId,
  }) => {
    return (
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-3 right-3">
            <Badge className="bg-mind-purple hover:bg-mind-purple-dark">
              {duration}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{title}</CardTitle>
            <Badge
              variant="outline"
              className="border-mind-purple-light text-mind-purple-dark"
            >
              {category}
            </Badge>
          </div>
          <CardDescription className="text-sm line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full bg-mind-purple hover:bg-mind-purple-dark">
            Start Session
          </Button>
        </CardFooter>
      </Card>
    );
  };
  
  export default MeditationCard;
  