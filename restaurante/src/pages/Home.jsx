import { Helmet } from "react-helmet";
import { formatPrice } from "../utils/formarPrice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sobreImg from "../assets/img/sobre.jpg";
import cardapios from "../components/DadosCardapio"
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
        id="home"
        className="hero d-flex flex-column justify-content-center align-items-center mt-5 pt-5"
      >
        <div className="content p-2">
          <h1>Bem-vindo ao Sabor & Arte</h1>
          <p>Uma experiência gastronômica inesquecível</p>
          <a href="#cardapio" className="btn btn-warning btn-lg mt-3">
            Ver Cardápio
          </a>
        </div>
      </section>

      <section id="sobre">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <img src={sobreImg} alt="Sobre o restaurante sabor" className="img-fluid rounded" />
          </div>
          <div className="col-12 col-md-6" >
            <h2>Sobre o Restaurante <span className="text-warning">Sabor</span></h2>
            <p className="lead">
              Somos apaixonados por gastronomia e oferecemos pratos feitos com ingredientes frescos e muito carinho.
              Nosso ambiente foi pensado para proporcionar conforto, boas memórias e experiências únicas.
            </p>
            <a href="https://wa.me/244923456789?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
              target="_blank" className="btn btn-success btn-lg">
              Fazer Pedido pelo WhatsApp
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="cardapio" className="bg-light py-5">
        <div className="container text-center">
          <h2>Nosso Cardápio</h2>
          <div className="row mt-4">
            {cardapios.length === 0 ? (
              <p className=""> Nenhum prato disponível no momento.</p>
            ) 
            : (
              cardapios.map((cardapio, index) => {
                return (
                  <div className="col-md-4 mb-4" key={cardapio.id}>
                    <div className="card h-100">
                      <img src={cardapio.imagem} className="card-img-top" alt={cardapio.desc} />
                      <div className="card-body">
                        <h5 className="card-title">{cardapio.titulo}</h5>
                        <p className="card-text">{cardapio.desc}</p>
                        <p><strong>{formatPrice(cardapio.preco)}</strong></p>
                        <a href={cardapio.whatsapp}
                          target="_blank" rel="noopener noreferrer" className="btn btn-success">Pedir via WhatsApp <i className="fab fa-whatsapp"></i></a>
                      </div>
                    </div>
                  </div>
                )
              })
            )
            }
          </div>
        </div>
      </section>

      <section id="reservas">
        <div className="container text-center">
          <h2>Reservas</h2>
          <p className="lead">Faça sua reserva de forma rápida pelo WhatsApp.</p>
          <a href="https://wa.me/244923456789?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
            target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">
            Reservar pelo WhatsApp <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </section>

      <section id="contato" className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2 className="mb-3 text-center">Fale conosco</h2>
              <p className="text-muted text-center mb-4">
                Entre em contato pelos canais abaixo. Estamos prontos para atender você.
              </p>

              <div className="d-grid gap-3">
                <div className="card card-contact p-3 shadow-sm">
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-icon text-primary">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Endereço</h6>
                      <p className="mb-0 text-muted">Av. Deolinda Rodrigues, Luanda — Angola</p>
                    </div>
                  </div>
                </div>

                <div className="card card-contact p-3 shadow-sm">
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-icon text-success">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Telefone</h6>
                      <a className="link" href="tel:+244923456789">+244 923456789</a>
                    </div>
                  </div>
                </div>

                <div className="card card-contact p-3 shadow-sm">
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-icon text-danger">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">E-mail</h6>
                      <a href="mailto:contatorestaurante@gmail.com">contatorestaurante@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="card card-contact p-3 shadow-sm">
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-icon text-warning">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Horário</h6>
                      <p className="mb-0 text-muted">Seg–Sex: 9:00 — 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h6 className="mb-2">Redes sociais</h6>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm me-2"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm me-2"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="localizacao" style={{ padding: '0' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126153.01125385346!2d13.20170168145374!3d-8.853353711556109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c5ecc5a92!2sLuanda!5e0!3m2!1spt-PT!2sao!4v1756282010487!5m2!1spt-PT!2sao" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>

      {/*Footer*/}
      <Footer />
    </>
  );
}
