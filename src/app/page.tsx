'use client'

import { useState } from "react";
import Input from "@/components/input-with-button";
import binarySearch from "@/helpers/binary-search";

export default function Home() {
  const [allNumbers, setAllNumbers] = useState<Array<number>>([-1, 0, 3, 5, 9, 12])
  const [numToFind, setNumToFind] = useState<number | null>(null)
  const [result, setResult] = useState<number | null>(null)
  const [showErrow, setShowError] = useState<boolean>(false)

  const onChangeInputValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value

    if(!newValue) {
      setShowError(true)
      setNumToFind(null)
      return
    }

    setNumToFind(Number(newValue))
    setShowError(false)
  }

  const findNumber = () => {
    if(typeof numToFind === 'number') {
      const result = binarySearch(allNumbers, numToFind)
      setResult(result)
    }
  }

  const onPressKey = (event: any) => {
    if (event.key === 'Enter') findNumber()
  }

  const wasFound = () => result !== -1

  return (
    <main className="container">
      <div className="py-10">
        <Input 
          buttonLabel="Search" 
          type="number"
          onChange={onChangeInputValue} 
          OnPressButton={findNumber} 
          onPressKey={onPressKey}
          disableButton={!Boolean(numToFind)}
        />
        <div className="text-xs mt-2 text-red-600 font-semibold">
          {showErrow ? "Number is required!" : ""}
        </div>
    

        <div className="flex gap-2 mt-4">
          {allNumbers.map((num, index) => (
            <p 
              key={index} 
              className={`py-2 px-4 rounded-lg ${result === index ? "bg-green-400" : "bg-white"}`}
            >
              {num}
            </p>
          ))}
          <span className="py-2 px-1">=</span>
          <p 
            key={result}
            data-test-id="result-card"
            className={`py-2 px-4 rounded-lg ${result!== null ? wasFound() ? "bg-green-400" : "bg-red-400": "bg-yellow-300"}`}>
            {typeof result === 'number'
              ? wasFound() ? allNumbers[result] : result
              : "?"
            }
          </p>
        </div>
      </div>
    </main>
  );
}
