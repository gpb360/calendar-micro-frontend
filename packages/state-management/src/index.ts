import { atom, useAtom } from 'jotai';

export interface Task {
  id: string;
  title: string;
  datetime: Date;
  status: string;
}

const tasksAtom = atom<Task[]>([]);

export const useTaskStore = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const addTask = (newTask: Omit<Task, 'id'>) => {
    setTasks((prevTasks: Task[]) => [
      ...prevTasks,
      { ...newTask, id: Date.now().toString() },
    ]);
  };

  const updateTask = (id: string, updatedTask: Partial<Task>) => {
    setTasks((prevTasks: Task[]) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks: Task[]) => prevTasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, updateTask, deleteTask };
};
