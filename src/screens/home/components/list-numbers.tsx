"use client"

type ListNumbersProps = {
  allNumbers: number[]
  result: number | null
}

export default function ListNumbers({ allNumbers, result }: ListNumbersProps) {
  const wasFound = () => result !== -1

  return (
    <>
      {allNumbers.map((num, index) => (
        <p
          key={index}
          data-test-id={`item-${index}`}
          className={`py-0.5 px-5 rounded-lg flex items-center ${result === index ? "bg-green-400" : "bg-white"}`}
        >
          {num}
        </p>
      ))}

      <span className="py-2 px-1">=</span>

      <p
        key={result}
        data-test-id="result-card"
        className={`py-0.5 px-5 rounded-lg flex flex-col items-center min-w-28 ${result !== null ? (wasFound() ? "bg-green-400" : "bg-red-400") : "bg-yellow-300"}`}
      >
        <span className="text-xs">{wasFound() ? "index" : "not found"}</span>
        <span data-test-id="result-value">
          {typeof result === "number" ? result : "?"}
        </span>
      </p>
    </>
  )
}
