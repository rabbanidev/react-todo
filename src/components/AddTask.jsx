import { useState } from "react";
import { useTaskDispatch } from "../hooks/TasksContext";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTaskDispatch();

  const handleAddTask = () => {
    dispatch({
      type: "TASK_ADDED",
      payload: text,
    });

    setText("");
  };

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
};

export default AddTask;
