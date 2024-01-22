/* eslint-disable react/prop-types */

import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleAddTask = () => {
    onAddTask(text);
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
