import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";

const API_BASE = "http://localhost:5000/api/tasks";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  const userId = localStorage.getItem("session");

  const fetchTodos = async () => {
    if (!userId) return console.error("User ID not found in sessionStorage.");
    try {
      const res = await axios.get(`${API_BASE}`, {
        params: { userId },
      });
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [userId]);

  const handleAddTodo = async () => {
    if (!newTodoText.trim() || !userId) return;
    console.log("-------------", userId);

    try {
      await axios.post(`${API_BASE}/createTask`, {
        title: newTodoText.trim(),
        userId,
      });
      setNewTodoText("");
      fetchTodos();
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE}/deleteTask/${id}`, {
        data: { userId },
      });
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const toggleTodoComplete = async (id, currentState) => {
    try {
      await axios.put(`${API_BASE}/updateTask/${id}`, {
        completed: !currentState,
        userId,
      });
      fetchTodos();
    } catch (err) {
      console.error("Error updating todo completion:", err);
    }
  };

  if (!userId) {
    return (
      <div className="text-center text-red-500 p-4">
        No user session found. Please log in.
      </div>
    );
  }

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
              key={todo._id}
              className="flex items-center justify-between p-3 bg-white rounded-md border border-gray-100 shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <Checkbox
                  id={`todo-${todo._id}`}
                  checked={todo.completed}
                  onCheckedChange={() =>
                    toggleTodoComplete(todo._id, todo.completed)
                  }
                  className="border-[#7E7EC9] data-[state=checked]:bg-[#7E7EC9]"
                />
                <label
                  htmlFor={`todo-${todo._id}`}
                  className={`text-sm ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {todo.title}
                </label>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteTodo(todo._id)}
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
            if (e.key === "Enter") handleAddTodo();
          }}
        />
        <Button
          onClick={handleAddTodo}
          className="bg-[#7E7EC9] hover:bg-[#6a6aaf]"
        >
          <Plus className="h-4 w-4 mr-1" /> Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TodoList;
