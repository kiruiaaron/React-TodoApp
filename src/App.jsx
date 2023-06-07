import { useState } from 'react';
import './App.css';
//custom components
import CustormForm from './components/CustormForm';
import TaskList from './components/TaskList';
import EditForm from './components/EditForm'

//custom hooks

import useLocalStorage from './hooks/useLocalStorage';
function App() {

  const [tasks,setTask] = useLocalStorage('react-todo.tasks',[])
  const [previousFocusEl,setPreviousFocusEl] = useState(null);
  const [editedTask,setEditedTask] = useState(null);
  const [isEditing,setIsEditing] = useState(false);

  const AddTask =(task)=>{
    setTask(prevState=>[...prevState, task])

  }
  const deleteTask= (id)=>{
    setTask(prevState =>prevState.filter(t=>t.id !==id))
  }

  const toggleTask = (id)=>{
    setTask(prevState=>prevState.map(t=>(t.id === id?{...t,checked: !t.checked}:t)))
  }

  const updateTask = (task)=>{
    setTask(prevState=>prevState.map(t=>(t.id === task.id?{...t,name: task.name}:t)))
    closeEditMode()
  }

  const closeEditMode=()=>{
    setIsEditing(false) 
    previousFocusEl.focus()
  }

  const EnterEditMode=(task)=>{
    setEditedTask(task)
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement)
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {
        isEditing &&(
          <EditForm 
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
        )
        
      }
     
      <CustormForm  AddTask={AddTask}/>
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} EnterEditMode={EnterEditMode}/>}
    </div>
  )
  }
export default App;
