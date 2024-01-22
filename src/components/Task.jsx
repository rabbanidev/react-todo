/* eslint-disable react/prop-types */

import { useState } from "react";

const Task = ({ task, onEditTask, onTaskDone, onDeleteTask }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(task.text);

  // edit handler
  const handleEditTask = () => {
    onEditTask({
      ...task,
      text,
    });
    setIsEditable(false);
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
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onTaskDone(task.id)}
        />
        {taskContent}
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </label>
    </li>
  );
};

export default Task;
