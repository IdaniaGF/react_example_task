import { tasks as data } from "../data/tasks";
import { useState, useEffect, createContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(titleTask, descriptionTask) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: titleTask,
        description: descriptionTask,
      },
    ]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  console.log(props)

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
