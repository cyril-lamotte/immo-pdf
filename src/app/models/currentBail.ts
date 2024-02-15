import { Bail } from '../types/Bail';
import jwt from "jwt-simple";

const token = jwt.encode({
  tenant_name: 'M. Dupond',
  irl_previous_year: 2023,
  irl_previous: 100,
  irl_new: 102,
  quarter: 1,
  previous_income: 499,
  charges: 20,
  month: 1,
  tenant_address: '6 rue Late\n53100 Mayenne',
  owner_name: 'M. Y',
  owner_address: '78 bd Matoni\n53100 Mayenne',
  garantie: 499,
  address: '6 rue Late\n53100 Mayenne',
  },
  "98woAFhtg4rit3aojJRgifofjiawuSDFh3f8iw23hazsknjvISEBF"
);

const data = jwt.decode(token, "98woAFhtg4rit3aojJRgifofjiawuSDFh3f8iw23hazsknjvISEBF");
console.table(data);

export const currentBail:Bail = data;
