import React, { createContext, useEffect, useState, useLayoutEffect } from "react";
import { Bail } from "../types/Bail";
import jwt from "jwt-simple";

export const BailContext = createContext({});

const getData = () => {
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
  return {};
}

export const BailContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [bail, setBail] = useState({});

  useEffect(() => {
    setBail(getData);
  }, []);

  const save = (bail: Bail) => {
    setBail((bail));
    localStorage.setItem('bail', JSON.stringify(bail));
  }

  return (
    <BailContext.Provider value={{ bail, setBail, save }}>
      {children}
    </BailContext.Provider>
  )
}
