import { atom, useAtom } from 'jotai'

export interface Task {
  id: string
  title: string
  datetime: Date
  status: 'scheduled' | 'completed' | 'rescheduled' | 'canceled'
}

const tasksAtom = atom<Task[]>([])

export const useTasksAtom = () => useAtom(tasksAtom)

export const useAddTask = () => {
  const [, setTasks] = useAtom(tasksAtom)
  return (newTask: Omit<Task, 'id' | 'status'>) => {
    setTasks((tasks) => [
      ...tasks,
      { ...newTask, id: Math.random().toString(36).substr(2, 9), status: 'scheduled' }
    ])
  }
}

export const useUpdateTaskStatus = () => {
  const [, setTasks] = useAtom(tasksAtom)
  return (update: { id: string; status: Task['status'] }) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === update.id ? { ...task, status: update.status } : task
      )
    )
  }
}

export const useDeleteTask = () => {
  const [, setTasks] = useAtom(tasksAtom)
  return (id: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  }
}