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
        <title>Política de Privacidade | Academia Fitness</title>
      </Helmet>

      {/*Header*/}
      <Header />

      {/*Política*/}
      <section class="politicas-header mt-6">
        <h1>Política de Privacidade</h1>
        <p>Como protegemos seus dados na Academia Fitness</p>
      </section>

      <main class="politicas">
        <div>
          <h2>1. Introdução</h2>
          <p>
            Esta Política de Privacidade descreve como a Academia Fitness coleta,
            usa, armazena e protege as informações dos usuários. Ao utilizar
            nossos serviços, você concorda com esta política.
          </p>
        </div>

        <div>
          <h2>2. Dados Coletados</h2>
          <p>
            Coletamos dados para oferecer uma melhor experiência e suporte
            técnico, incluindo:
          </p>
          <ul>
            <li>Informações de cadastro: nome, e-mail, telefone, BI;</li>
            <li>Dados de propriedade;</li>
            <li>
              Informações de acesso, como IP, localização e tipo de dispositivo.
            </li>
          </ul>
        </div>

        <div>
          <h2>3. Finalidade do Uso</h2>
          <p>Utilizamos os dados coletados para:</p>
          <ul>
            <li>Gerenciar e operar funcionalidades da plataforma;</li>
            <li>Enviar notificações e alertas de fitness personalizados;</li>
            <li>Oferecer suporte técnico e melhorar nossos serviços;</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </div>

        <div>
          <h2>4. Compartilhamento de Dados</h2>
          <p>
            Seus dados não são vendidos. Podemos compartilhá-los apenas com:
          </p>
          <ul>
            <li>Parceiros autorizados para análise ou suporte técnico;</li>
            <li>Autoridades legais, quando exigido por lei.</li>
          </ul>
        </div>

        <div>
          <h2>5. Segurança</h2>
          <p>
            Adotamos medidas de segurança técnicas e organizacionais para
            proteger suas informações, incluindo criptografia, autenticação e
            backups regulares.
          </p>
        </div>

        <div>
          <h2>6. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar a navegação e personalizar a
            experiência do usuário. Você pode configurar seu navegador para
            recusar cookies.
          </p>
        </div>

        <div>
          <h2>7. Direitos do Usuário</h2>
          <p>Você pode solicitar a qualquer momento:</p>
          <ul>
            <li>Acesso aos seus dados;</li>
            <li>Correção ou exclusão de informações;</li>
            <li>Revogação do consentimento de uso.</li>
          </ul>
        </div>

        <div>
          <h2>8. Alterações na Política</h2>
          <p>
            Esta política poderá ser atualizada. Recomendamos a revisão
            periódica. As alterações entrarão em vigor a partir da publicação
            nesta página.
          </p>
        </div>

        <div>
          <h2>9. Contato</h2>
          <p>
            Em caso de dúvidas, entre em contato pelo e-mail:{" "}
            <a href="mailto:academiafitness@gmail.com" rel="noopener noreferrer">academiafitness@gmail.com</a>
          </p>
        </div>
      </main>

      {/*Footer*/}
      <Footer />
    </>
  );
}
