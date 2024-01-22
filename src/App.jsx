import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/initialTasks";
import { taskReducer } from "./reducers/taskReducer";

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  //all handlers here
  const handleAddTask = (text) => {
    dispatch({
      type: "TASK_ADDED",
      payload: text,
    });
  };

  const handleEditTask = (updateTask) => {
    dispatch({
      type: "TASK_EDITED",
      payload: updateTask,
    });
  };

  const handleTaskDone = (taskId) => {
    dispatch({
      type: "TASK_TOGGLED",
      payload: taskId,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "TASK_DELETED",
      payload: taskId,
    });
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
