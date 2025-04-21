import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  CheckCircle, Circle, Plus, Trash2, Calendar, Star, CheckCircle2, Clock, 
  BarChart3, ArrowUpRight 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Drink 2 liters of water", completed: false, category: "self-care" },
    { id: 2, text: "15-minute mindful breathing", completed: true, category: "meditation", date: "Today" },
    { id: 3, text: "Take a short walk outside", completed: false, category: "activity", date: "Today", priority: "medium" },
    { id: 4, text: "Write 3 things you're grateful for", completed: false, category: "reflection", date: "Today", priority: "high" },
    { id: 5, text: "Reach out to a friend", completed: false, category: "social", date: "Tomorrow" },
    { id: 6, text: "Read for 15 minutes", completed: false, category: "learning", date: "Tomorrow" },
    { id: 7, text: "Stretch before bed", completed: false, category: "self-care", date: "Today" },
    { id: 8, text: "Limit social media to 30 minutes", completed: false, category: "digital-wellbeing", date: "Today", priority: "medium" },
  ]);
  
  const [newTask, setNewTask] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Tasks" },
    { id: "self-care", name: "Self-Care" },
    { id: "meditation", name: "Meditation" },
    { id: "activity", name: "Physical Activity" },
    { id: "reflection", name: "Reflection" },
    { id: "social", name: "Social Connection" },
    { id: "learning", name: "Learning" },
    { id: "digital-wellbeing", name: "Digital Wellbeing" },
  ];
  
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const addTask = () => {
    if (newTask.trim() === "") return;
    
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      completed: false,
      category: "self-care",
      date: "Today",
    };
    
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  const filteredTasks = activeCategory === "all" 
    ? tasks 
    : tasks.filter(task => task.category === activeCategory);
  
  const completedCount = tasks.filter(task => task.completed).length;
  const progressPercentage = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Wellness Goals</h1>
      
      {/* Add New Task */}
      <Card className="mb-8">
        <CardHeader className="pb-3">
          <CardTitle>Add New Goal</CardTitle>
          <CardDescription>
            Break down your wellness journey into small, achievable tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input 
              placeholder="Add a new wellness goal..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              className="flex-1"
            />
            <Button onClick={addTask} className="bg-mind-purple hover:bg-mind-purple-dark">
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Progress Overview */}
      <Card className="mb-8 bg-gradient-to-r from-mind-purple-light/10 to-mind-blue-light/10">
        <CardHeader className="pb-3">
          <CardTitle>Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Daily Goals</span>
                <span className="text-mind-purple font-medium">
                  {completedCount} of {tasks.length} completed
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2 bg-mind-purple-light/30" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="bg-white/60 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-mind-purple mb-1">{completedCount}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="bg-white/60 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-mind-blue mb-1">{tasks.length - completedCount}</div>
                <div className="text-sm text-muted-foreground">Remaining</div>
              </div>
              <div className="bg-white/60 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-mind-green mb-1">
                  {tasks.filter(t => t.date === "Today").length}
                </div>
                <div className="text-sm text-muted-foreground">Today</div>
              </div>
              <div className="bg-white/60 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-mind-purple-dark mb-1">
                  {Math.round(progressPercentage)}%
                </div>
                <div className="text-sm text-muted-foreground">Completion</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Task Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <TabsList className="mb-6 flex overflow-x-auto pb-1">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="min-w-fit">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <Card>
                  <CardContent className="p-0">
                    {filteredTasks.length > 0 ? (
                      <div className="divide-y">
                        {filteredTasks.map((task) => (
                          <div key={task.id} className="flex items-center p-4 group">
                            <button
                              onClick={() => toggleTask(task.id)}
                              className={`flex-shrink-0 h-6 w-6 rounded-full border-2 flex items-center justify-center mr-3 
                                ${task.completed 
                                  ? 'bg-mind-purple border-mind-purple text-white' 
                                  : 'border-gray-300 text-transparent hover:border-mind-purple'}`}
                            >
                              {task.completed && <CheckCircle2 className="h-4 w-4" />}
                            </button>
                            
                            <div className="flex-1">
                              <p className={`${task.completed ? "line-through text-muted-foreground" : "font-medium"}`}>
                                {task.text}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                {task.date && (
                                  <div className="flex items-center text-xs text-muted-foreground">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {task.date}
                                  </div>
                                )}
                                {task.priority && (
                                  <div className="flex items-center text-xs text-muted-foreground">
                                    <Star className="h-3 w-3 mr-1" />
                                    {task.priority}
                                  </div>
                                )}
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  {categories.find(c => c.id === task.category)?.name}
                                </div>
                              </div>
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteTask(task.id)}
                              className="opacity-0 group-hover:opacity-100"
                            >
                              <Trash2 className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                          <CheckCircle className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <h3 className="font-medium mb-1">No tasks found</h3>
                        <p className="text-sm text-muted-foreground">
                          {activeCategory === "all" 
                            ? "You haven't added any tasks yet." 
                            : `You don't have any tasks in the ${categories.find(c => c.id === activeCategory)?.name} category.`}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Insights</h2>
          <Card className="mb-6 bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center">
                <BarChart3 className="h-4 w-4 mr-2 text-mind-purple" />
                Category Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {categories.filter(c => c.id !== "all").map((category) => {
                  const categoryTasks = tasks.filter(t => t.category === category.id);
                  const categoryCompleted = categoryTasks.filter(t => t.completed).length;
                  const categoryPercentage = categoryTasks.length > 0 
                    ? (categoryCompleted / categoryTasks.length) * 100 
                    : 0;
                  
                  return (
                    <div key={category.id}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{category.name}</span>
                        <span className="text-muted-foreground">{categoryCompleted}/{categoryTasks.length}</span>
                      </div>
                      <Progress value={categoryPercentage} className="h-2 bg-mind-purple-light/30" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center">
                <Clock className="h-4 w-4 mr-2 text-mind-blue" />
                Productivity Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-mind-purple-light/10 p-3 rounded-lg text-sm">
                  <p className="font-medium mb-1">Break it down</p>
                  <p className="text-muted-foreground">Make tasks smaller and more manageable to reduce overwhelm.</p>
                </div>
                <div className="bg-mind-blue-light/10 p-3 rounded-lg text-sm">
                  <p className="font-medium mb-1">Celebrate progress</p>
                  <p className="text-muted-foreground">Acknowledge completed tasks to boost motivation.</p>
                </div>
                <div className="bg-mind-green-light/10 p-3 rounded-lg text-sm">
                  <p className="font-medium mb-1">Focus on consistency</p>
                  <p className="text-muted-foreground">Small actions done consistently create lasting change.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="link" className="text-mind-purple p-0 h-auto" asChild>
                <a href="#" className="flex items-center">
                  Read more wellness tips
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
