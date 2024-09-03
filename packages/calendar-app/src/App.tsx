import React from 'react'
import { Button, TaskDialog } from '@your-org/shared-ui'
import { useTasksAtom, useAddTask, useUpdateTaskStatus, useDeleteTask, Task } from '@your-org/state-management'
import { format } from 'date-fns'

const App: React.FC = () => {
  const [tasks] = useTasksAtom()
  const addTask = useAddTask()
  const updateTaskStatus = useUpdateTaskStatus()
  const deleteTask = useDeleteTask()
  const [openDialog, setOpenDialog] = React.useState(false)
  const [editTask, setEditTask] = React.useState<Task | null>(null)

  const handleOpenDialog = (task: Task | null = null) => {
    setEditTask(task)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setEditTask(null)
    setOpenDialog(false)
  }

  const handleSaveTask = (taskData: Partial<Task>) => {
    if (editTask) {
      updateTaskStatus({ id: editTask.id, status: taskData.status as Task['status'] })
    } else {
      addTask(taskData as Omit<Task, 'id' | 'status'>)
    }
    handleCloseDialog()
  }

  return (
    <div>
      <h1>Calendar App</h1>
      <Button onClick={() => handleOpenDialog()}>Add New Task</Button>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>Date: {format(new Date(task.datetime), 'PPpp')}</p>
          <p>Status: {task.status}</p>
          <Button onClick={() => handleOpenDialog(task)}>Edit</Button>
          <Button onClick={() => deleteTask(task.id)}>Delete</Button>
        </div>
      ))}
      <TaskDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onSave={handleSaveTask}
        task={editTask}
        mode={editTask ? 'edit' : 'add'}
      />
    </div>
  )
}

export default App