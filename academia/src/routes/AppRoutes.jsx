import { Routes, Route } from "react-router-dom";
import Home from "../pages/Site/Home";
import Sobre from "../pages/Site/Sobre";
import Agendar from "../pages/Site/Agendar";
import Blog from "../pages/Site/Blog";
import Contato from "../pages/Site/Contato";
import PoliticaPrivacidade from "../pages/Site/PoliticaPrivacidade";
import Termos from "../pages/Site/Termos";
import Login from "../pages/Auth/Login";
import CadastrarSe from "../pages/Auth/CadastrarSe";
import RecuperarSenha from "../pages/Auth/RecuperarSenha";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/agendar" element={<Agendar />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
      <Route path="/termos" element={<Termos />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/cadastrar-se" element={<CadastrarSe />} />
      <Route path="/auth/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}