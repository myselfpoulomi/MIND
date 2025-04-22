import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("mindTodos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          { id: "1", text: "Drink water (at least 8 glasses)", completed: false },
          { id: "2", text: "Take a 10-minute walk outside", completed: false },
          { id: "3", text: "Practice deep breathing for 5 minutes", completed: false },
          { id: "4", text: "Write 3 things you're grateful for", completed: false },
        ];
  });

  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    localStorage.setItem("mindTodos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = {
        id: Date.now().toString(),
        text: newTodoText.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText("");
    }
  };

  const toggleTodoComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#7E7EC9]">Mental Wellness Tasks</CardTitle>
        <CardDescription>
          Small daily actions to improve your mental wellbeing
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-3 bg-white rounded-md border border-gray-100 shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <Checkbox
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodoComplete(todo.id)}
                  className="border-[#7E7EC9] data-[state=checked]:bg-[#7E7EC9]"
                />
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`text-sm ${
                    todo.completed ? "line-through text-gray-400" : "text-gray-700"
                  }`}
                >
                  {todo.text}
                </label>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteTodo(todo.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}

          {todos.length === 0 && (
            <p className="text-center text-gray-500 py-4">
              No tasks yet. Add your first mental wellness task!
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new wellness task..."
          className="flex-1"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo();
            }
          }}
        />
        <Button onClick={handleAddTodo} className="bg-[#7E7EC9] hover:bg-[#6a6aaf]">
          <Plus className="h-4 w-4 mr-1" /> Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TodoList;
