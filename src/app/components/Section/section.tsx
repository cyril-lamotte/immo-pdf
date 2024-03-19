"use client"

import React from 'react';
import { useBailContext } from "@/app/contexts/BailContextProvider";

export default function Section({ name, children }: { name: string, children: React.ReactNode }) {
  const { bail } = useBailContext();

  return (
    <section>
      <h2>{ name }</h2>

      {children}

    </section>
  )
}
