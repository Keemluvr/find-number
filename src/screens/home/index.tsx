"use client"

import { useState } from "react"
import { INITIAL_ARRAY } from "@/constants/numbers"
import SearchNumber from "./components/search-number"
import AddNumber from "./components/add-number"
import ListNumbers from "./components/list-numbers"

export default function HomePage() {
  const [allNumbers, setAllNumbers] = useState<Array<number>>(INITIAL_ARRAY)
  const [result, setResult] = useState<number | null>(null)

  return (
    <main className="container">
      <div className="py-10">
        <SearchNumber allNumbers={allNumbers} setResult={setResult} />
        <div className="flex flex-wrap gap-2 mt-4">
          <AddNumber allNumbers={allNumbers} setAllNumbers={setAllNumbers} />
          <ListNumbers allNumbers={allNumbers} result={result} />
        </div>
      </div>
    </main>
  )
}
