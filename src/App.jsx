import Taskform from "./components/Taskform"
import TaskList from "./components/TaskList";
import Progresstracker from "./components/Progresstracker";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly TaskManager</p>
      <Taskform />
      <Taskform addTask = {addTask}/>
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}