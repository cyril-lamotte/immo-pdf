"use client"

import jwt from "jwt-simple";
import { FileCheck2, Link } from 'lucide-react';
import './print.scss';
import { useBailContext } from "@/app/contexts/BailContextProvider";

export default function Print() {
  const { bail, setBail, save } = useBailContext();

  function print() {
    window.print();
  }

  function copyLink() {
    const token: string = jwt.encode(bail, "98woAFhtg4rit3aojJRgifofjiawuSDFh3f8iw23hazsknjvISEBF");
    const url = `${window.location.origin}/?data=${token}`;
    navigator.clipboard.writeText(url);
    console.log('Link copied to clipboard', url);

  }

  return (
    <div className="toolbar hidden-print">
      <button type="button" className="im-btn" onClick={ print }><FileCheck2 /> Générer le PDF</button>
      <button type="button" className="im-btn" onClick={ copyLink }><Link /> Copier le lien avec les données</button>
    </div>
  )
}
