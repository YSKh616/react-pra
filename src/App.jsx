import { useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <h1>TODO LIST</h1>
      <AddTask tasks={tasks} setTasks={setTasks}></AddTask>
      <TodoList tasks={tasks} setTasks={setTasks}></TodoList>
    </>
  );
}

export default App;
