import { Bail } from '../types/Bail';

const data = {
  tenant_name: 'M. Locataire',
  irl_previous_year: 2000,
  irl_previous: 100,
  irl_new: 104,
  quarter: 9,
  previous_income: 999,
  charges: 99,
  month: 1,
  tenant_address: '9 rue Locataire\n53100 Mayenne',
  owner_name: 'M. Propriétaire',
  owner_address: '99 bd Propriétaire\n53100 Mayenne',
  garantie: 999,
  address: '99 rue DuBien\n53100 Mayenne',
};

export const currentBail:Bail = data;
