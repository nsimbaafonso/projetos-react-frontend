import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold text-warning" to="/">
            <i className="fas fa-utensils"></i> Restaurante Sabor
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#sobre">
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#reservas">
                  Reservas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#depoimentos">
                  Depoimentos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#localizacao">
                  Localização
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#contato">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
