import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    console.log("add task");
    let copyTasks = [...tasks];
    copyTasks.push({ name: text, isCompleted: false });
    setTasks(copyTasks);
    setText("");
  };

  const handleNewTask = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <form onSubmit={addTask}>
        <label htmlFor="task-name">タスク名:</label>
        <input
          type="text"
          id="task-name"
          value={text}
          onChange={handleNewTask}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
