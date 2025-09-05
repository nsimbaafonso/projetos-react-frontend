import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../assets/css/style.css";
import "../../assets/css/politica.css";

export default function PoliticaPrivacidade() {
  return (
    <>
      {/*Helmet*/}
      <Helmet>
        <title>Termos e Condições | Academia Fitness</title>
      </Helmet>

      {/*Header*/}
      <Header />

      {/*Termos*/}
      <section class="politicas-header mt-6">
        <h1>Termos e Condições de Uso</h1>
        <p>Bem-vindo a Academia Fitness</p>
      </section>

      <main class="politicas">
        <div>
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou utilizar o Stay Fitness, você concorda com os
            presentes Termos e Condições. Se você não concordar, não utilize o
            sistema.
          </p>
        </div>

        <div>
          <h2>2. Descrição do Serviço</h2>
          <p>
            O Stay Fitness é uma plataforma voltada para saúde e bem estar,
            permitindo treinos de fitness, esgrima e academia.
          </p>
        </div>

        <div>
          <h2>3. Cadastro do Usuário</h2>
          <p>
            Para utilizar determinadas funcionalidades, o usuário deverá se
            cadastrar, fornecendo informações corretas e atualizadas. É de
            responsabilidade do usuário manter seus dados em sigilo.
          </p>
        </div>

        <div>
          <h2>4. Uso Permitido</h2>
          <p>
            Você se compromete a utilizar o sistema de forma legal, ética e
            segura, sem praticar atividades que possam comprometer o
            funcionamento do sistema ou a segurança de outros usuários.
          </p>
        </div>

        <div>
          <h2>5. Propriedade Intelectual</h2>
          <p>
            Todos os conteúdos, marcas e códigos presentes no Stay Fitness são
            de propriedade exclusiva da empresa desenvolvedora e estão
            protegidos por leis de direitos autorais.
          </p>
        </div>

        <div>
          <h2>6. Modificações</h2>
          <p>
            Os Termos de Uso podem ser atualizados a qualquer momento. É
            responsabilidade do usuário verificar regularmente as alterações.
          </p>
        </div>

        <div>
          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            O Stay Fitness não se responsabiliza por danos diretos ou indiretos
            resultantes do uso ou da impossibilidade de uso do sistema.
          </p>
        </div>

        <div>
          <h2>8. Contato</h2>
          <p>
            Para dúvidas ou suporte, entre em contato pelo e-mail:{" "}
            <a href="mailto:academiafitness@gmail.com" rel="noopener noreferrer">academiafitness@gmail.com</a>.
          </p>
        </div>
      </main>

      {/*Footer*/}
      <Footer />
    </>
  );
}
