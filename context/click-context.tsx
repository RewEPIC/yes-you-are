// context/ClickContext.tsx
'use client';
import { createContext, useContext } from 'react';

export const ClickContext = createContext<{ globalNavigate: (url: string) => void }>({
  globalNavigate: () => {},
});

export const useGlobalNavigate = () => useContext(ClickContext);
