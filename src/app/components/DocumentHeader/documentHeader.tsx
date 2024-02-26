import React from 'react';
import Bubble from '../Bubble/bubble';

type Props = {
  title: string,
  'hide-tenant'?: string,
}

export default function DocumentHeader(props: Props) {
  return (
    <header>
      <div className="header-layout">

        { !props['hide-tenant'] &&
          <div className="recipient">
            <p className="name">
              <Bubble item="tenant_name" /> <em>(Locataire)</em>
            </p>
            <address><Bubble item="tenant_address" /></address>
          </div>
        }

        <div className="sender">
          <p className="name">
            <Bubble item="owner_name" /> <em>(Bailleur)</em>
          </p>
          <address><Bubble item="owner_address" /></address>
        </div>
      </div>

      <div className="object">
        <p>Objet&nbsp;: <strong>{ props.title }</strong></p>
      </div>

    </header>
  )
}
