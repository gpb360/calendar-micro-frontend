import { atom, useAtom } from 'jotai';
import type { Task } from '@your-org/shared-ui';

const tasksAtom = atom<Task[]>([]);

export const useTaskStore = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const addTask = (newTask: Omit<Task, 'id' | 'status'>) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, id: Date.now().toString(), status: 'scheduled' }]);
  };

  const updateTask = (id: string, updatedTask: Partial<Task>) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, updateTask, deleteTask };
};
