import { useState, FormEvent } from "react";

// type Props = {
//   tasks: { name: string; isCompleted: boolean }[];
// };

const AddTask = (props: any) => {
  const [text, setText] = useState("");

  const handleNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") return;
    let copyTasks = [...props.tasks];
    copyTasks.push({ name: text, isCompleted: false });
    props.setTasks(copyTasks);
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
