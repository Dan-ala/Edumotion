const mainUrl = "http://localhost:5173/"
const c = "/cursos"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href={mainUrl}>Edumotion</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={c}>Cursos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/testimonios">Testimonios</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/contacto">Contáctanos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Header