import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserMode = 'user' | 'provider';

interface UserModeContextType {
  mode: UserMode;
  setMode: (mode: UserMode) => void;
  toggleMode: () => void;
  isUserMode: boolean;
  isProviderMode: boolean;
  isTransitioning: boolean;
  targetMode: UserMode | null;
}

const UserModeContext = createContext<UserModeContextType | undefined>(undefined);

interface UserModeProviderProps {
  children: ReactNode;
  initialMode?: UserMode;
}

const TRANSITION_DURATION = 2500; // 2.5 segundos

export function UserModeProvider({ children, initialMode = 'user' }: UserModeProviderProps) {
  const [mode, setMode] = useState<UserMode>(initialMode);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetMode, setTargetMode] = useState<UserMode | null>(null);

  const toggleMode = () => {
    // Define o modo alvo
    const newMode = mode === 'user' ? 'provider' : 'user';
    setTargetMode(newMode);

    // Inicia a transição
    setIsTransitioning(true);

    // Após 1 segundo (meio da transição), troca o modo
    setTimeout(() => {
      setMode(newMode);
    }, TRANSITION_DURATION / 2);

    // Após 2 segundos (fim da transição), remove a tela de transição
    setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_DURATION);

    // Após 2.3 segundos (após o fade out), limpa o targetMode
    setTimeout(() => {
      setTargetMode(null);
    }, TRANSITION_DURATION + 300);
  };

  const value: UserModeContextType = {
    mode,
    setMode,
    toggleMode,
    isUserMode: mode === 'user',
    isProviderMode: mode === 'provider',
    isTransitioning,
    targetMode,
  };

  return <UserModeContext.Provider value={value}>{children}</UserModeContext.Provider>;
}

export function useUserMode() {
  const context = useContext(UserModeContext);
  if (context === undefined) {
    throw new Error('useUserMode must be used within a UserModeProvider');
  }
  return context;
}
