import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/initialTasks";

const generateNextId = (data) => {
  return data.reduce(
    (prev, curr) => {
      const maxId = prev.id > curr.id ? prev.id : curr.id;
      return maxId + 1;
    },
    data.length > 0 ? data[0].id : -1
  );
};

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  //all handlers here
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: generateNextId(tasks),
        text,
        done: false,
      },
    ]);
  };

  const handleEditTask = (updateTask) => {
    const nextTasks = tasks.map((task) =>
      task.id === updateTask.id ? updateTask : task
    );
    setTasks(nextTasks);
  };

  const handleTaskDone = (taskId) => {
    const nextTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(nextTasks);
  };

  const handleDeleteTask = (taskId) => {
    const nextTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(nextTasks);
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onTaskDone={handleTaskDone}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default App;
