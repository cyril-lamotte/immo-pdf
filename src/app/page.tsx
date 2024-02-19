"use client"

import { usePage } from './hooks/page.hook';
import Bubble from "./components/Bubble/bubble"

export default function Home() {
  const { bail, setBail } = usePage();

  return (
    <article className="document">
      <h1>Bonjour <Bubble item="owner_name" /></h1>
    </article>
  )
}
