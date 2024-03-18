
type FieldConfig = {
  label: string,
  desc?: string,
  type?: string,
  widget?: string,
  values?: any,
}

export type Config = {
  [key: string]: FieldConfig
}

const responsabilityType = [
  { label: 'Collectif', value: 'communal' },
  { label: 'Individuel', value: 'individual' },
]

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
  tenant_count: {
    label: 'Nombre de locataires',
    desc: 'Ex : 1, 2',
    type: 'int',
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
  bail_end_date: {
    label: 'Date de fin de location',
    desc: 'Ex : 01/01/2024',
    type: 'input',
    widget: 'date',
  },
  caution: {
    label: 'Le contrat possède une caution',
    type: 'boolean',
    widget: 'checkbox',
  },
  invoice_number: {
    label: 'N° de facture',
    type: 'input',
  },
  invoice_date: {
    label: 'Date de facture',
    type: 'input',
    widget: 'date',
  },
  invoice_address: {
    label: 'Adresse de facturation',
    type: 'input',
    widget: 'textarea',
  },
  quittance_amount: {
    label: 'Montant de la quittance',
    type: 'input',
  },
  quittance_start_date: {
    label: 'Date de début de la période',
    type: 'input',
    widget: 'date',
  },
  quittance_end_date: {
    label: 'Date de fin de la période',
    type: 'input',
    widget: 'date',
  },
  type: {
    label: 'Type de location',
    type: 'input',
    widget: 'radios',
    values: [
      { label: 'Meublée', value: 'meuble' },
      { label: 'Vide', value: 'empty' },
      { label: 'Saisonnière', value: 'season' },
    ],
  },
  surface: {
    label: 'Surface',
    type: 'int',
    desc: 'Ex : 42m<sup>2</sup>',
  },
  description: {
    label: 'Description',
    type: 'input',
    widget: 'textarea',
  },
  warm_water: {
    label: 'Eau chaude',
    type: 'input',
    widget: 'radios',
    values: responsabilityType,
  },
  heating: {
    label: 'Chauffage',
    type: 'input',
    widget: 'radios',
    values: responsabilityType,
  },
  common_equipment: {
    label: 'Equipements communs',
    type: 'input',
    widget: 'textarea',
  },
  arrhes: {
    label: 'Arrhes',
    type: 'int',
  },
  city: {
    label: 'Ville',
    type: 'input',
  },
  today: {
    label: 'Date du jour',
    type: 'input',
    widget: 'date',
  },
  owner_company_name: {
    label: 'Nom de la société',
    type: 'input',
  },
  owner_siret: {
    label: 'SIRET',
    type: 'input',
  },
  owner_company_address: {
    label: 'Adresse de la société',
    type: 'input',
    widget: 'textarea',
  },
}
