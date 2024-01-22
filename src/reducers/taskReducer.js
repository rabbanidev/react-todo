import { initialTasks } from "../data/initialTasks";

const generateNextId = (data) => {
  return data.reduce(
    (prev, curr) => {
      const maxId = prev.id > curr.id ? prev.id : curr.id;
      return maxId + 1;
    },
    data.length > 0 ? data[0].id : -1
  );
};

export const taskReducer = (tasks = initialTasks, action) => {
  switch (action.type) {
    case "TASK_ADDED":
      return [
        ...tasks,
        {
          id: generateNextId(tasks),
          text: action.payload,
          done: false,
        },
      ];

    case "TASK_EDITED":
      return tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );

    case "TASK_TOGGLED":
      return tasks.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );

    case "TASK_DELETED":
      return tasks.filter((task) => task.id !== action.payload);

    default:
      throw new Error("Unknown action: " + action);
  }
};
