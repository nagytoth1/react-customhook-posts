import { useEffect, useState } from "react";

// custom hooks: subset of react components
// custom hooks can't work alone, they have to be part of a component
// custom hooks benefit: extract logic within them and reuse them across entire application
// every component that uses this custom hook will have its own instance of the hook and only shares the logic, not the actual values
export default function useCustom(defaultValue) {
  const [value, setValue] = useState(defaultValue || "");

  return value;
}
