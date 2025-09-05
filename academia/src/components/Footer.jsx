import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="box-container">
          <div className="box">
            <h3><i className="fas fa-heart"></i> Academia Fitness</h3>
            <p>Cuide do corpo, motive Link mente e viva melhor!</p>
            <div className="share">
              <Link to="#" target="_blank" className="fab fa-facebook-f" rel="noopener noreferrer"></Link>
              <Link to="#" target="_blank" className="fab fa-instagram" rel="noopener noreferrer"></Link>
              <Link to="#" target="_blank" className="fab fa-twitter" rel="noopener noreferrer"></Link>
              <Link to="#" target="_blank" className="fab fa-linkedin" rel="noopener noreferrer"></Link>
            </div>
          </div>

          <div className="box">
            <h3>Contato de Informação</h3>
            <Link to="tel:999999999" className="links"><i className="fas fa-phone"></i> +244 999999999</Link>
            <Link to="tel:99999999" className="links"><i className="fas fa-phone"></i> +244 999999999</Link>
            <Link to="mailto:academiafitness@gmail.com" className="links"><i className="fas fa-envelope"></i> academiafitness@gmail.com</Link>
            <Link to="/contato#mapa" className="links"><i className="fas fa-map-marker-alt"></i> Luanda</Link>
          </div>

          <div className="box">
            <h3>Links Rápidos</h3>
            <Link to="/" className="links"><i className="fas fa-arrow-right"></i> Home</Link>
            <Link to="/sobre" className="links"><i className="fas fa-arrow-right"></i> Sobre</Link>
            <Link to="/#servicos" className="links"><i className="fas fa-arrow-right"></i> Serviços</Link>
            <Link to="/agendar" className="links"><i className="fas fa-arrow-right"></i> Agendar</Link>
          </div>

          <div className="box">
            <h3>Links Extras</h3>
            <Link to="/politica-privacidade" className="links"><i className="fas fa-arrow-right"></i> Política de Privacidade</Link>
            <Link to="/termos" className="links"><i className="fas fa-arrow-right"></i> Termos De Uso</Link>
            <Link to="/auth/cadastrar-se" className="links"><i className="fas fa-arrow-right"></i> Criar Conta</Link>
          </div>
        </div>

        <div className="credit">&copy; {new Date().getFullYear()} Academia Fitness. Todos os direitos reservados!</div>
      </footer>
    </>
  );
}
