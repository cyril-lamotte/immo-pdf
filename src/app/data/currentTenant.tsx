import { Tenant } from '../types/Tenant';

export const currentTenant:Tenant = {
  quarter: {
    value: 1,
    label: 'Trimestre',
  },
  irl_previous_year: {
    value: 2023,
    label: "Année de l'IRL précédent",
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
  previous_income: {
    value: 499,
    label: "Loyer précédent",
    desc: 'Ex : 500',
  },
  charges: {
    value: 20,
    label: "Charges locatives",
    desc: 'Ex : 0, 50',
  },
  month: {
    value: 1,
    label: "Mois",
    desc: 'Ex : 1, 12',
  },
  owner_address: {
    value: '6 rue Late\n53100 Mayenne',
    label: 'Adresse du propriétaire',
    desc: 'Ex : 6 rue Late\n53100 Mayenne',
  },
  tenant_address: {
    value: '78 bd Matoni\n53100 Mayenne',
    label: 'Adresse du locataire',
    desc: 'Ex : 78 bd Matoni\n53100 Mayenne',
  },
  owner_name: {
    value: 'M. Y',
    label: 'Nom du proriétaire',
    desc: 'Ex : M. Y',
  },
  tenant_name: {
    value: 'M. Dupond',
    label: 'Nom complet',
    desc: 'Ex : M. Dupond',
  },
}
