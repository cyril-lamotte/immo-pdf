"use client"

import { useState, useEffect } from 'react';
import Bubble from "../components/Bubble/bubble"
import DocumentHeader from "../components/DocumentHeader/documentHeader"
import DocumentFooter from '../components/DocumentFooter/documentFooter';
import { TenantContext } from '../contexts/TenantContext';
import { Tenant } from '../types/Tenant';
import { currentTenant } from '../data/currentTenant';

export default function AnnualRent() {
  const [tenant, setTenant] = useState(currentTenant);

  useEffect(() => {
    // Listen to hide event to close bubbles.
    document.addEventListener('onBubbleOpen', (e) => {
      const bubble_id = e.detail;
      const event = new CustomEvent('onBubbleHide', { detail: bubble_id });
      document.dispatchEvent(event);
    });
  }, []);

  const handleClick = () => {
    const event = new Event('onBubbleHide');
    document.dispatchEvent(event);
  }

  const title = 'Révision annuelle du loyer ' + new Date().getFullYear();

  // Computed new year.
  const irl_new_year = tenant.irl_previous_year.value + 1;

  // Computed % increase, with ceiling of 3.5%.
  const ceil = 3.50;
  const real_increase = (tenant.irl_new.value - tenant.irl_previous.value) / tenant.irl_previous.value * 100;
  const increase = Math.round(Math.min(real_increase, ceil) * 100) / 100;

  // Computed new income.
  const income = (tenant.previous_income.value * tenant.irl_new.value) / tenant.irl_previous.value + tenant.charges.value;
  const newIncome = income.toFixed(2);

  // Computed month name.
  const month = new Date(2010, tenant.month.value, 1).toLocaleString('fr-FR', { month: 'long' });

  return (
    <main onClick={handleClick}>
      <TenantContext.Provider value={{ tenant, setTenant }}>
        <div className="document">
          <DocumentHeader title={title} />

          <p>Bonjour <Bubble item="tenant_name" />,</p>

          <p>
            Dans le cadre de la révision annuelle des loyers, à l’anniversaire
            du bail, votre loyer est indexé sur le nouvel <em>Indice de
            Référence des Loyers</em> (IRL) .
          </p>

          <div className="document__irl-layout">

            <div>
              <h2>Calcul du nouveau loyer</h2>

              <p>(Loyer &times; IRL ) / IRL précédent + Charges = <strong>Nouveau loyer</strong></p>
              <code>
                ( { tenant.previous_income.value } x { tenant.irl_new.value} )
                / { tenant.irl_previous.value } + { tenant.charges.value } = { newIncome }&nbsp;€
              </code>
            </div>

            <div>

              <table className="document__table">
                <caption>IRL du <Bubble item="quarter" type="int" /> <sup>ème</sup> trimestre (Source : ANIL)</caption>
                <thead>
                  <tr>
                    <th>Année</th>
                    <th>IRL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{ tenant.irl_previous_year.value }</td>
                    <td><Bubble item="irl_previous" type="int" /></td>
                  </tr>
                  <tr>
                    <td>{ irl_new_year }</td>
                    <td><Bubble item="irl_new" type="int" /> (+{increase}%)</td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>

          <div className="document__total">
            <p>Votre nouveau loyer, charges comprises,
              <br />à partir de&nbsp;
              <strong><u>{ month } { new Date().getFullYear() }</u></strong>&nbsp;:
            </p>

            <code className="total"><strong>{ newIncome }&nbsp;€</strong></code>
          </div>

          <p>Pouvez-vous prendre les dispositions nécessaires pour mettre à jour
            votre virement&nbsp;?</p>

          <p className="spacing-1">Bien cordialement,</p>

          <DocumentFooter />
        </div>
      </TenantContext.Provider>
    </main>
  )
}
