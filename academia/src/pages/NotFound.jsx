import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./../assets/css/style.css";

export default function Home() {
  return (
    <>
      {/*Helmet*/}
      <Helmet>
        <title>404 | Academia Fitness</title>
      </Helmet>

      {/*Header*/}
      <Header />

      {/*Content*/}
      <section className="erro mt-6 d-flex">
        <div className="content">
          <h1>404</h1>
          <p>Ops! A página solicitada não foi encontrada ou não existe.</p>
          <div className="d-flex">
            <Link to="/" className="btn">Voltar Para Home</Link>
          </div>
        </div>
      </section>
      

      {/*Footer*/}
      <Footer />
    </>
  );
}
