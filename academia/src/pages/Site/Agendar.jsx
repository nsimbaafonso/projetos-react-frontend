import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../assets/css/style.css";
import "../../assets/css/agendar.css";

export default function Agendar() {
  return (
    <>
      {/*Helmet*/}
      <Helmet>
        <title>Agendar | Academia Fitness</title>
      </Helmet>

      {/*Header*/}
      <Header />

      {/*Agendar*/}
      <section className="banner">
        <div className="content">
          <h3>Agendar Aula</h3>
          <p>
            Escolha o melhor horário e garanta sua vaga de forma prática e
            rápida. Nosso sistema de agendamento online permite que você
            organize seus estudos sem complicações.
          </p>
        </div>
      </section>

      {/*Disponibilidade*/}
      <section className="availability">
        <h1 className="heading">
          Verificar <span>Disponibildade</span>
        </h1>
        <form action="" method="POST" className="form" id="formAgendamento">
          <div className="row">
            <div className="box">
              <p>
                Data <span>*</span>
              </p>
              <input type="date" name="data" className="input" required />
            </div>
            <div className="box">
              <p>
                Hora <span>*</span>
              </p>
              <input type="time" name="hora" className="input" required />
            </div>
            <div className="box">
              <p>
                Serviço <span>*</span>
              </p>
              <select name="servico" id="servico" className="input" required>
                <option value="" selected>
                  Selecione um serviço
                </option>
                <option value="Stay Fitness">Stay Fitness</option>
                <option value="Esgrima">Esgrima</option>
                <option value="Treinos Online">Treinos Online</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn">
            Verificar Disponibilidade
          </button>
        </form>
      </section>

      {/*reserva*/}
      <section className="reservation" id="reservar">
        <h1 className="heading">
          Reservar <span>Agora</span>
        </h1>

        <form action="" method="POST">
          <div className="container">
            <div className="box">
              <p>
                Nome <span>*</span>
              </p>
              <input
                type="text"
                name="nome"
                className="input"
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="box">
              <p>
                Email <span>*</span>
              </p>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Seu email: exemplo@gmail.com"
                required
              />
            </div>

            <div className="box">
              <p>
                Telefone <span>*</span>
              </p>
              <input
                type="tel"
                name="tel"
                className="input"
                placeholder="Seu telefone: 923 456 789"
                pattern="[0-9]{3} [0-9]{3} [0-9]{3}"
                required
              />
            </div>

            <div className="box">
              <p>
                Data <span>*</span>
              </p>
              <input type="date" name="data" className="input" required />
            </div>

            <div className="box">
              <p>
                Hora <span>*</span>
              </p>
              <input type="time" name="hora" className="input" required />
            </div>

            <div className="box">
              <p>
                Serviço <span>*</span>
              </p>
              <select name="servico" id="servico" className="input" required>
                <option value="" selected>
                  Selecione um serviço
                </option>
                <option value="Stay Fitness">Stay Fitness</option>
                <option value="Esgrima">Esgrima</option>
                <option value="Treinos Online">Treinos Online</option>
              </select>
            </div>

            <div className="box">
              <p>
                Pacote <span>*</span>
              </p>
              <select name="pacote" id="pacote" className="input" required>
                <option value="" selected>
                  Selecione um pacote
                </option>
                <option value="Pacote Iniciante">Pacote Iniciante</option>
                <option value="Pacote Bronze">Pacote Bronze</option>
                <option value="Pacote Prata">Pacote Prata</option>
                <option value="Pacote Ouro">Pacote Ouro</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn">
            Reservar Agora
          </button>
        </form>
      </section>

      {/*Footer*/}
      <Footer />
    </>
  );
}
