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
    <Footer />
    </>
  );
}