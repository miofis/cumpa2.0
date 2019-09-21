import Link from 'next/link'
import '../styles/styles.sass'

const Header = () => (
  <div className="navbar">

    <div className="navbar-brand">
      <Link href="/">
        <a className="navbar-item is-size-4">Cumpa.FIT</a>
      </Link>
    </div>
    <div className="navbar-menu">

      <div className="navbar-end">
        <Link href="#">
          <a className="navbar-item">¿Gimnasio?</a>
        </Link>

        <Link href="#">
          <a className="navbar-item">¿Amigos? Invita!</a>
        </Link>

        <Link href="#">
          <a className="navbar-item">Iniciar sesion</a>
        </Link>

        <Link href="#">
          <a className="navbar-item">Registrar</a>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
