import React, { useEffect, useState } from 'react'
import {CheckIcon} from '@heroicons/react/24/solid'

const EditForm=({editedTask, updateTask,closeEditMode})=> {

    const [updatedTaskName, setupdatedTaskName] = useState(editedTask.name)
 

    useEffect(()=>{
       const closeModelIfEscaped= (e)=>{
        e.key ==="Escape" && closeEditMode();
       }

        window.addEventListener('keydown',closeModelIfEscaped)

        return ()=>{
            window.removeEventListener('keydown',closeModelIfEscaped)
        }
    })


    const handleFormSubmit =(e)=>{
        e.preventDefault();
        updateTask({...editedTask,name:updatedTaskName})
    }

  return (

   <div 
   role='dialog'
    aria-labelledby='editedTask'
    onClick={(e)=>{e.target===e.currentTarget && closeEditMode()}}
    >
     <form className='todo' onSubmit={handleFormSubmit}>
     
     <div className="wrapper">
        <input type="text" id='editedTask' className='input'value={updatedTaskName} onInput={(e)=>setupdatedTaskName(e.target.value)} required autoFocus maxLength={60} placeholder='Enter Task' />
         <label htmlFor="editedTask" className="label">
           Update Task
         </label>
         
     </div>
     <button className='btn' aria-label={`confirm edited task to now read ${updatedTaskName}`}type='submit'>
          <CheckIcon strokeWidth={2} height={24} width={24}/>
         </button>
    </form>
   </div>
  )
}

export default EditForm