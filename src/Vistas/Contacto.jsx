import React from 'react';
import Menu from "../Componentes/Menu";

const Contacto = () => {
  return (
    <>
      <Menu />
      <div className="content">
<h1 className="title-contact">Cuéntanos, ¿En qué podemos ayudar?</h1>

<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1" className="label-centered">Correo</label>
    <input type="email" className="form-control input-small" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />

  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1" className="label-centered">Descripción</label>
    <input type="password" className="form-control input-small" id="exampleInputPassword1" placeholder="" />
  </div>
  <div className="form-check">
  

  </div>
  <button type="submit" className="btn btn-danger btn-center">Enviar</button>

</form>
</div>
</>

  );
}

export default Contacto;


