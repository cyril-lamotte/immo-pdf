"use client"

import React from 'react';
import jwt from "jwt-simple";
import { FileCheck2, Link2 } from 'lucide-react';
import './print.scss';
import { useBailContext } from "@/app/contexts/BailContextProvider";
import toast, { Toaster } from 'react-hot-toast';

export default function Print() {
  const { bail, setBail, save } = useBailContext();

  function print() {
    window.print();
  }

  function copyLink() {
    const token: string = jwt.encode(bail, "98woAFhtg4rit3aojJRgifofjiawuSDFh3f8iw23hazsknjvISEBF");
    const url = `${window.location.origin}/?data=${token}`;
    navigator.clipboard.writeText(url);
    toast.success('Le lien est copié !', {
      duration: 2000,
      position: 'top-right',
    });
  }

  return (
    <div className="toolbar hidden-print">
      <button type="button" className="im-btn" onClick={ print }><FileCheck2 /> Générer le PDF</button>
      <button type="button" className="im-btn" onClick={ copyLink }><Link2 /> Copier le lien avec les données</button>
      <Toaster />
    </div>
  )
}
