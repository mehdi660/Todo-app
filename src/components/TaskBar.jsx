import { useState } from "react";
import sidebar from "../assets/sidebar.png";
import "../style/taskbar.css";

const TaskBar = () => {
  const [taskBarOpen, setTaskBarOpen] = useState(false);

  const toggleTaskBar = () => {
    setTaskBarOpen(!taskBarOpen);
  };

  return (
    <div className="taskbar">
      <div className={taskBarOpen ? "taskbar-open" : "taskbar-close"}>
        <img width={25} onClick={toggleTaskBar} src={sidebar} alt="sidebar" />
        <h2>Do It!</h2>
      </div>
    </div>
  );
};

export default TaskBar;
