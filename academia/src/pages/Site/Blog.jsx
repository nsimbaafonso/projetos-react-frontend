import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../assets/css/style.css";
import "../../assets/css/blog.css";
import blog1 from "../../assets/img/blog1.jpg";
import blog2 from "../../assets/img/blog2.jpg";
import blog3 from "../../assets/img/blog3.jpg";

export default function Blog() {
  return (
    <>
      {/*Helmet*/}
      <Helmet>
        <title>Blog | Academia Fitness</title>
      </Helmet>

      {/*Header*/}
      <Header />

      {/*Blog*/}
      <section className="banner">
        <div className="content">
          <h3>Nosso Blog</h3>
          <p>
            Dicas de treino, nutrição e motivação para você evoluir todos os
            dias.
          </p>
        </div>
      </section>

      <section className="section-search">
        <form action="" className="search-form">
          <input
            type="search"
            name="tbusca"
            id="search-box"
            placeholder="Busque aqui..."
            required
          />
          <button
            type="submit"
            className="fas fa-search"
            title="Pesquisar"
          ></button>
        </form>
      </section>

      <section className="blog" id="blog">
        <h1 className="heading">
          <span>Últimos</span> Posts
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
