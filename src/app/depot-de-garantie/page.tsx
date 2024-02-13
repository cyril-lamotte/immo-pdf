"use client"

import Bubble from "../components/Bubble/bubble"
import DocumentHeader from "../components/DocumentHeader/documentHeader"
import DocumentFooter from '../components/DocumentFooter/documentFooter';
import Navigation from '../components/Navigation/navigation';
import { BailContext } from '../contexts/BailContext';
import { useDocument } from '../hooks/document.hook';

export default function AnnualRent() {
  const { bail, setBail, handleClick } = useDocument();

  const title = 'Reçu dépôt de garantie';

  return (
    <main onClick={handleClick}>
      <Navigation />
      <BailContext.Provider value={{ bail, setBail }}>
        <div className="document">
          <DocumentHeader title={title} hide-tenant="true" />

          <p>Je soussigné <strong><Bubble item="owner_name" /></strong>, bailleur du bien
          situé à l&apos;adresse suivante&nbsp;:</p>

          <address><Bubble item="address" widget="textarea" /></address>

          <p>Atteste avoir reçu ce jour la somme de {' '}
            <strong><Bubble item="garantie" type="int" />&nbsp;€</strong> au
            titre de dépôt de garantie de <Bubble item="tenant_name" />.</p>

          <p>Ce dépôt de garantie sera conservé par le propriétaire pendant toute
            la durée de location et restitué sous deux mois en fonction de
            l&apos;état des lieux de sortie.</p>

          <p>À noter que celui-ci pourra être réduit d&apos;éventuels impayés et
            frais de remise en état selon la législation en vigeur.</p>

          <DocumentFooter />

        </div>
      </BailContext.Provider>
    </main>
  )
}
