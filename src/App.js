import Header from "./componenets/Header";
import { useState, useEffect } from "react";
import Tasks from "./componenets/Tasks";
import AddTask from "./componenets/AddTask";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In_Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
    {
      id: 4,
      text: "Study Project",
      day: "Dec 15th at 9:00pm",
      isDone: true,
    },
    {
      id: 5,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: false,
    },
    {
      id: 6,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);


  const [showAddTask, setShowAddTask] = useState(true);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

   const toggleDone=(toggleDoneId)=>{
        setTasks(
          tasks.map((task)=>task.id ===toggleDoneId?{...task, isDone:!task.isDone}:task)
        )
    }

  //SHOW ADD TASK
  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} toggleDone={toggleDone}/>
                ) : (
                  "No Tasks To Show"
                )
          }
  
        
      </div>
   
  );
};

export default App;
