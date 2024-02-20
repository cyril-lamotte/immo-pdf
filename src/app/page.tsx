"use client"

import { usePage } from './hooks/page.hook';
import Bubble from "./components/Bubble/bubble"
import Loading from './components/Loading/Loading';

export default function Dashboard() {
  const { bail, setBail } = usePage();

  // Test if bail is an empty object.
  if (Object.keys(bail).length === 0) {
    return <Loading />
  }

  return (
    <article className="document">
      <h1>Bonjour <Bubble item="owner_name" /></h1>
    </article>
  )
}
