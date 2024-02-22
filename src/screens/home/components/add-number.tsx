"use client"

import { useState } from "react"
import InputWithButton from "@/components/input-with-button"

type AddNumberProps = {
  allNumbers: Array<number>
  setAllNumbers: React.Dispatch<React.SetStateAction<number[]>>
}

export default function AddNumber({
  allNumbers,
  setAllNumbers
}: AddNumberProps) {
  const [numToAdd, setNumToAdd] = useState<number | undefined>(undefined)

  const onChangeInputAddValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value

    setNumToAdd(!newValue ? undefined : Number(newValue))
  }

  const onAddNumber = () => {
    if (typeof numToAdd !== "number") return

    const newNumbers = Array.from(new Set([...allNumbers, numToAdd])).sort(
      (before, after) => before - after
    )

    setAllNumbers(newNumbers)
    setNumToAdd(undefined)
  }

  const onPressKeyToAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") onAddNumber()
  }

  return (
    <InputWithButton
      buttonLabel="Add"
      type="number"
      onChange={onChangeInputAddValue}
      OnPressButton={onAddNumber}
      onPressKey={onPressKeyToAdd}
      style={{ container: "max-w-40" }}
      value={numToAdd}
    />
  )
}
