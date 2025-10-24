import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface USPrimeState {
  isPrimeMember: boolean;
  primeExpiration?: Date;
  primeFeatures: {
    freeShipping: boolean;
    twoDayShipping: boolean;
    primeVideo: boolean;
    primeMusic: boolean;
    primeGaming: boolean;
    primeReading: boolean;
  };
}

interface USPrimeContextType {
  state: USPrimeState;
  togglePrimeMembership: () => void;
}

const USPrimeContext = createContext<USPrimeContextType | undefined>(undefined);

export function USPrimeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<USPrimeState>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('usPrimeSettings');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          primeExpiration: parsed.primeExpiration ? new Date(parsed.primeExpiration) : undefined,
        };
      }
    }
    return {
      isPrimeMember: false,
      primeFeatures: {
        freeShipping: false,
        twoDayShipping: false,
        primeVideo: false,
        primeMusic: false,
        primeGaming: false,
        primeReading: false,
      },
    };
  });

  useEffect(() => {
    localStorage.setItem('usPrimeSettings', JSON.stringify(state));
  }, [state]);

  const togglePrimeMembership = () => {
    setState(prev => ({
      isPrimeMember: !prev.isPrimeMember,
      primeExpiration: !prev.isPrimeMember ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) : undefined,
      primeFeatures: {
        freeShipping: !prev.isPrimeMember,
        twoDayShipping: !prev.isPrimeMember,
        primeVideo: !prev.isPrimeMember,
        primeMusic: !prev.isPrimeMember,
        primeGaming: !prev.isPrimeMember,
        primeReading: !prev.isPrimeMember,
      },
    }));
  };

  return (
    <USPrimeContext.Provider value={{ state, togglePrimeMembership }}>
      {children}
    </USPrimeContext.Provider>
  );
}

export function useUSPrime() {
  const context = useContext(USPrimeContext);
  if (context === undefined) {
    throw new Error('useUSPrime must be used within a USPrimeProvider');
  }
  return context;
} 