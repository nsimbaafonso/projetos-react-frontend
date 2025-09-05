import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);

  // Fechar menu e login ao rolar a tela
  useEffect(() => {
    const handleScroll = () => {
      setMenuActive(false);
      setLoginActive(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <i className="fas fa-heart"></i> Academia
        </Link>

        <nav className={`navbar ${menuActive ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <a href="/#servicos">Serviços</a>
          <Link to="/agendar">Agendar</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        <div className="icons">
          <div
            className={`fas fa-bars ${menuActive ? "fa-times" : ""}`}
            id="menu"
            onClick={() => {
              setMenuActive(!menuActive);
              setLoginActive(false);
            }}
          ></div>
          <div
            className="fas fa-user"
            id="login-btn"
            onClick={() => {
              setLoginActive(!loginActive);
              setMenuActive(false);
            }}
          ></div>
        </div>

        <form
          action=""
          method="POST"
          className={`login-form ${loginActive ? "active" : ""}`}
          autoComplete="off"
        >
          <h3>Login Form</h3>
          <input
            type="email"
            name="email"
            placeholder="exemplo@gmail.com"
            className="box"
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Sua Palavra-Pass"
            className="box"
            required
          />
          <div className="remember">
            <input type="checkbox" name="lembrar" id="lembrar" />
            <label htmlFor="lembrar">Lembrar de mim</label>
          </div>
          <input type="submit" value="Entrar" className="btn" />
          <p>
            Esqueceu a palavra-pass?{" "}
            <Link to="recuperar-senha.html">clica aqui</Link>
          </p>
          <p>
            Não tem uma conta? <Link to="/cadastrar-se">Cria uma conta</Link>
          </p>
        </form>
      </header>
    </>
  );
}
