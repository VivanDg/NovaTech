import "../styles/header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <div className="header-brand">

          <div className="logo">
            N
          </div>

          <div className="brand-divider"></div>

          <span className="brand-name">
            NovaPortal
            <span className="brand-highlight">
              // ConstruSoft
            </span>
          </span>

        </div>

        <div className="header-right">

          <div className="secure-status">
            <span className="secure-icon">🔒</span>
            Conexión segura TLS 1.3 / ISO 27001
          </div>

          <nav className="navigation">

            <a
              href="#acceso"
              className="nav-active"
            >
              Acceso
            </a>

            <a href="#verificacion">
              Verificación
            </a>

            <a href="#soporte">
              Soporte
            </a>

          </nav>

          <div className="language-selector">
            <span className="language-active">
              ES
            </span>

            <span>/</span>

            <button type="button">
              EN
            </button>
          </div>

          <div className="user-icon">
            👤
          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;