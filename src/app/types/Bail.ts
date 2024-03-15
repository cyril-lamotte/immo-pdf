export type Bail = {
  version: string,
  quarter?:  number,
  irl_previous_year?: number,
  irl_previous?:  number,
  irl_new?:  number,
  income?: number,
  previous_income?: number,
  charges?:  number,
  month?:  number,
  owner_address?:  string,
  owner_name?: string,
  tenant_address?: string,
  tenant_name?:  string,
  tenant_count?: number,
  garantie?: number,
  address?: string,
  surface?: number,
  signature?: string,
  amount_works?: number,
  bail_date?: string,
  bail_end_date?: string,
  caution?: boolean,
  invoice_number?: string,
  invoice_date?: string,
  quittance_amount?: string,
  quittance_start_date?: string,
  quittance_end_date?: string,
  type?: string,
  description?: string,
  warm_water?: string,
  heating?: string,
  common_equipment?: string,
  arrhes?: number,
};
