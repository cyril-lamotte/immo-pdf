"use client"

import { useState } from 'react';
import { TenantContext } from '../contexts/TenantContext';
import { currentTenant } from '../data/currentTenant';
import AnnualRent from './annualRent'

export default function Home() {

  const [tenant, setTenant] = useState(currentTenant);

  return (
    <main>
      <div className="document">
        <TenantContext.Provider value={{ tenant, setTenant }}>
          <AnnualRent />
        </TenantContext.Provider>
      </div>
    </main>
  )
}
