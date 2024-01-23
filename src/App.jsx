import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./hooks/TasksContext";

const App = () => {
  return (
    <TaskProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
};

export default App;
