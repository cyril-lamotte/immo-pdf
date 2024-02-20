import { Loader2 } from 'lucide-react';
import './loading.scss';

export default function Loading() {
  return (
    <div className="document">
      <div className="loading">
        <p><Loader2 /> Chargement des données&hellip;</p>
      </div>
    </div>
  )
}
