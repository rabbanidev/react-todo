/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskList = ({ tasks, onEditTask, onTaskDone, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onTaskDone={onTaskDone}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
