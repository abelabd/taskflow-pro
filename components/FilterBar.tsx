"use client"

import { useState } from "react"

type FilterType = "all" | "active" | "completed"

interface Props {
  setFilter: (value: FilterType) => void
}

export default function FilterBar({ setFilter }: Props) {
  const [active, setActive] = useState<FilterType>("all")

  const handleClick = (value: FilterType) => {
    setActive(value)
    setFilter(value)
  }

  return (
    <div className="flex justify-center mb-6">
      <div className="flex bg-gray-200 dark:bg-gray-800 rounded-xl p-1">
        {["all", "active", "completed"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item as FilterType)}
            className={`px-4 py-2 text-sm rounded-lg transition-all capitalize
              ${
                active === item
                  ? "bg-white dark:bg-gray-900 shadow text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}