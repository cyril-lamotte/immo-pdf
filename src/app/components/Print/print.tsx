"use client"

import './print.scss';

export default function Print() {

  function print() {
    window.print();
  }

  return (
    <div className="toolbar hidden-print">
      <button type="button" onClick={ print }>Générer le PDF</button>
    </div>
  )
}
