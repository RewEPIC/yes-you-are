"use client"
import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

interface ModalContextType {
  hasSeenShoppingModal: boolean;
  markShoppingModalAsSeen: () => void;
  resetShoppingModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [hasSeenShoppingModal, setHasSeenShoppingModal] = useState(false);

  const markShoppingModalAsSeen = useCallback(() => {
    setHasSeenShoppingModal(true);
  }, []);

  const resetShoppingModal = useCallback(() => {
    setHasSeenShoppingModal(false);
  }, []);

  return (
    <ModalContext.Provider 
      value={{ 
        hasSeenShoppingModal, 
        markShoppingModalAsSeen,
        resetShoppingModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
}