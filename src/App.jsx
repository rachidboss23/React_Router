import { Routes,Route } from 'react-router-dom';
import Home from './Vistas/Home';
import Contacto from './Vistas/Contacto';
import Menu from './Componentes/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App=()=> {


  return (
    <>
   
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contacto" element={<Contacto/>} />
    </Routes>

    </>
  )
}

export default App
