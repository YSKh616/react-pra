const TodoList = ({ tasks, setTasks }) => {
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
  );
};

export default TodoList;
