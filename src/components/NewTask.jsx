import { useState } from "react";
import "../style/task.css";

const NewTask = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <main>
      <form>
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          type="text"
        />

        <button className="add" type="button" onClick={addTask}>
          Ajouter une tâche
        </button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete" onClick={() => deleteTask(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default NewTask;
