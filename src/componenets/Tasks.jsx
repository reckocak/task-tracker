import React from 'react'
import Task from './Task';

const Tasks = ({ tasks, onDelete, toggleDone }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          toggleDone={toggleDone}
        />
      ))}
    </>
  );
};

export default Tasks