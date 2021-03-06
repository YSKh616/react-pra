type Task = {
  name: string;
  isCompleted: boolean;
};

type Props = {
  tasks: Task[];
  updateTasks: (tasks: Task[]) => void;
};

const TodoList = (props: Props) => {
  const { tasks, updateTasks } = props;
  const handleUpdateTask = (index: number) => {
    const copyTasks = tasks.map((task: any, taskIndex: number) => {
      if (taskIndex === index) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    updateTasks(copyTasks);
  };

  return (
    <ul className="divide-y-2 divide-gray-100">
      {tasks.map((task: any, index: number) => (
        <li
          className="p-3"
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
  );
};

export default TodoList;
