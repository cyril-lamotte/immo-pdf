import React from 'react';
import Signature from '../Signature/signature';

export default function DocumentFooter() {

  return (
    <footer>
      <div className="signature">
        <p className="signature__date">Le { new Date().toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) }</p>
        <Signature />
      </div>
    </footer>
  )
}
