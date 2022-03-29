import { useState } from "react"

export const useInput = (validatorFunc) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouchedValue] = useState(false);

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
    enterValueHandler,
    blurHandler,
    reset
  }
}