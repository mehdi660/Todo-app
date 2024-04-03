import { useState } from "react";

const TaskBar = () => {
  const [taskBarOpen, setTaskBarOpen] = useState(false);

  const toggleTaskBar = () => {
    setTaskBarOpen(!taskBarOpen);
  };

  return (
    <div onClick={toggleTaskBar}>
      <h2>Do It!</h2>
    </div>
  );
};

export default TaskBar;
