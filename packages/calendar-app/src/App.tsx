import React, { useState } from 'react';
import { Button, TaskDialog } from '@your-org/shared-ui';
import { useTaskStore, Task } from '@your-org/state-management';
import { format } from 'date-fns';

const App: React.FC = () => {
  const { tasks, addTask, updateTaskStatus, deleteTask } = useTaskStore();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editTask, setEditTask] = React.useState<Task | null>(null);

  const handleOpenDialog = (task: Task | null = null) => {
    setEditTask(task);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setEditTask(null);
    setIsDialogOpen(false);
  };
  const handleUpdateTask = (taskData: Task) => {
    updateTaskStatus(taskData.id, taskData.status);
    setIsDialogOpen(false);
  };

  const handleSaveTask = (taskData: Partial<Task>) => {
    if (editTask) {
      updateTaskStatus({
        id: editTask.id,
        status: taskData.status as Task['status'],
      });
    } else {
      addTask(taskData as Omit<Task, 'id' | 'status'>);
    }
    handleCloseDialog();
  };

  return (
    <div>
      <h1>Calendar App</h1>
      <Button onClick={() => handleOpenDialog()}>Add New Task</Button>
      {tasks.map((task: Task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>Date: {format(new Date(task.datetime), 'PPpp')}</p>
          <p>Status: {task.status}</p>
          <Button onClick={() => handleOpenDialog(task)}>Edit</Button>
          <Button onClick={() => deleteTask(task.id)}>Delete</Button>
        </div>
      ))}
      <TaskDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={selectedTask ? handleUpdateTask : handleAddTask}
        task={selectedTask}
        mode={selectedTask ? 'edit' : 'add'}
      />
    </div>
  );
};

export default App;
