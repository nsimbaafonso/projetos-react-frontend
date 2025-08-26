import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./../assets/css/style.css";

export default function Home() {
  return (
    <>
      {/*Helmet*/}
      <Helmet>
        <title>Restaurante Sabor</title>
        <meta
          name="description"
          content="Bem-vindo à página inicial do Restaurante Sabor."
        />
      </Helmet>

      {/*Header*/}
      <Header />

      {/*Content*/}
      <section
        id="inicio"
        className="hero d-flex flex-column justify-content-center align-items-center mt-5 pt-5"
      >
        <div className="content" data-aos="fade-up">
          <h1>Bem-vindo ao Sabor & Arte</h1>
          <p>Uma experiência gastronômica inesquecível</p>
          <a href="#cardapio" className="btn btn-warning btn-lg mt-3">
            Ver Cardápio
          </a>
        </div>
      </section>

      {/*Footer*/}
      <Footer />
    </>
  );
}
