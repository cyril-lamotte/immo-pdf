"use client"

import React from 'react';
import Bubble from "../../components/Bubble/bubble"
import DocumentHeader from "../../components/DocumentHeader/documentHeader"
import DocumentFooter from '../../components/DocumentFooter/documentFooter';
import { useDocument } from '../../hooks/document.hook';
import { formatDate } from '@/app/helpers/date';

export default function DepotDeGarantie() {
  const { bail, setBail, save } = useDocument();
  const title = 'Quittance de loyer';

  return (
    <article className="document document-contract">
      <DocumentHeader title={title} hide-tenant="true" />

      <h2>Adresse de la location</h2>
      <Bubble item="address" />

      <h2>Déclaration</h2>

      <p>Je soussigné <strong><Bubble item="owner_name" /></strong>,
      propriétaire du logement désigné ci-dessus, déclare avoir reçu de
      <Bubble item="tenant_name" /> la somme de <strong><Bubble item="quittance_amount" /> &euro;</strong>, au titre du paiement du
      loyer et des charges pour la période de location du&nbsp;
      <strong><Bubble item="quittance_start_date" label={ formatDate(bail.quittance_start_date) } /></strong> au
      <strong><Bubble item="quittance_end_date" label={ formatDate(bail.quittance_end_date) } /></strong> et lui en donne quittance, sous réserve de tous mes droits.</p>

      <DocumentFooter />
    </article>
  )
}
