

import { useState, useEffect } from "react";
import data from '../data'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
 

  const onSubmit = (i) => {
    i.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, isDone :false });

    setText("");
    setDay("");
   
  };
   

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(i) => setText(i.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="date"
          placeholder="Add Day & Time"
          value={day}
          onChange={(i) => setDay(i.target.value)}
        />
      </div>
     

      <input type="submit" value="Add Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask