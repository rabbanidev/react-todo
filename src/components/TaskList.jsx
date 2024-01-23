import { useTasks } from "../hooks/TasksContext";
import Task from "./Task";

const TaskList = () => {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
