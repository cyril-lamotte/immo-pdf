import { useContext } from 'react';
import Bubble from "../components/Bubble/bubble"
import DocumentHeader from "../components/DocumentHeader/documentHeader"
import DocumentFooter from '../components/DocumentFooter/documentFooter';
import { TenantContext } from '../contexts/TenantContext.js';

export default function AnnualRent() {
  // Get tenant from context.
  const { tenant, setTenant } = useContext(TenantContext);

  const title = 'Révision annuelle du loyer ' + new Date().getFullYear();

  // Computed new year.
  const irl_new_year = parseInt(tenant.irl_previous_year.value) + 1;

  // Computed % increase, with ceiling of 3.5%.
  const ceil = 3.50;
  const real_increase = (parseInt(tenant.irl_new.value) - parseInt(tenant.irl_previous.value)) / tenant.irl_previous.value * 100;
  const increase = Math.round(Math.min(real_increase, ceil) * 100) / 100;

  // Computed new income.
  const income = (tenant.previous_income.value * tenant.irl_new.value) / tenant.irl_previous.value + tenant.charges.value;
  const newIncome = income.toFixed(2);

  // Computed month name.
  const month = new Date(2010, tenant.month.value, 1).toLocaleString('fr-FR', { month: 'long' });

  return (
    <main>
      <DocumentHeader title={title} />

      <p>Bonjour <Bubble item="tenant_name" />,</p>

      <p>
        Dans le cadre de la révision annuelle des loyers, à l’anniversaire
        du bail, votre loyer est indexé sur le nouvel <em>Indice de
        Référence des Loyers</em> (IRL) .
      </p>

      <h2>
          Évolution de l’IRL du <Bubble item="quarter" />
        <sup>ème</sup> trimestre (Source : ANIL)
      </h2>

      <p><Bubble item="irl_previous_year" /> : <strong><Bubble item="irl_previous" /></strong></p>
      <p>{ irl_new_year } : <strong><Bubble item="irl_new" /> (+{increase}%)</strong></p>

      <h2>Nouveau loyer</h2>

      <p>(Loyer précédent &times; nouvel IRL ) / IRL précédent + Charges locatives = <strong>Nouveau loyer</strong></p>
      <code>
        ( { tenant.previous_income.value } x { tenant.irl_new.value} )
        / { tenant.irl_previous.value } + { tenant.charges.value } = { newIncome }&nbsp;€
      </code>

      <p>Votre nouveau loyer, charges comprises, à partir de&nbsp;
        <strong><u>{ month } { new Date().getFullYear() }</u></strong>&nbsp;:
      </p>

      <code className="total"><strong>{ newIncome }&nbsp;€</strong></code>

      <p>Pouvez-vous prendre les dispositions nécessaires pour mettre à jour
        votre virement&nbsp;?</p>

      <p className="spacing-1">Bien cordialement,</p>

      <DocumentFooter />
    </main>
  )
}
