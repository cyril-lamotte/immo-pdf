"use client"

import Bubble from "../components/Bubble/bubble"
import DocumentHeader from "../components/DocumentHeader/documentHeader"
import DocumentFooter from '../components/DocumentFooter/documentFooter';
import Navigation from '../components/Navigation/navigation';
import { BailContext } from '../contexts/BailContext';
import { useDocument } from '../hooks/document.hook';
import { getInscrease, getNewIncome, getMonthName, getNextYear } from "../helpers/bail-helper";

export default function AnnualRent() {
  const { bail, setBail, handleClick } = useDocument();

  const title = 'Révision annuelle du loyer ' + new Date().getFullYear();

  const newIncome = getNewIncome(bail.previous_income, bail.irl_new, bail.irl_previous, bail.charges);

  return (
    <main onClick={handleClick}>
      <Navigation />
      <BailContext.Provider value={{ bail, setBail }}>
        <div className="document">
          <DocumentHeader title={title} />

          <p>Bonjour <Bubble item="tenant_name" />,</p>

          <p>
            Dans le cadre de la révision annuelle des loyers, à l’anniversaire
            du bail, votre loyer est indexé sur le nouvel <em>Indice de
            Référence des Loyers</em> (IRL) (Source : ANIL).
          </p>

          <div className="document__irl-layout">

            <div className="document__compute-income">
              <h2>Calcul du nouveau loyer</h2>

              <p>(Loyer &times; IRL ) / IRL précédent + Charges = <strong>Nouveau loyer</strong></p>
              <code>
                ( { bail.previous_income } x { bail.irl_new} )
                / { bail.irl_previous } + { bail.charges } = { newIncome }&nbsp;€
              </code>
            </div>

            <div className="document__irl-data">

              <table className="document__table">
                <caption>IRL du <Bubble item="quarter" type="int" /><sup>{ bail.quarter == 1 ? 'er' : 'ème' }</sup> trimestre</caption>
                <thead>
                  <tr>
                    <th>Année</th>
                    <th>IRL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Bubble item="irl_previous_year" type="int" /></td>
                    <td><Bubble item="irl_previous" type="int" /></td>
                  </tr>
                  <tr>
                    <td>{ getNextYear(bail.irl_previous_year) }</td>
                    <td><Bubble item="irl_new" type="int" /> (+{ getInscrease(bail.irl_new, bail.irl_previous) }%)</td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>

          <div className="document__total">
            <p>Votre nouveau loyer, charges comprises,
              <br />à partir de&nbsp;
              <strong><u><Bubble item="month" type="int" label={ getMonthName(bail.month) } /> { new Date().getFullYear() }</u></strong>&nbsp;:
            </p>

            <code className="total"><strong>{ newIncome }&nbsp;€</strong></code>
          </div>

          <p>Pouvez-vous prendre les dispositions nécessaires pour mettre à jour
            votre virement&nbsp;?</p>

          <p className="spacing-1">Bien cordialement,</p>

          <DocumentFooter />
        </div>
      </BailContext.Provider>
    </main>
  )
}
