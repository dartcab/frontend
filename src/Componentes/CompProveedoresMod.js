import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

//const URL = 'http://localhost:7000/api/proveedores/';
const URL =  'https://backend-4qqk.onrender.com/api/proveedores/';

const CompProveedoresMod = () =>{

    const [nombre, setNombre] = useState('')
    const [area, setArea] = useState('')
    const [documento, setDocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const navigate = useNavigate();
    const {id} = useParams(); 

    //funcion modificar o actualizar

    const modificarProveedores = async (e) => {
        e.preventDefault()
        await axios.put(`${URL}${id}`, {
            nombre: nombre, area: area, documento: documento,
            correo: correo, direccion: direccion, telefono: telefono
        })
        navigate('/proveedores')
    }

    useEffect(() => {
        getProveedores();
        // eslint-disable-next-line
    }, []);


        const getProveedores = async () => {
        const res = await axios.get(`${URL}${id}`)
        setNombre(res.data.nombre)
        setArea(res.data.area)
        setDocumento(res.data.documento)
        setCorreo(res.data.correo)
        setDireccion(res.data.direccion)
        setTelefono(res.data.telefono)
    }
    //console.log(getProveedores());
    
    return(
        <div>
            <h3>Formulario Modificar Proveedores </h3>
            <form onSubmit={modificarProveedores}>

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
                <button type="submit" className="btn btn-primary"> Actualizar </button>
            </form>
        </div>
    )
}
export default CompProveedoresMod;