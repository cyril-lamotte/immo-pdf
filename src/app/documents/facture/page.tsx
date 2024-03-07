"use client"

import React from 'react';
import User from "../../components/User/user";
import './invoice.scss';
import Bubble from '@/app/components/Bubble/bubble';
import { formatDate } from '@/app/helpers/date';
import { useDocument } from '@/app/hooks/document.hook';

export default function Facture() {
  const { bail, setBail, save } = useDocument();

  return (
    <article className="document">

      <div className="invoice-layout">

        <header className="invoice-header">
          <h1>Facture</h1>
          <p>N&deg; de facture&nbsp;: <Bubble item="invoice_number" /></p>
          <p>Date&nbsp;: <Bubble item="invoice_date" widget="date" label={ formatDate(bail.invoice_date) } /></p>
        </header>

        <div className="invoice-addresses">
          <div className="invoice-address-item">

            <h2>Émetteur</h2>

            <User viewmode="invoice" />

          </div>

          <div className="invoice-address-item">

            <h2>Destinataire</h2>

            <address className="invoice-address">
              SOLDE GmbH<br />
              Dorfwiese 22<br />
              42389 Wuppertal<br />
              UST-ID: DE353548701<br />
            </address>

          </div>
        </div>

        <div className="invoice-content">

          <table className="invoice-table">
            <caption>Location d&apos;un appartement</caption>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantité</th>
                <th>Prix unitaire</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>Nuitée(s) du 4 au 6 février</td>
                <td>2</td>
                <td></td>
                <td className="invoice-number">130,72&nbsp;&euro;</td>
              </tr>

              <tr>
                <td>Nuitée(s) du 6 au 7 février</td>
                <td>1</td>
                <td></td>
                <td className="invoice-number">66,36&nbsp;&euro;</td>
              </tr>

              <tr>
                <td colSpan={3} className="invoice-total">Total</td>
                <td className="invoice-number">197.08&nbsp;&euro;</td>
              </tr>

            </tbody>
          </table>

        </div>

        <p>Merci de votre confiance,</p>
        <p>Cordialement,</p>

      </div>

    </article>
  )
}
