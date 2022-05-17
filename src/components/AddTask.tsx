import { useState, FormEvent } from "react";

type Task = {
  name: string;
  isCompleted: boolean;
};

type Props = {
  tasks: Task[];
  updateTasks: (tasks: Task[]) => void;
};

const AddTask = (props: Props) => {
  const { tasks, updateTasks } = props;
  const [text, setText] = useState("");

  const handleNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") return;
    let copyTasks = [...tasks];
    copyTasks.push({ name: text, isCompleted: false });
    updateTasks(copyTasks);
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
