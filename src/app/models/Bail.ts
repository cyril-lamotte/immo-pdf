export class Bail {

  tenant_name: string;
  tenant_address: string;

  irl_previous_year: number;
  irl_previous: number;
  irl_new: number;

  previous_income: number;
  charges: number;
  month: number;

  owner_address: string;
  owner_name: string;

  constructor(tenant_name: string, irl_previous_year: number, irl_previous: number, irl_new: number, previous_income: number, charges: number, month: number, owner_address: string, owner_name: string, tenant_address: string) {
    this.tenant_name = tenant_name;
    this.tenant_address = tenant_address;

    this.irl_previous_year = irl_previous_year;
    this.irl_previous = irl_previous;
    this.irl_new = irl_new;

    this.previous_income = previous_income;
    this.charges = charges;
    this.month = month;

    this.owner_address = owner_address;
    this.owner_name = owner_name;
  }
};
