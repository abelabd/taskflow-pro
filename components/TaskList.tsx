import { Task } from "@/types/task"

interface Props {
  tasks: Task[]
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

export default function TaskList({
  tasks,
  toggleTask,
  deleteTask,
}: Props) {
  if (!tasks.length) {
    return (
      <p className="text-center text-gray-400 mt-6">
        No tasks found.
      </p>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="w-5 h-5 accent-blue-600 cursor-pointer"
            />

            <div>
              <p
                className={`text-lg transition-all ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                {task.text}
              </p>

              <span className="text-xs text-gray-400">
                {new Date(task.createdAt).toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700 transition"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}