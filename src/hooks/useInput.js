import { useState } from "react";

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChangeText: (e) => setValue(e)
    },
    () => setValue("")
  ];
}