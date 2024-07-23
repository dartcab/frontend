import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//const URL = 'http://localhost:7000/api/clientes/';
const URL =  'https://backend-4qqk.onrender.com/api/clientes/';
const CompAgregarClientes = () =>{

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [documento, setDocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const navigate = useNavigate();

    //funcion guardar

    // creamos la funcion guardar 
    const guardarCliente = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            nombres: nombres, apellidos: apellidos, documento: documento, correo: correo,
            telefono: telefono, direccion: direccion
        })
        navigate('/clientes')
    }



    return(
        <div>
            <h3>Formulario Guardar Clientes </h3>
            <form onSubmit={guardarCliente}>

                <div className="mb-3">
                    <label className="form-label">Nombres</label>
                    <input value={nombres} onChange={(e) => setNombres(e.target.value)}
                        type='text' className='from-control' />
                </div>

                <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input value={apellidos} onChange={(e) => setApellidos(e.target.value)}
                            type='text' className='from-control' />
                </div>

                <div className="mb-3">
                    <label className="form-label">Documento</label>
                    <input value={documento} onChange={(e) => setDocumento(e.target.value)}
                        type='number' className='from-control' />
                </div>

                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input value={correo} onChange={(e) => setCorreo(e.target.value)}
                        type='text' className='from-control' />
                </div>

                <div className="mb-3">
                    <label className="form-label">Direccion</label>
                    <input value={direccion} onChange={(e) => setDireccion(e.target.value)}
                        type='text' className='from-control' />
                </div>

                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)}
                        type='number' className='from-control' />
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>

        </form>
    </div>
    )
}
export default CompAgregarClientes;