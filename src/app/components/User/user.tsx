import React from 'react';
import Bubble from '../Bubble/bubble';

type Props = {
  viewmode?: string,
}

export default function User(props: Props) {

  return (
    <div className="user">
      <p><Bubble item="owner_company_name" /></p>
      <p>SIRET&nbsp;: <Bubble item="owner_siret" /></p>
      <address className="invoice-address"><Bubble item="owner_company_address" /></address>
    </div>
  )
}
