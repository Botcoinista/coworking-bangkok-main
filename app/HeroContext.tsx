// HeroContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface HeroContextType {
  showHero: boolean;
  setShowHero: (show: boolean) => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export const useHero = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("useHero must be used within a HeroProvider");
  }
  return context;
};

interface HeroProviderProps {
  children: ReactNode;
}

export const HeroProvider: React.FC<HeroProviderProps> = ({ children }) => {
  const [showHero, setShowHero] = useState(true); // default value

  return (
    <HeroContext.Provider value={{ showHero, setShowHero }}>
      {children}
    </HeroContext.Provider>
  );
};
