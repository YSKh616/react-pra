import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (text === "") return;
    let copyTasks = [...tasks];
    copyTasks.push({ name: text, isCompleted: false });
    setTasks(copyTasks);
    setText("");
  };

  const handleNewTask = (e) => {
    setText(e.target.value);
  };

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
