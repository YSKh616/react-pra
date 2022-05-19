import { useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import Star from "./components/Star";

type Task = {
  name: string;
  isCompleted: boolean;
};

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const updateTasks = (tasks: Task[]) => {
    setTasks(tasks);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">TODO LIST</h1>
      <Star></Star>
      <AddTask tasks={tasks} updateTasks={updateTasks}></AddTask>
      <TodoList tasks={tasks} updateTasks={updateTasks}></TodoList>
    </>
  );
};

export default App;
