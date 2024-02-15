import { createContext } from "react";
import { Bail } from "../types/Bail";

export const BailContext = createContext(<Bail>{
  tenant_name: 'M. Default contexte',
  tenant_address: '6 rue Late\n53100 Mayenne',
  irl_previous_year: 2023,
  irl_previous: 100,
  irl_new: 102,
  quarter: 1,
  previous_income: 499,
  charges: 20,
  month: 1,
  owner_name: 'M. Y',
  owner_address: '78 bd Matoni\n53100 Mayenne',
});
