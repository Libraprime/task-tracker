// import React from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Start SRT',
        day: 'Apr 22rd at 8am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Host Joy',
        day: 'Apr 23rd at 12pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Call Family',
        day: 'Apr 23rd at 5pm',
        reminder: false,
    }
])
  
// AddTask
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
     task.id === id ? { ...task, reminder: !task.reminder} : task))
  }  

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask} 
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No task to show' }
    </div>
  );
}

// class App extends React.Component {
//   render () {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
