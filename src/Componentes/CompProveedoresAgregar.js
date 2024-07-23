import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//const URL = 'http://localhost:7000/api/proveedores/';
const URL =  'https://backend-4qqk.onrender.com/api/proveedores/';

const CompProveedoresAgregar = () =>{

    const [nombre, setNombre] = useState('')
    const [area, setArea] = useState('')
    const [documento, setDocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const navigate = useNavigate();

    //funcion guardar

    // creamos la funcion guardar 
    const guardarProveedores = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            nombre: nombre, area: area, documento: documento, correo: correo,
            telefono: telefono, direccion: direccion
        })
        navigate('/proveedores')
    }



    return(
        <div>
            <h3>Formulario Guardar proveedores </h3>
            <form onSubmit={guardarProveedores}>

                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)}
                        type='text' className='from-control' />
                </div>

                <div className="mb-3">
                    <label className="form-label">Area</label>
                    <input value={area} onChange={(e) => setArea(e.target.value)}
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
export default CompProveedoresAgregar;