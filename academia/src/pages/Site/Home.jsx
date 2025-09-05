import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeSlider from "../../components/HomeSlider";
import ReviewSlider from "../../components/ReviewSlider";
import service1 from "../../assets/img/service1.jpg";
import service2 from "../../assets/img/service2.jpg";
import service3 from "../../assets/img/service3.jpg";
import team1 from "../../assets/img/team1.jpg";
import team2 from "../../assets/img/team2.jpg";
import team3 from "../../assets/img/team3.jpg";
import team4 from "../../assets/img/team4.jpg";
import blog1 from "../../assets/img/blog1.jpg";
import blog2 from "../../assets/img/blog2.jpg";
import blog3 from "../../assets/img/blog3.jpg";
import "../../assets/css/style.css";

export default function Home() {
  return (
    <>
      {/*Helmet*/}
      <Helmet>
        <title>Academia Fitness</title>
        <meta
          name="description"
          content="Bem-vindo à página inicial da Academia Fitness."
        />
      </Helmet>

      {/*Header*/}
      <Header />

      {/*HomeSlider*/}
      <HomeSlider />

      {/*feature*/}
      <section className="feature" id="feature">
        <div className="box-container">
          <div className="box">
            <i className="fas fa-heart"></i>
            <h2>Pista Saudável</h2>
            <p>
              Caminhe ou corra com segurança e melhore seu condicionamento
              físico.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-dumbbell"></i>
            <h2>Plano de Trabalho</h2>
            <p>
              Treinos personalizados para alcançar seus objetivos mais rápido.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-apple-alt"></i>
            <h2>Guia de Nutrição</h2>
            <p>
              Dicas simples de alimentação para potencializar seus resultados.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-bed"></i>
            <h2>Descanso & Recuperação</h2>
            <p>
              Pausas estratégicas para melhorar seu desempenho e evitar lesões.
            </p>
          </div>
        </div>
      </section>

      {/*services*/}
      <section className="services" id="servicos">
        <h1 className="heading">
          Nossos <span>Serviços</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={service1} alt="Serviço 1" />
            <div className="content">
              <h3>Stay Fitness</h3>
              <p>Ginásio - Treinos personalizados, planos de treino, etc.</p>
              <Link to="#" className="btn">
                Leia Mais
              </Link>
            </div>
          </div>
          <div className="box">
            <img src={service2} alt="Serviço 2" />
            <div className="content">
              <h3>Stay Fitness</h3>
              <p>Ginásio - Treinos personalizados, planos de treino, etc.</p>
              <Link to="#" className="btn">
                Leia Mais
              </Link>
            </div>
          </div>
          <div className="box">
            <img src={service3} alt="Serviço 3" />
            <div className="content">
              <h3>Stay Fitness</h3>
              <p>Ginásio - Treinos personalizados, planos de treino, etc.</p>
              <Link to="#" className="btn">
                Leia Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*pricing*/}
      <section className="pricing" id="pacotes">
        <h1 className="heading">
          <span>Nossos</span> Pacotes
        </h1>
        <p className="heading-p">
          Treine com método. Evolua com acompanhamento.
        </p>

        <div className="box-container">
          <div className="box">
            <h3>Pacote Iniciante</h3>
            <h4>120.000Kz</h4>
            <ul>
              <li>2x/semana</li>
              <li>
                <i className="fas fa-check"></i> 2 sessões de treino
                personalizado por semana
              </li>
              <li>
                <i className="fas fa-check"></i> Avaliação física inicial
              </li>
              <li>
                <i className="fas fa-check"></i> Aulas Padrões de Fitness
              </li>
              <li>
                <i className="fas fa-check"></i> Guia alimentar básico
              </li>
              <li>
                <i className="fas fa-check"></i> Dicas semanais de hábitos
                saudáveis
              </li>
            </ul>
            <Link to="/agendar" className="btn">
              Agendar Agora
            </Link>
          </div>

          <div className="box">
            <h3>Pacote Bronze </h3>
            <h4>160.000Kz</h4>
            <ul>
              <li>3x/semana</li>
              <li>
                <i className="fas fa-check"></i> 3 sessões de treino
                personalizado por semana
              </li>
              <li>
                <i className="fas fa-check"></i> Avaliação física completa
              </li>
              <li>
                <i className="fas fa-check"></i> Guia alimentar personalizado
              </li>
              <li>
                <i className="fas fa-check"></i> Acompanhamento por WhatsApp +
                ajustes semanais
              </li>
              <li>
                <i className="fas fa-check"></i> Acesso aos desafios mensais
                Academia Fitness
              </li>
              <li>
                <i className="fas fa-check"></i> Sessão bônus de mobilidade ou
                alongamento mensal
              </li>
            </ul>
            <Link to="/agendar" className="btn">
              Agendar Agora
            </Link>
          </div>

          <div className="box">
            <h3>Pacote Prata</h3>
            <h4>180.000Kz</h4>
            <ul>
              <li>4x/semana</li>
              <li>
                <i className="fas fa-check"></i> 4 sessões de treino
                personalizado por semana
              </li>
              <li>
                <i className="fas fa-check"></i> Avaliação física com
                reavaliação mensal
              </li>
              <li>
                <i className="fas fa-check"></i> Guia alimentar adaptado por
                objetivo
              </li>
              <li>
                <i className="fas fa-check"></i> Acompanhamento semanal com
                feedback
              </li>
              <li>
                <i className="fas fa-check"></i> Acesso aos desafios mensais +
                grupo motivacional
              </li>
              <li>
                <i className="fas fa-check"></i> Sessão bônus de mobilidade ou
                massagem relaxante mensal
              </li>
              <li>
                <i className="fas fa-check"></i> Presente Academia Fitness
                (camiseta ou shaker)
              </li>
            </ul>
            <Link to="/agendar" className="btn">
              Agendar Agora
            </Link>
          </div>

          <div className="box">
            <h3>Pacote Ouro</h3>
            <h4>250.000Kz</h4>
            <ul>
              <li>5x/semana</li>
              <li>
                <i className="fas fa-check"></i> 5 sessões de treino
                personalizado por semana
              </li>
              <li>
                <i className="fas fa-check"></i> Avaliação física + reavaliação
                mensal
              </li>
              <li>
                <i className="fas fa-check"></i> Guia alimentar + plano de
                suplementação básica
              </li>
              <li>
                <i className="fas fa-check"></i> Acompanhamento direto com coach
                Thalles
              </li>
              <li>
                <i className="fas fa-check"></i> Acesso VIP aos desafios e
                workshops exclusivos
              </li>
              <li>
                <i className="fas fa-check"></i> Sessão mensal de relaxamento ou
                recuperação muscular
              </li>
              <li>
                <i className="fas fa-check"></i> Camiseta oficial Stay Fitness +
                brinde especial
              </li>
              <li>
                <i className="fas fa-check"></i> Acesso gratuito Link 1 aula
                especial por mês (Pilates ou Outdoor)
              </li>
            </ul>
            <Link to="/agendar" className="btn">
              Agendar Agora
            </Link>
          </div>
        </div>
      </section>

      {/*parallax*/}
      <section className="parallax">
        <div className="content">
          <h3>TRANSFORME SEU CORPO EM FITNESS</h3>
          <p>
            Investir em uma rotina de fitness de qualidade pode trazer retornos
            significativos para o seu corpo, aumentando sua qualidade de vida e
            melhorar o seu bem estar.
          </p>
          <Link to="/agendar" className="btn">
            AGENDAR AGORA
          </Link>
        </div>
      </section>

      {/*review*/}
      <section className="review" id="review">
        <h1 className="heading">
          <span>Depoimentos</span> De Alunos
        </h1>
        <ReviewSlider />
      </section>

      {/*team*/}
      <section className="team" id="team">
        <h1 className="heading">
          <span>Nossa</span> Equipa
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={team1} alt="Team 1" />
            </div>
            <div className="content">
              <h3>Teo</h3>
              <h4>CEO</h4>
              <div className="share">
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-facebook-f"
                  rel="noopener noreferrer"
                ></Link>
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-instagram"
                  rel="noopener noreferrer"
                ></Link>
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-twitter"
                  rel="noopener noreferrer"
                ></Link>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={team2} alt="Team 2" />
            </div>
            <div className="content">
              <h3>Teo</h3>
              <h4>CEO</h4>
              <div className="share">
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-facebook-f"
                  rel="noopener noreferrer"
                ></Link>
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-instagram"
                  rel="noopener noreferrer"
                ></Link>
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-twitter"
                  rel="noopener noreferrer"
                ></Link>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={team3} alt="Team 3" />
            </div>
            <div className="content">
              <h3>Teo</h3>
              <h4>CEO</h4>
              <div className="share">
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-facebook-f"
                  rel="noopener noreferrer"
                ></Link>
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-instagram"
                  rel="noopener noreferrer"
                ></Link>
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-twitter"
                  rel="noopener noreferrer"
                ></Link>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={team4} alt="Team 4" />
            </div>
            <div className="content">
              <h3>Teo</h3>
              <h4>CEO</h4>
              <div className="share">
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-facebook-f"
                  rel="noopener noreferrer"
                ></Link>
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-instagram"
                  rel="noopener noreferrer"
                ></Link>
                <Link
                  to="#"
                  target="_blank"
                  className="fab fa-twitter"
                  rel="noopener noreferrer"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*blog*/}
      <section className="blog" id="blog">
        <h1 className="heading">
          <span>Nosso</span> Blog
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={blog1} alt="Blog 1" />
            </div>
            <div className="content">
              <h3>Desbloqueia Seu Potencial Fitness Agora</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="#" className="btn">
                Leia mais
              </Link>
              <div className="icons">
                <Link to="#">
                  <i className="fas fa-calendar"></i> Dia 2 de Fevereiro de 2024
                </Link>
                <Link to="#">
                  <i className="fas fa-user"></i> Por Admin
                </Link>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog2} alt="Blog 2" />
            </div>
            <div className="content">
              <h3>Desbloqueia Seu Potencial Fitness Agora</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="#" className="btn">
                Leia mais
              </Link>
              <div className="icons">
                <Link to="#">
                  <i className="fas fa-calendar"></i> Dia 2 de Fevereiro de 2024
                </Link>
                <Link to="#">
                  <i className="fas fa-user"></i> Por Admin
                </Link>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog3} alt="Blog 3" />
            </div>
            <div className="content">
              <h3>Desbloqueia Seu Potencial Fitness Agora</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="#" className="btn">
                Leia mais
              </Link>
              <div className="icons">
                <Link to="#">
                  <i className="fas fa-calendar"></i> Dia 2 de Fevereiro de 2024
                </Link>
                <Link to="#">
                  <i className="fas fa-user"></i> Por Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <Footer />
    </>
  );
}
