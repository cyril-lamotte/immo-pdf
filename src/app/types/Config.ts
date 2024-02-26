
type FieldConfig = {
  label: string,
  desc?: string,
  type?: string,
  widget?: string,
}

type Config = {
  quarter: FieldConfig,
  irl_previous_year: FieldConfig,
  irl_previous: FieldConfig,
  irl_new: FieldConfig,
  income: FieldConfig,
  previous_income: FieldConfig,
  charges: FieldConfig,
  month: FieldConfig,
  owner_address: FieldConfig,
  tenant_address: FieldConfig,
  owner_name: FieldConfig,
  tenant_name: FieldConfig,
  garantie: FieldConfig,
  address: FieldConfig,
  amount_works: FieldConfig,
  bail_date: FieldConfig,
  caution: FieldConfig,
}

export const config:Config = {
  quarter: {
    label: 'Trimestre',
    type: 'int',
  },
  irl_previous_year: {
    label: "Année de l'IRL précédent",
    type: 'int',
  },
  irl_previous: {
    label: "IRL précédent",
    desc: 'Ex : 100, 134',
    type: 'int',
  },
  irl_new: {
    label: "Nouvel IRL",
    desc: 'Ex : 104, 138',
    type: 'int',
  },
  income: {
    label: "Loyer initial",
    desc: 'Ex : 414',
    type: 'int',
  },
  previous_income: {
    label: "Loyer précédent",
    desc: 'Ex : 500',
    type: 'int',
  },
  charges: {
    label: "Charges locatives",
    desc: 'Ex : 0, 50',
    type: 'int',
  },
  month: {
    label: "Mois",
    desc: 'Ex : 1, 12',
    type: 'int',
  },
  owner_address: {
    label: 'Adresse du propriétaire',
    desc: 'Ex : 6 rue Late\n53100 Mayenne',
    type: 'input',
    widget: 'textarea',
  },
  tenant_address: {
    label: 'Adresse du locataire',
    desc: 'Ex : 78 bd Matoni\n53100 Mayenne',
    type: 'input',
    widget: 'textarea',
  },
  owner_name: {
    label: 'Nom du proriétaire',
    desc: 'Ex : M. Durand',
    type: 'input',
  },
  tenant_name: {
    label: 'Nom complet',
    desc: 'Ex : M. Dupond',
    type: 'input',
  },
  garantie: {
    label: 'Montant du dépôt de garantie',
    desc: 'Ex : 499',
    type: 'int',
  },
  address: {
    label: 'Adresse du bien',
    desc: 'Ex : 6 rue Late\n53100 Mayenne',
    type: 'input',
    widget: 'textarea',
  },
  amount_works: {
    label: 'Montant des travaux',
    desc: 'Ex : 7000',
    type: 'int',
  },
  bail_date: {
    label: 'Date de signature',
    desc: 'Ex : 01/01/2024',
    type: 'input',
    widget: 'date',
  },
  caution: {
    label: 'Le contrat possède une caution',
    type: 'boolean',
    widget: 'checkbox',
  },
}
