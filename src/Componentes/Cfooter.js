import React from "react";
import redes from '../imagenes/redes.jpeg';

const CompFooter = () => {
     return (

        
         <div>
             <div className="card-body">
                 <h5 className="card-title">Direccion: carrera 10 #10-10</h5>
                 <p className="card-text">Correo: pruebacorreo@gmail.com - telefono: 321654987</p>
                 <img src={redes} className="App-logo1" alt="logo" />
             </div>
             <div className="card-footer text-muted">
                 Lunes a viernes  Horario : 8am a 5 pm
             </div>

         </div>
    )
}

export default CompFooter;