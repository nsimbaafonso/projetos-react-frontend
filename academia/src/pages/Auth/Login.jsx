import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../assets/css/style.css";
import "../../assets/css/login.css";

export default function Login() {
  return (
    <>
      {/*Helmet*/}
      <Helmet>
        <title>Login | Academia Fitness</title>
      </Helmet>
      <div className="body">
        <section class="login">
          <form action="" method="POST" class="login-form" autocomplete="off">
            <h3>PAINEL ADMINISTRATIVO</h3>
            <input
              type="email"
              name="email"
              placeholder="exemplo@gmail.com"
              class="box"
              required
            />
            <input
              type="password"
              name="senha"
              placeholder="Sua Palavra-Pass"
              class="box"
              required
            />
            <div class="remember">
              <input type="checkbox" name="lembrar" id="lembrar" />
              <label for="lembrar">Lembrar de mim</label>
            </div>
            <input type="submit" value="Entrar" class="btn" />
            <p>
              Esqueceu a palavra-pass?{" "}
              <Link to="/auth/recuperar-senha">clica aqui</Link>
            </p>
            <p>
              Não tem uma conta? <Link to="/auth/cadastrar-se">Cria uma conta</Link>
            </p>
          </form>
        </section>
      </div>
    </>
  );
}
