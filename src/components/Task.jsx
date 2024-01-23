/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTaskDispatch } from "../hooks/TasksContext";

const Task = ({ task }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(task.text);
  const dispatch = useTaskDispatch();

  // dispatch edit task
  const handleEditTask = () => {
    dispatch({
      type: "TASK_EDITED",
      payload: {
        ...task,
        text,
      },
    });

    setIsEditable(false);
  };

  // dispatch task done
  const handleTaskDone = () => {
    dispatch({
      type: "TASK_TOGGLED",
      payload: task.id,
    });
  };

  // dispatch task delete
  const handleDeleteTask = () => {
    dispatch({
      type: "TASK_DELETED",
      payload: task.id,
    });
  };

  // let decided what to render
  let taskContent;
  if (isEditable) {
    taskContent = (
      <>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleEditTask}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditable(true)}>Edit</button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={task.done} onChange={handleTaskDone} />
        {taskContent}
        <button onClick={handleDeleteTask}>Delete</button>
      </label>
    </li>
  );
};

export default Task;
