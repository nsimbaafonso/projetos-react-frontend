import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../assets/css/style.css";
import "../../assets/css/login.css";

export default function CadastrarSe() {
  return (
    <>
      {/*Helmet*/}
      <Helmet>
        <title>Cadastrar-se | Academia Fitness</title>
      </Helmet>

      <div className="body">
        <section class="login">
          <form action="" method="POST" class="login-form" autocomplete="off">
            <h3>Cadastrar-se</h3>
            <input
              type="nome"
              name="nome"
              placeholder="Seu nome"
              class="box"
              required
            />
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
              placeholder="Sua Senha"
              class="box"
              required
            />

            <input type="submit" value="Cadastrar" class="btn" />
            <p>
              Já tenho uma conta <Link to="/auth/login">Entrar</Link>
            </p>
          </form>
        </section>
      </div>
    </>
  );
}
