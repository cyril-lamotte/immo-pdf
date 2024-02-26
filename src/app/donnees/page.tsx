"use client"

import React from 'react';
import { usePage } from '@/app/hooks/page.hook';
import Bubble from "@/app/components/Bubble/bubble"
import Loading from '@/app/components/Loading/Loading';
import { config } from '../types/Config';
import './donnees.scss';

export default function Dashboard() {
  const { bail } = usePage();

  // Test if bail is an empty object.
  if (Object.keys(bail).length === 0) {
    return <Loading />
  }

  // Get all keys from the config object.
  const keys = Object.keys(config) as (keyof typeof config)[];

  return (
    <article className="document">
      <h1>Toutes les données</h1>

      <table>
        <thead>
          <tr>
            <th>Données</th>
            <th>Valeur</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          { keys.map((key) => (
            <tr key={key}>
              <td>{config[key].label}</td>
              <td><Bubble item={key} type={config[key].type} /></td>
              <td>{config[key].desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  )
}
