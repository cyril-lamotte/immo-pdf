"use client"

import React from 'react';
import Bubble from "@/app/components/Bubble/bubble"
import Signature from '@/app/components/Signature/signature';
import DataSet from '@/app/components/DataSet/dataSet';
import { useDocument } from '@/app/hooks/document.hook';
import { getTotalIncome, getBailDate, getLocationDuration, getTaxeDeSejour } from "../../helpers/bail-helper";
import { formatDate } from '@/app/helpers/date';
import Toolbar from '@/app/components/Toolbar/toolbar';
import Section from '@/app/components/Section/section';

export default function Contrat() {
  const { bail, save } = useDocument();
  document.title = 'Contrat de location';
  const totalIncome = getTotalIncome(bail.income, bail.charges);
  const hasCaution = bail.caution;

  // Array of items displayed.
  const itemList = [
    'caution',
  ];

  const isLocationSaisonniere = bail.type == 'season';
  const isLocationVide = bail.type == 'empty';
  const isLocationMeublee = bail.type == 'meuble';
  const isLocationLongueDuree = isLocationVide || isLocationMeublee;

  const durationDays = getLocationDuration(bail.bail_date, bail.bail_end_date);

  let taxe_de_sejour = 0;
  if (bail.tenant_count && durationDays) {
    taxe_de_sejour = getTaxeDeSejour(bail.tenant_count, durationDays);
  }

  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    const bailClone = JSON.parse(JSON.stringify(bail));
    bailClone.caution = e.target.checked;
    save(bailClone);
  }

  // Modèle officiel
  // https://www.inc-conso.fr/sites/default/files/pdf/INC_FP105_contrat-type-logement-meuble.pdf

  return (
    <>
      <div className="sidebar hidden-print">
        <Toolbar />
        <DataSet itemList={itemList} />
      </div>

      <article className="document document-contract">
        <h1>Contrat de location <Bubble item="type" /></h1>

        <Section name="Désignation des parties">
          <h3>Le bailleur</h3>
          <p><Bubble item="owner_name" /> demeurant <Bubble item="owner_address" />.</p>

          <h3>Le locataire</h3>
          <p><Bubble item="tenant_name" /></p>
        </Section>

        <Section name="Objet du contrat">
          <p>Le présent contrat a pour objet la location d’un logement ainsi déterminé&nbsp;:</p>

          <h3>Consistance du logement</h3>
          <table>
            <tbody>
              <tr>
                <th scope="row">Adresse</th>
                <td><Bubble item="address" /></td>
              </tr>
              <tr>
                <th scope="row">Type d’habitat et régime juridique</th>
                <td>Immeuble collectif en copropriété</td>
              </tr>

              { isLocationLongueDuree && <>
              <tr>
                <th scope="row">Période de construction</th>
                <td>1980</td>
              </tr>
              </> }

              <tr>
                <th scope="row">Pièces principales</th>
                <td><Bubble item="description" /></td>
              </tr>
              <tr>
                <th scope="row">Surface habitable</th>
                <td><Bubble item="surface" />m<sup>2</sup></td>
              </tr>

              { isLocationLongueDuree && <>
                <tr>
                  <th scope="row">Place de stationnement</th>
                  <td>n&deg;&nbsp;242</td>
                </tr>
              </> }

              <tr>
                <th scope="row">Chauffage</th>
                <td><Bubble item="heating" /></td>
              </tr>

              <tr>
                <th scope="row">Eau chaude</th>
                <td><Bubble item="warm_water" /></td>
              </tr>

              <tr>
                <th scope="row">Locaux et équipements des parties communes</th>
                <td><Bubble item="common_equipment" /></td>
              </tr>
            </tbody>
          </table>

          { isLocationLongueDuree && <>
            <h3>Destination des locaux</h3>
            <p>Usage d’habitation.</p>
          </> }

        </Section>

        <div className="page-break"></div>

        <Section name="Date de prise d’effet et durée du contrat">
          <p>Date de prise d’effet du contrat&nbsp;: <strong><Bubble item="bail_date" label={ formatDate(bail.bail_date) } /></strong>.</p>

          { isLocationSaisonniere && <>
            <p>Date de fin de location&nbsp;: <strong><Bubble item="bail_end_date" label={ formatDate(bail.bail_end_date) } /></strong>.</p>
            <p>Durée de location et d&apos;occupation&nbsp;: <strong>{ durationDays }</strong>.</p>
            <p>Nombre de locataires&nbsp;: <strong><Bubble item="tenant_count"></Bubble></strong></p>
          </> }

          { isLocationLongueDuree && <>
          <p>Durée de location et d&apos;occupation&nbsp;: <strong><Bubble item="duration" /> mois</strong>.</p>

          <p>Les contrats de location de logements meublés sont reconduits tacitement
            à leur terme pour une durée d’un an et dans les mêmes conditions.
            Le locataire peut mettre fin au bail à tout moment, après avoir donné
            congé (en respectant un <strong>préavis d’1 mois</strong> à compter de
            la réception de la lettre recommandée avec accusé de réception).
            Le bailleur peut, quant à lui, mettre fin au bail à son échéance et
            après avoir donné congé (3 mois de préavis), soit pour reprendre le
            logement en vue de l’occuper lui-même ou une personne de sa famille,
            soit pour le vendre, soit pour un motif sérieux et légitime.</p>
          </> }
        </Section>

        <Section name="Conditions financières">
          <h3>Loyer</h3>

          { isLocationLongueDuree && <>
            <table>
              <thead>
                <tr>
                  <th>Montant du loyer initial</th>
                  <th>Trimestre de référence de l’IRL</th>
                  <th>Montant du loyer du précédent contrat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Bubble item="income" />&nbsp;&euro;</td>
                  <td><Bubble item="quarter" /><sup>{ bail.quarter == 1 ? 'er' : 'ème' }</sup> trimestre <Bubble item="irl_previous_year" /></td>
                  <td><Bubble item="previous_income" />&nbsp;&euro;</td>
                </tr>
              </tbody>
            </table>

            <h3>Charges</h3>
            <p>Les charges intègrent l’eau collective, l’ascenseur, entretien des espaces verts et parties communes.</p>

            <ul>
              <li>Modalité de règlement et montant des charges récupérables&nbsp;: <strong>Forfait de <Bubble item="charges" />&nbsp;&euro;</strong></li>
              <li>Le forfait des charges est révisable chaque année sur la base de l’IRL.</li>
            </ul>

          </> }

          { isLocationSaisonniere && <>
            <p>Le loyer est fixé à <strong><Bubble item="income" />&nbsp;&euro;</strong> pour la durée précisée ci-dessus.</p>
            <p>La taxe de séjour est incluse ({ durationDays } x { bail.tenant_count } x 0.80 = { taxe_de_sejour }&nbsp;&euro;).</p>
          </> }

          <h3>Modalités de paiement</h3>

          { isLocationLongueDuree && <>
            <table>
              <thead>
                <tr>
                  <th>Périodicité</th>
                  <th>Date de paiement</th>
                  <th>Montant total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mensuelle</td>
                  <td>Début de mois (avant le 10)</td>
                  <td>{ totalIncome }&nbsp;&euro; (Loyer <Bubble item="income" />&nbsp;&euro; + forfait de charges de <Bubble item="charges" />&nbsp;&euro;)</td>
                </tr>
              </tbody>
            </table>
          </> }

          { isLocationSaisonniere && <>
            <p>Un premier versement d&apos;arrhes d&apos;un montant de <strong><Bubble item="arrhes" />&nbsp;&euro;</strong> est demandé au moment de la reservation.</p>
            <p>Le versement du complément, soit <strong>{ (bail.income && bail.arrhes) && bail.income - bail.arrhes}&nbsp;&euro;</strong> est demandé minimum <strong>7</strong> jours avant l&apos;arrivée.</p>
          </> }
        </Section>

        { isLocationLongueDuree && <>
          <Section name="Travaux">
            <p>Montant des travaux postérieurs au dernier contrat&nbsp;: <Bubble item="amount_works" />&nbsp;€</p>
          </Section>
        </> }

        <Section name="Dépôt de garantie">
          { isLocationLongueDuree && <>
            <p>Le dépôt de garantie est fixé à <Bubble item="garantie" />&nbsp;€ (2 mois de loyer hors charges maximum).</p>
          </> }

          { isLocationSaisonniere && <>
            <p>Un dépôt de garantie fixé à <Bubble item="garantie" />&nbsp;&euro; est à donner par chèque ou virement à l&apos;arrivée.</p>
            <p>Le dépôt de garantie sera restitué à la fin du séjour.</p>
          </> }
        </Section>

        { isLocationLongueDuree && <>
          <div className="page-break"></div>

          <Section name="Clause résolutoire">
            <div className="small-text">
              <p>Il est expressément convenu qu’à défaut de paiement au terme convenu de
                tout ou partie du loyer, des charges, du dépôt de garantie, et UN MOIS
                après un commandement de payer demeuré infructueux, la présente location
                sera résiliée de plein droit si bon semble au bailleur, sans aucune
                formalité judiciaire.</p>

              <p>Un commandement visant le défaut d’assurance des risques locatifs aura
                les mêmes effets passé le délai d’UN MOIS.</p>

              <p>L’occupant déchu de ses droits locatifs qui se refusera à restituer les
                lieux pourra être expulsé sur simple ordonnance du juge des référés,
                exécutoire par provision nonobstant appel.</p>
            </div>
          </Section>

          <Section name="Autres conditions particulières">
            <div className="small-text">
              <p><strong>1) Abandon du domicile ou décès du locataire</strong><br />
              La location est résiliée de plein droit par l’abandon du domicile du locataire ou son décès.</p>

              <p><strong>2) Obligations du locataire</strong><br />
                Le locataire est obligé&nbsp;:<br />
                a) de payer le loyer et les charges récupérables aux termes convenus ; en cas de pluralité de locataires, ceux-ci sont tenus solidairement de toutes les obligations du bail ;<br />
                b) d’user paisiblement des locaux loués en respectant leur destination ;<br />
                c) de répondre des dégradations ou des pertes survenues pendant le cours du bail ;<br />
                d) de prendre à sa charge l’entretien courant du logement, des meubles et des équipements, les menues réparations et l’ensemble des réparations incombant au locataire telles que le ramonage des cheminées et conduits de fumée, l’entretien de la chaudière et du chauffe-eau, l’entretien des canalisations, etc.<br />
                e) de ne faire aucun changement de distribution ou transformation sans l’accord préalable et écrit du propriétaire sous peine de remise en état des locaux aux frais du locataire ou de résiliation anticipée du bail suivant la gravité de l’infraction ;<br />
                f) de ne pouvoir ni sous-louer ni céder ni prêter les locaux, même temporairement, en totalité ou en partie.<br />
                g) d’informer immédiatement le propriétaire ou son représentant de tout changement d’état civil concernant les occupants, de tous désordres, dégradations, sinistres survenant dans les lieux loués ;<br />
                h) de laisser exécuter sans indemnité tous les travaux nécessaires à la remise en état ou à l’amélioration des lieux loués et des parties communes ;<br />
                i) en cas de vente ou de nouvelle location, de laisser visiter le logement deux heures par jour pendant les jours ouvrables ;<br />
                j) de respecter le règlement de l’immeuble, de la copropriété ou du lotissement, notamment en ce qui concerne la destination de l’immeuble, la jouissance et l’usage des parties privatives et communes, ainsi que les décisions de la copropriété concernant l’usage de l’immeuble ;<br />
                k) de l’assurer convenablement contre les risques locatifs, l’incendie, les explosions, les dégâts des eaux, étant clairement entendu que faute de ce faire à la remise des clés ou de justifier chaque année de la poursuite du contrat d’assurance, le locataire s’expose à l’application de la clause résolutoire du bail, passé le délai d’UN MOIS suivant un commandement demeuré infructueux ;<br />
                l) de renoncer à tous les recours contre le bailleur en cas de vol commis dans les lieux loués, interruption du service de l’eau, du gaz, de l’électricité, troubles de voisinage ;<br />
                m) de satisfaire à toutes les charges de ville ou de police auxquelles les locataires sont habituellement tenus.
              </p>

              <p><strong>3) Régime du loyer charges réelles en sus</strong><br />
                Le cas échéant, le locataire est tenu de rembourser au bailleur les charges dites “récupérables” dont la liste est fixée par décret en Conseil d’État.<br />
                Les charges sont appelées en même temps que le loyer, suivant une provision réajustée chaque année et une régularisation annuelle.<br />
                Un mois avant la régularisation annuelle, le bailleur est tenu d’adresser au locataire un décompte par nature de charges. Il est également tenu de mettre les pièces justificatives des charges à sa disposition.
              </p>

              <p><strong>4) Clause pénale</strong><br />
                En cas de non-paiement du loyer ou de ses accessoires et dès le premier acte d’huissier, le locataire devra payer en sus des frais de recouvrement et sans préjudice de l’application de l’article 700 du Nouveau Code de Procédure Civile, une indemnité égale à dix pour cent de la totalité des sommes dues au bailleur.<br />
                En cas d’occupation des lieux après la cessation du bail, il sera dû par l’occupant, jusqu’à son expulsion, une indemnité égale au double du loyer et des charges contractuelles.<br />
                En cas de résiliation du bail aux torts du locataire, le dépôt de garantie restera acquis au propriétaire à titre d’indemnité conventionnelle.
              </p>

              <p><strong>5) État des lieux</strong><br />
                À défaut d’état d’entrée ou de sortie des lieux établi volontairement et contradictoirement, la partie la plus diligente est en droit d’en faire dresser un par huissier, à frais partagés.<br />
                À défaut d’état des lieux, la présomption de l’article 1731 du Code Civil ne peut être invoquée par celle des parties qui a fait obstacle à son établissement.
              </p>

              <p><strong>6) Meubles et équipements</strong><br />
                Des meubles, équipements et accessoires sont mis à disposition du locataire. Un inventaire est établi et joint au présent contrat.<br />
              </p>
            </div>
          </Section>
        </> }

        { isLocationLongueDuree && <div className="page-break"></div> }

        <Section name="Annexes">
          <p>Sont annexées et jointes au contrat de location les pièces suivantes&nbsp;:</p>

          <ul>
            <li>Un état des lieux établi lors de la remise des clés.</li>
            { isLocationLongueDuree && <li>Le dossier des diagnostics techniques (numérique).</li> }
            { hasCaution && <li>Le cas échéant, un acte de cautionnement.</li> }
            { isLocationLongueDuree && <li>Le cas échéant, un règlement de copropriété (numérique).</li> }
            <li>2 jeux de clés.</li>
          </ul>
        </Section>

        <Section name="Signatures">
          <p>Fait à <Bubble item="city" /> le <strong><Bubble item="today" label={ formatDate(bail.today) } /></strong> pour chaque signataire.</p>

          <div className="table-signatures">
            <div>
              <p>Le bailleur</p>
              <Signature />
            </div>

            <div>
              <p>Le locataire</p>
            </div>

            { hasCaution && <div><p>La caution</p></div> }

          </div>
        </Section>

      </article>
    </>
  )
}
