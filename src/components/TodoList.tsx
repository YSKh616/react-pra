const TodoList = (props: any) => {
  const { tasks, setTasks } = props;
  const handleUpdateTask = (index: number) => {
    const copyTasks = tasks.map((task: any, taskIndex: number) => {
      if (taskIndex === index) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(copyTasks);
  };

  return (
    <ul>
      {tasks.map((task: any, index: number) => (
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
  );
};

export default TodoList;
