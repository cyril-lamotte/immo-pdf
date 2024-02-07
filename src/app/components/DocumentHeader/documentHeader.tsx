import Bubble from '../Bubble/bubble';

export default function DocumentHeader({ title }: { title: string }) {
  return (
    <header>
      <div className="header-layout">
        <div className="recipient">
          <p className="name">
            <Bubble item="tenant_name" /> <em>(Locataire)</em>
          </p>
          <address><Bubble item="tenant_address" widget="textarea" /></address>
        </div>

        <div className="sender">
          <p className="name">
            <Bubble item="owner_name" /> <em>(Bailleur)</em>
          </p>
          <address><Bubble item="owner_address" widget="textarea" /></address>
        </div>
      </div>

      <div className="object">
        <p>Objet&nbsp;: <strong>{ title }</strong></p>
      </div>

    </header>
  )
}
