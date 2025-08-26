import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Restaurante Sabor. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
