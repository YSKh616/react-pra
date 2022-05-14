function App() {
  const addTask = (e) => {
    e.preventDefault();
    console.log("add task");
  };
  return (
    <>
      <h1>TODO LIST</h1>
      <form onSubmit={addTask}>
        <label htmlFor="task-name">タスク名:</label>
        <input type="text" id="task-name" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
