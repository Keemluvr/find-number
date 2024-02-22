"use client"

import { useState } from "react"
import Input from "@/components/input-with-button"
import binarySearch from "@/helpers/binary-search"

type SearchNumberProps = {
  allNumbers: number[]
  setResult: React.Dispatch<React.SetStateAction<number | null>>
}

export default function SearchNumber({
  allNumbers,
  setResult
}: SearchNumberProps) {
  const [numToFind, setNumToFind] = useState<number | undefined>(undefined)
  const [showErrow, setShowError] = useState<boolean>(false)

  const onChangeInputValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value

    if (!newValue) {
      setShowError(true)
      setNumToFind(undefined)
      return
    }

    setNumToFind(Number(newValue))
    setShowError(false)
  }

  const findNumber = () => {
    if (typeof numToFind === "number") {
      const result = binarySearch(allNumbers, numToFind)
      setResult(result)
      setShowError(false)
    } else {
      setShowError(true)
    }
  }

  const onPressKeyInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") findNumber()
  }

  return (
    <>
      <Input
        buttonLabel="Search"
        type="number"
        onChange={onChangeInputValue}
        OnPressButton={findNumber}
        onPressKey={onPressKeyInput}
        value={numToFind}
      />

      <div className="text-xs mt-2 text-red-600 font-semibold">
        {showErrow ? "Number is required!" : ""}
      </div>
    </>
  )
}
