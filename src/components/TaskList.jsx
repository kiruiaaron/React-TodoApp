import React from 'react'
//component import
import TaskItem from './TaskItem'
//styles
import styles from './TaskItem.module.css'

const TaskList = ({tasks, deleteTask,toggleTask,EnterEditMode}) => {
  return (
    <ul className={styles.tasks}>

        {tasks.sort((a,b)=>b.id-a.id).map(task => (
            <TaskItem 
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            EnterEditMode={EnterEditMode}
            />
        ))}

    </ul>
  )
}

export default TaskList