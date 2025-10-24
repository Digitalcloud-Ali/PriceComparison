import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '@/types/product';

interface CompareState {
  items: Product[];
}

type CompareAction =
  | { type: 'ADD_TO_COMPARE'; payload: Product }
  | { type: 'REMOVE_FROM_COMPARE'; payload: string }
  | { type: 'CLEAR_COMPARE' };

const CompareContext = createContext<{
  state: CompareState;
  dispatch: React.Dispatch<CompareAction>;
} | undefined>(undefined);

const compareReducer = (state: CompareState, action: CompareAction): CompareState => {
  switch (action.type) {
    case 'ADD_TO_COMPARE':
      if (state.items.length >= 4) {
        return state; // Limit to 4 items
      }
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'REMOVE_FROM_COMPARE':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case 'CLEAR_COMPARE':
      return {
        items: [],
      };

    default:
      return state;
  }
};

export function CompareProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(compareReducer, {
    items: [],
  });

  return (
    <CompareContext.Provider value={{ state, dispatch }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
} 