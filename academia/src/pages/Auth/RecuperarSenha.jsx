import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../assets/css/style.css";
import "../../assets/css/login.css";

export default function RecuperarSenha() {
  return (
    <>
      {/*Helmet*/}
      <Helmet>
        <title>Recuperar senha | Academia Fitness</title>
      </Helmet>
      <div className="body">
        <section class="login">
        <form action="" method="POST" class="login-form" autocomplete="off">
            <h3>Recuperar Senha</h3>
            <input type="email" name="email" placeholder="exemplo@gmail.com" class="box" required />

            <input type="submit" value="Enviar Link" class="btn" />
            <p>Já tenho uma conta <Link to="/auth/login">Entrar</Link></p>
        </form>
    </section>
      </div>
    </>
  );
}
