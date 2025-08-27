import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Página não encontrada</title>
        <meta name="description" content="Página não encontrada." />
      </Helmet>

      <Header />
      <section className="d-flex align-items-center justify-content-center bg-light py-2"style={{ height: '100vh' }}>
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="lead mb-4">A página que você procura não foi encontrada.</p>
          <button className="btn btn-lg btn-warning" onClick={() => window.history.back()}>
            Voltar
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
