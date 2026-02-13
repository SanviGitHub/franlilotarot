import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Ritual, AdminState } from '../types';
import { INITIAL_RITUALS } from '../constants';

interface AppContextType {
  rituals: Ritual[];
  addRitual: (newRitual: Ritual) => void;
  updateRitual: (updatedRitual: Ritual) => void;
  resetRituals: () => void;
  admin: AdminState;
  login: (user: string, pass: string) => boolean;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [rituals, setRituals] = useState<Ritual[]>(INITIAL_RITUALS);
  const [admin, setAdmin] = useState<AdminState>({ isAuthenticated: false, user: null });

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedRituals = localStorage.getItem('franlilo_rituals');
    if (savedRituals) {
      try {
        setRituals(JSON.parse(savedRituals));
      } catch (e) {
        console.error("Failed to parse saved rituals", e);
      }
    }
    
    const savedAdmin = localStorage.getItem('franlilo_admin');
    if (savedAdmin === 'true') {
        // Simple persistence for demo
        setAdmin({ isAuthenticated: true, user: 'Franlilo' });
    }
  }, []);

  // Save to LocalStorage on change
  useEffect(() => {
    localStorage.setItem('franlilo_rituals', JSON.stringify(rituals));
  }, [rituals]);

  const addRitual = (newRitual: Ritual) => {
    setRituals(prev => [newRitual, ...prev]);
  };

  const updateRitual = (updatedRitual: Ritual) => {
    setRituals(prev => prev.map(r => r.id === updatedRitual.id ? updatedRitual : r));
  };

  const resetRituals = () => {
      setRituals(INITIAL_RITUALS);
  }

  const login = (user: string, pass: string): boolean => {
    // Hardcoded credentials as requested
    if (user === 'Franlilo726' && pass === 'Frantarot627.admin') {
      setAdmin({ isAuthenticated: true, user: 'Franlilo' });
      localStorage.setItem('franlilo_admin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
      setAdmin({ isAuthenticated: false, user: null });
      localStorage.removeItem('franlilo_admin');
  };

  return (
    <AppContext.Provider value={{ rituals, addRitual, updateRitual, resetRituals, admin, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};