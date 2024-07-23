
import './App.css';
import CompClienteMostrar from './Componentes/CompClienteMostrar';
import CompAgregarCliente from './Componentes/CompAgregarCliente';
import CompProveedoresAgregar from './Componentes/CompProveedoresAgregar';
import CompModClientes from './Componentes/CompModCliente';
import CompProveedoresMod from './Componentes/CompProveedoresMod';
import CompProveedoresMostrar from './Componentes/CompProveedoresMostrar';
import MenuC from './Componentes/ComMenu';
import Cfooter from './Componentes/Cfooter';

// importamos  router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import CompProveedoresMod from './Componentes/CompProveedoresMod';



function App() {
  return (
    <div className="App">
      <MenuC/>
      <BrowserRouter>
      <Routes>
        <Route path= '/clientes' element = {<CompClienteMostrar />} /> 
        <Route path= '/proveedores' element = {<CompProveedoresMostrar />} />
        <Route path= '/clientes/agregar' element = {<CompAgregarCliente />} /> 
        <Route path= '/proveedores/agregar' element = {<CompProveedoresAgregar />} />
        <Route path= '/clientes/editar/:id' element = {<CompModClientes />} /> 
        <Route path= '/proveedores/editar/:id' element = {<CompProveedoresMod />} />
      </Routes>
      </BrowserRouter>
      <Cfooter />
    </div>
  );
}

export default App;
