import React from 'react'

export default function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item =
        typeof window === 'object'
          ? window.localStorage.getItem(key)
          : undefined

      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: string | Function) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
