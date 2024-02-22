import React from 'react';
import SignatureCanvas from 'react-signature-canvas'
import { XCircle } from 'lucide-react';

export default function DocumentFooter() {

  let sigCanvas: any = {};

  const clearSignature = () => {
    sigCanvas.clear();
  }

  return (
    <footer>
      <div className="signature">
        <p className="signature__date">Le { new Date().toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) }</p>
        <div className="signature__block">
          <SignatureCanvas ref={(ref) => { sigCanvas = ref }} penColor="black" canvasProps={{width: 300, height: 100, className: 'signature__canvas'}} />
          <button type="button" className="im-btn signature__clear" onClick={clearSignature}><XCircle />Effacer la signature</button>
        </div>
      </div>
    </footer>
  )
}
