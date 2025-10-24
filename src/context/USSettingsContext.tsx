import React, { createContext, useContext, useState, useEffect } from 'react';

interface USSettings {
  stateCode: string;
  isPrime: boolean;
}

interface USSettingsContextType {
  settings: USSettings;
  updateState: (stateCode: string) => void;
  togglePrime: () => void;
}

const USSettingsContext = createContext<USSettingsContextType | undefined>(undefined);

export function USSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<USSettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('usSettings');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return {
      stateCode: '',
      isPrime: false,
    };
  });

  useEffect(() => {
    localStorage.setItem('usSettings', JSON.stringify(settings));
  }, [settings]);

  const updateState = (stateCode: string) => {
    setSettings(prev => ({ ...prev, stateCode }));
  };

  const togglePrime = () => {
    setSettings(prev => ({ ...prev, isPrime: !prev.isPrime }));
  };

  return (
    <USSettingsContext.Provider value={{ settings, updateState, togglePrime }}>
      {children}
    </USSettingsContext.Provider>
  );
}

export function useUSSettings() {
  const context = useContext(USSettingsContext);
  if (context === undefined) {
    throw new Error('useUSSettings must be used within a USSettingsProvider');
  }
  return context;
} 