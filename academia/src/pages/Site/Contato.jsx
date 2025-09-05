import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../assets/css/style.css";
import "../../assets/css/contato.css";
import WhatsApp from "../../assets/img/whatsapp.svg";

export default function Contato() {
  return (
    <>
      {/*Helmet*/}
      <Helmet>
        <title>Contato | Academia Fitness</title>
      </Helmet>

      {/*Header*/}
      <Header />

      {/*Contato*/}
      <section class="banner">
        <div class="content">
          <h3>Nos Contate</h3>
          <p>
            Fale com nossa equipe e tire suas dúvidas. Estamos prontos para
            ajudar você!
          </p>
        </div>
      </section>

      <section class="infos">
        <div class="info-container">
          <div class="info">
            <i class="fas fa-clock"></i>
            <h3>Hora De Abertura</h3>
            <p>Segunda - Quinta: 08:00 - 12:00</p>
            <p>Sexta-feira: 09:00 - 12:00</p>
          </div>

          <div class="info">
            <i class="fas fa-phone"></i>
            <h3>Nosso Telefone</h3>
            <p>+244 999999999</p>
          </div>

          <div class="info">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Nosso Endereço</h3>
            <address>Angola, Luanda</address>
          </div>
        </div>
      </section>

      <section class="contato">
        <div class="row">
          <div class="image"></div>

          <form
            action=""
            method="POST"
            class="form"
            id="form"
            autocomplete="on"
          >
            <h3>Preencha o Formulário</h3>

            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input
                type="text"
                name="nome"
                id="name"
                placeholder="Seu nome"
                required
              />
            </div>
            <span class="error" id="nameError"></span>

            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="exemplo@gmail.com"
                required
              />
            </div>
            <span class="error" id="emailError"></span>

            <div class="inputBox">
              <span class="fas fa-a"></span>
              <input
                type="text"
                name="assunto"
                id="assunto"
                placeholder="Seu assunto"
                required
              />
            </div>
            <span class="error" id="assuntoError"></span>

            <div class="inputBox">
              <span class="fas fa-comment"></span>
              <textarea
                name="msg"
                id="msg"
                cols="10"
                rows="30"
                placeholder="Sua mensagem..."
                required
              ></textarea>
            </div>
            <span class="error" id="msgError"></span>

            <button type="submit" class="btn">
              Enviar mensagem <i class="fas fa-rocket"></i>
            </button>
            <button type="reset" class="btn">
              Limpar <i class="fas fa-trash"></i>
            </button>
          </form>
        </div>
      </section>

      <section class="mapa" id="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126153.01125385346!2d13.20170168145374!3d-8.853353711556109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c5ecc5a92!2sLuanda!5e0!3m2!1spt-PT!2sao!4v1754333255012!5m2!1spt-PT!2sao"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <a
        href="https://wa.me/244923459995?text=Desejo obter mais informações"
        class="btn-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WhatsApp} alt="Botão de whatsapp para agendar" />
        <span class="tooltrip-text">Obter Informações</span>
      </a>

      {/*Footer*/}
      <Footer />
    </>
  );
}
