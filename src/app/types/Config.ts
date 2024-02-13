
type Config = {
  quarter: {
    label: string,
    desc?: string,
  },
  irl_previous_year: {
    label: string,
    desc?: string,
  },
  irl_previous: {
    label: string,
    desc?: string,
  },
  irl_new: {
    label: string,
    desc?: string,
  },
  previous_income: {
    label: string,
    desc?: string,
  },
  charges: {
    label: string,
    desc?: string,
  },
  month: {
    label: string,
    desc?: string,
  },
  owner_address: {
    label: string,
    desc?: string,
  },
  tenant_address: {
    label: string,
    desc?: string,
  },
  owner_name: {
    label: string,
    desc?: string,
  },
  tenant_name: {
    label: string,
    desc?: string,
  },
  garantie: {
    label: string,
    desc?: string,
  },
  address: {
    label: string,
    desc?: string,
  }
}

export const config:Config = {
  quarter: {
    label: 'Trimestre',
  },
  irl_previous_year: {
    label: "Année de l'IRL précédent",
  },
  irl_previous: {
    label: "IRL précédent",
    desc: 'Ex : 100, 134',
  },
  irl_new: {
    label: "Nouvel IRL",
    desc: 'Ex : 104, 138',
  },
  previous_income: {
    label: "Loyer précédent",
    desc: 'Ex : 500',
  },
  charges: {
    label: "Charges locatives",
    desc: 'Ex : 0, 50',
  },
  month: {
    label: "Mois",
    desc: 'Ex : 1, 12',
  },
  owner_address: {
    label: 'Adresse du propriétaire',
    desc: 'Ex : 6 rue Late\n53100 Mayenne',
  },
  tenant_address: {
    label: 'Adresse du locataire',
    desc: 'Ex : 78 bd Matoni\n53100 Mayenne',
  },
  owner_name: {
    label: 'Nom du proriétaire',
    desc: 'Ex : M. Y',
  },
  tenant_name: {
    label: 'Nom complet',
    desc: 'Ex : M. Dupond',
  },
  garantie: {
    label: 'Montant du dépôt de garantie',
    desc: 'Ex : 499',
  },
  address: {
    label: 'Adresse du bien',
    desc: 'Ex : 6 rue Late\n53100 Mayenne',
  }
}
