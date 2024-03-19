"use client"

import React from 'react';
import Bubble from "../../components/Bubble/bubble"
import DocumentHeader from "../../components/DocumentHeader/documentHeader"
import DocumentFooter from '../../components/DocumentFooter/documentFooter';
import { useDocument } from '../../hooks/document.hook';
import { formatDate } from '@/app/(client)/helpers/date';
import Toolbar from '@/app/(client)/components/Toolbar/toolbar';
import Section from '@/app/(client)/components/Section/section';
import { Resend } from 'resend';

export default function DepotDeGarantie() {
  const { bail, setBail, save } = useDocument();
  const title = 'Quittance de loyer';

  async function sendEmail(e: any) {
    e.preventDefault();

    // Send API key from env
    // console.log('resend', process.env.NEXT_PUBLIC_RESEND_API_KEY);
    // const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'lamotte.cyril@gmail.com',
    //   subject: 'Hello World XXX',
    //   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    // });
  }

  return (
    <>
      <div className="sidebar hidden-print">
        <Toolbar />

        <button type="button" onClick={sendEmail}>Envoyer email</button>


      </div>

      <article className="document document-contract">
        <DocumentHeader title={title} hide-tenant="true" />

        <Section name="Adresse de la location">
          <Bubble item="address" />
        </Section>

        <Section name="Déclaration">
          <p>Je soussigné <strong><Bubble item="owner_name" /></strong>,
          propriétaire du logement désigné ci-dessus, déclare avoir reçu de
          <Bubble item="tenant_name" /> la somme de <strong><Bubble item="quittance_amount" /> &euro;</strong>, au titre du paiement du
          loyer et des charges pour la période de location du&nbsp;
          <strong><Bubble item="quittance_start_date" label={ formatDate(bail.quittance_start_date) } /></strong> au
          <strong><Bubble item="quittance_end_date" label={ formatDate(bail.quittance_end_date) } /></strong> et lui en donne quittance, sous réserve de tous mes droits.</p>
        </Section>

        <DocumentFooter />
      </article>
    </>
  )
}
