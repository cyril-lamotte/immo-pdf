import React, { useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas'
import { XCircle, CheckCircle } from 'lucide-react';
import { useBailContext } from '@/app/contexts/BailContextProvider';
import toast from 'react-hot-toast';

export default function Signature() {
  const { bail, save } = useBailContext();

  let sigCanvas: any = {};

  const clearSignature = () => {
    sigCanvas.clear();
  }

  const saveSignature = () => {
    save({ ...bail, signature: sigCanvas.toDataURL('image/png', 1) });
    console.log(sigCanvas.toDataURL('image/png', 1));
    toast.success('Le signature est enregistrée !', {
      duration: 2000,
      position: 'top-right',
    });
  }

  useEffect(() => {
    if (bail.signature) {
      sigCanvas.fromDataURL(bail.signature, { width: 300, height: 100 });
    }
  });

  return (
    <div className="signature__block">
      <SignatureCanvas ref={(ref) => { sigCanvas = ref }} penColor="black" canvasProps={{width: 300, height: 100, className: 'signature__canvas'}} />
      <div className="signature__tools">
        <button type="button" className="im-btn signature__clear" onClick={clearSignature}><XCircle />Effacer</button>
        <button type="button" className="im-btn signature__save" onClick={saveSignature}><CheckCircle />Enregistrer</button>
      </div>
    </div>
  )
}
