import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            MeuApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <div className="container mt-5 pt-5">
        <h1 className="text-center mb-4">Bem-vindo ao meu App!</h1>

        {/* Botão que abre o Modal */}
        <div className="text-center mb-5">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#meuModal"
          >
            Abrir Modal
          </button>
        </div>

        {/* Grid com cards */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Exemplo"
              />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">
                  Este é um exemplo de card com Bootstrap no React.
                </p>
                <a href="#" className="btn btn-primary">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Exemplo"
              />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">
                  Mais um card usando apenas classes do Bootstrap.
                </p>
                <a href="#" className="btn btn-success">
                  Clique aqui
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Exemplo"
              />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">
                  Bootstrap direto no React, sem bibliotecas extras.
                </p>
                <a href="#" className="btn btn-danger">
                  Ver mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="meuModal"
        tabIndex="-1"
        aria-labelledby="meuModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="meuModalLabel">
                Exemplo de Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div className="modal-body">
              Este modal está funcionando no React com Bootstrap puro 🎉
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button type="button" className="btn btn-primary">
                Salvar mudanças
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
