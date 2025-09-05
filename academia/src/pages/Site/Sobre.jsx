import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SobreImg from "../../assets/img/sobre.jpg";
import "../../assets/css/style.css";
import "../../assets/css/sobre.css";

export default function Sobre() {
  return (
    <>
      {/*Helmet*/}
      <Helmet>
        <title>Sobre | Academia Fitness</title>
      </Helmet>

      {/*Header*/}
      <Header />

      {/*Sobre*/}
      <section className="banner">
        <div className="content">
          <h3>Sobre a Academia Fitness</h3>
          <p>
            Na Academia Fitness, oferecemos um ambiente moderno e motivador para
            você alcançar seus objetivos.
          </p>
        </div>
      </section>

      <section className="about">
        <h1 className="heading">
          Sobre <span>Nós</span>
        </h1>
        <div className="row">
          <div className="image">
            <img src={SobreImg} alt="Sobre nós" title="Sobre nós" />
          </div>

          <div className="content">
            <span>Bem-vindo a Academia Fitness</span>
            <h3>
              Desde 2025, a Stay Fitness tem uma missão: levar saúde, energia e
              resultados para onde você estiver.
            </h3>
            <p>
              Não somos apenas mais um ginásio. Nós levamos o treino até você,
              com soluções inteligentes e flexíveis. E acreditamos que cuidar do
              corpo é essencial para uma vida equilibrada.
            </p>
            <ul>
              <li>
                <i className="far fa-check-square"></i> Treino em empresas (Team
                Building) – leve bem-estar e disposição para a sua equipa
                durante o trabalho
              </li>
              <li>
                <i className="far fa-check-square"></i> Treino online – evolua de
                qualquer lugar com acompanhamento profissional
              </li>
              <li>
                <i className="far fa-check-square"></i> Treino outdoor – sinta a
                liberdade e a energia do ar livre
              </li>
              <li>
                <i className="far fa-check-square"></i> Treino em casa – transforme
                o seu espaço em um estúdio exclusivo
              </li>
            </ul>
            <p>
              Não espere segunda-feira para começar! O seu melhor momento é
              agora.
            </p>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <Footer />
    </>
  );
}
