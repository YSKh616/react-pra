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
    <form
      onSubmit={addTask}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <label
        htmlFor="task-name"
        className="text-gray-700 text-sm font-bold mb-2"
      >
        タスク名:
      </label>
      <input
        type="text"
        id="task-name"
        value={text}
        onChange={handleNewTask}
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
