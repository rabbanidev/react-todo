/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { initialTasks } from "../data/initialTasks";

// Create context
export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export const useTasks = () => useContext(TaskContext);
export const useTaskDispatch = () => useContext(TaskDispatchContext);

// create context provider
const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export default TaskProvider;
