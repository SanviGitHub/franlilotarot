import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Ritual, AdminState } from '../types';
import { INITIAL_RITUALS, DATA_VERSION } from '../constants';

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

  // Load from LocalStorage on mount with VERSION CHECK
  useEffect(() => {
    const savedRituals = localStorage.getItem('franlilo_rituals');
    const savedVersion = localStorage.getItem('franlilo_version');

    if (savedRituals) {
      // Check if version matches
      if (savedVersion === DATA_VERSION) {
        // Version is current, load from storage (allows admin edits to persist)
        try {
          setRituals(JSON.parse(savedRituals));
        } catch (e) {
          console.error("Failed to parse saved rituals", e);
          setRituals(INITIAL_RITUALS); // Fallback
        }
      } else {
        // Version mismatch! This means we updated the code but browser has old data.
        // Force update to new constants
        console.log("Detectada nueva versión de datos. Actualizando catálogo...");
        setRituals(INITIAL_RITUALS);
        localStorage.setItem('franlilo_version', DATA_VERSION);
        localStorage.setItem('franlilo_rituals', JSON.stringify(INITIAL_RITUALS));
      }
    } else {
      // First visit
      localStorage.setItem('franlilo_version', DATA_VERSION);
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
      localStorage.setItem('franlilo_version', DATA_VERSION);
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