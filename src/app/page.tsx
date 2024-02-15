"use client"

import { usePage } from './hooks/page.hook';

export default function Home() {
  const { bail, setBail } = usePage();

  return (
    <article className="document">
      <h1>Bonjour { bail.owner_name }</h1>
    </article>
  )
}
