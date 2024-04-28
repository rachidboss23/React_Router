import React from 'react';
import Menu from "../Componentes/Menu";


const Home = () => {
  return (
    <>
      <Menu />
      <div className="content">
        <div className="container">
          <h2 className="titulo_home">Bienvenido a Happy Cake</h2>
          
          <h1 className="subtitulo"> El lugar de los pasteles felices </h1>
          <p className="icono_home">🎂</p>
        </div>
      </div>
    </>
  );
}

export default Home;






