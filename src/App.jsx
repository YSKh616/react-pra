import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleUpdateTask = (index) => {
    const copyTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(copyTasks);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <AddTask tasks={tasks} setTasks={setTasks}></AddTask>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={
              task.isCompleted === true
                ? { textDecorationLine: "line-through" }
                : {}
            }
          >
            {task.name} <span onClick={() => handleUpdateTask(index)}>X</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
