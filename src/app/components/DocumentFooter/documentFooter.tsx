export default function DocumentFooter() {
  return (
    <footer>
      <p className="signature">Le { new Date().toLocaleString('fr-FR', { day: 'numeric', month: 'long', year:"numeric"}) }</p>
    </footer>
  )
}
