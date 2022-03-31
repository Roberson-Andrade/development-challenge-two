import { useEffect, useState } from "react"

export const useInput = (validatorFunc, defaultValue) => {
  const initial = ''

  const [value, setValue] = useState(initial);
  const [isTouched, setIsTouchedValue] = useState(false);

  
  useEffect(() => {
    setValue(defaultValue || initial)
  }, [defaultValue])

  const valueisValid = validatorFunc(value);
  const hasError = !valueisValid && isTouched;

  const enterValueHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouchedValue(true)
  };

  const reset = () => {
    setValue('');
    setIsTouchedValue(false);
  };

  return {
    value,
    isTouched,
    hasError,
    valueisValid,
    enterValueHandler,
    blurHandler,
    reset
  }
}