type InputWithButtonProps = {
  buttonLabel: string,
  onChange: (ecvt: React.ChangeEvent<HTMLInputElement>) => void
  OnPressButton: React.MouseEventHandler<HTMLButtonElement>
  type: React.HTMLInputTypeAttribute | undefined
  onPressKey: React.KeyboardEventHandler<HTMLInputElement>
  disableButton: boolean
}

const InputWithButton = ({ 
  buttonLabel, 
  type, 
  onChange, 
  OnPressButton, 
  onPressKey,
  disableButton
}: InputWithButtonProps) => {
  return (
    <div className="group w-72 md:w-80 lg:w-96">
      <div className="relative flex items-center">
        <input 
          type={type}
          className="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" 
          onChange={(evt) => onChange(evt)}
          onKeyDown={onPressKey}
          data-test-id={`${buttonLabel.toLowerCase()}-input`}
        />
        <button 
          className="absolute right-2 h-7 w-16 rounded-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600"
          onClick={OnPressButton}
          disabled={disableButton}
          data-test-id={`${buttonLabel.toLowerCase()}-button`}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}

export default InputWithButton