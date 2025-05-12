import { createContext, useContext } from "react";

export function createSafeContext<T>(hookName = "useContext") {
    const Context = createContext<T | undefined>(undefined)
  
    const useSafeContext = () => {
      const context = useContext(Context)
      if (context === undefined) {
        throw new Error(`${hookName} must be used within a corresponding Provider`)
      }
      return context
    }
  
    return [Context.Provider, useSafeContext] as const
}