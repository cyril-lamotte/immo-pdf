import React, { createContext, useEffect, useState, useContext } from "react";
import { Bail } from "../types/Bail";
import jwt from "jwt-simple";

type BailContext = {
  bail: Bail;
  setBail?: (bail: Bail) => void;
  save: (bail: Bail) => void;
}

/**
 * BailContext.
 */
export const BailContext = createContext<BailContext | null>(null);

/**
 * Get data from URL or local storage.
 */
export const getData = () => {
  // Get data attribute from URL.
  const url = new URL(window.location.href);
  const token = url.searchParams.get('data') ?? null;
  if (token) {
    const data_from_url: Bail = jwt.decode(token, "98woAFhtg4rit3aojJRgifofjiawuSDFh3f8iw23hazsknjvISEBF");
    return data_from_url;
  }

  // Get data from local storage.
  const bail = localStorage.getItem('bail');
  if (bail) {
    return JSON.parse(bail);
  }

  // Empty object.
  return {
    version: '0.1.0',
  };
}

/**
 * BailContextProvider component.
 */
export const BailContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [bail, setBail] = useState({});

  useEffect(() => {
    setBail(getData);
  }, []);

  const save = (bail: Bail) => {
    setBail((bail));
    localStorage.setItem('bail', JSON.stringify(bail));
    console.log('Save', bail);
  }

  return (
    <BailContext.Provider value={{ bail, setBail, save }}>
      {children}
    </BailContext.Provider>
  )
}

/**
 * BailContext hook.
 */
export function useBailContext() {
  const context = useContext(BailContext);
  if (!context) {
    throw new Error('useBailContext must be used within a BailContextProvider');
  }
  return context;
}
