"use client"

export default function Navigation() {

  function print() {
    window.print();
  }

  return (
    <div className="nav">
      <ul>
        <li><a href="/revision-annuelle">Révision annuelle</a></li>
        <li><a href="/depot-de-garantie">Reçu du dépôt de garantie</a></li>
      </ul>

      <button type="button" onClick={ print }>Imprimer</button>
    </div>
  )
}
