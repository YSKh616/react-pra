import { useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [text, setText] = useState("");

  const handleNewTask = (e) => {
    setText(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (text === "") return;
    let copyTasks = [...tasks];
    copyTasks.push({ name: text, isCompleted: false });
    setTasks(copyTasks);
    setText("");
  };

  return (
    <form onSubmit={addTask}>
      <label htmlFor="task-name">タスク名:</label>
      <input type="text" id="task-name" value={text} onChange={handleNewTask} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
