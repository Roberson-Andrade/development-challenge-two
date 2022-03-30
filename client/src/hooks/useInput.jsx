import { useEffect, useState } from "react"

export const useInput = (validatorFunc, defaultValue) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouchedValue] = useState(false);

  
  useEffect(() => {
    setValue(defaultValue || '')
  }, [defaultValue])

  const valueisValid = validatorFunc(value);
  const hasError = !valueisValid && isTouched;
  console.log(value)
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
    enterValueHandler,
    blurHandler,
    reset
  }
}