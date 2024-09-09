// packages/calendar-app/src/App.tsx

import React, { useState } from 'react';
import { TaskDialog, Task } from '@your-org/shared-ui';
import { useTaskStore } from '@your-org/state-management';

const App: React.FC = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTaskStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleSaveTask = (taskData: Omit<Task, 'id' | 'status'> | (Partial<Task> & Pick<Task, 'id'>)) => {
    if ('id' in taskData) {
      updateTask(taskData.id, taskData);
    } else {
      addTask(taskData);
    }
    setIsDialogOpen(false);
  };

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.title}</span>
          <button onClick={() => setSelectedTask(task)}>Edit</button>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
      <button onClick={() => setIsDialogOpen(true)}>Add New Task</button>
      <TaskDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSaveTask}
        task={selectedTask}
        mode={selectedTask ? 'edit' : 'add'}
      />
    </div>
  );
};

export default App;
