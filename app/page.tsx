"use client"

import { useEffect, useState } from "react"
import { Task } from "@/types/task"
import TaskForm from "@/components/TaskForm"
import TaskList from "@/components/TaskList"
import FilterBar from "@/components/FilterBar"
import ThemeToggle from "@/components/ThemeToggle"

type FilterType = "all" | "active" | "completed"

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<FilterType>("all")

  useEffect(() => {
    const stored = localStorage.getItem("tasks")
    if (stored) setTasks(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTasks([newTask, ...tasks])
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 transition-all">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            TaskFlow Pro
          </h1>
          <ThemeToggle />
        </div>

        <TaskForm addTask={addTask} />
        <FilterBar setFilter={setFilter} />

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  )
}