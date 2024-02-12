import { createContext } from "react";
import { Tenant } from "../types/Tenant";

const defaultTenant:Tenant = {
  previous_income: {
    value: 499,
    label: "Loyer précédent",
  },
  charges: {
    value: 19,
    label: "Charges locatives",
  },
  month: {
    value: 6,
    label: "Mois de l'anniversaire du bail",
  },
  owner_address: {
    value: '1 rue de la Paix, 75000 Paris',
    label: 'Adresse du propriétaire',
  },
  owner_name: {
    value: 'M. Exemple',
    label: 'Nom complet',
  },
  tenant_address: {
    value: '1 rue de la Paix, 75000 Paris',
    label: 'Adresse du locataire',
  },
  tenant_name: {
    value: 'M. Exemple',
    label: 'Nom complet',
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
