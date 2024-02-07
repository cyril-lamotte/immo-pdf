import React, { createContext } from "react";

const defaultTenant = {
  full_name: {
    value: 'M. Exemple',
    label: 'Nom complet',
    desc: 'Ex : M. Dupond',
  },
  quarter: {
    value: 1,
    label: 'Trimestre',
    desc: '',
  },
  irl_previous_year: {
    value: 2023,
    label: "Année de l'IRL précédent",
    desc: '',
  },
  irl_previous: {
    value: 100,
    label: "IRL précédent",
    desc: 'Ex : 100, 134',
  },
  irl_new: {
    value: 102,
    label: "Nouvel IRL",
    desc: 'Ex : 104, 138',
  },
};
export const TenantContext = createContext(defaultTenant);
