
type Props = {
  viewmode?: string,
}

export default function User(props: Props) {

  return (
    <div className="user">
      <p>Indivision LAMOTTE-LEBRUN</p>
      <p>SIRET&nbsp;: 845310028 00012</p>
      <address className="invoice-address">68 rue du Dr. Chabrun<br />53100 Mayenne</address>
    </div>
  )
}
