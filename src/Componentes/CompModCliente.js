import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

//const URL = 'http://localhost:7000/api/clientes/';
const URL =  'https://backend-4qqk.onrender.com/api/clientes/';

const CompModClientes = () =>{

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [documento, setDocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const navigate = useNavigate();
    const {id} = useParams(); 

    //funcion modificar o actualizar

    const modificarCliente = async (e) => {
        e.preventDefault()
        await axios.put(`${URL}${id}`, { 
            nombres: nombres, apellidos: apellidos, documento: documento,
            correo: correo, direccion: direccion, telefono: telefono
        })
        navigate('/clientes')
    }

    useEffect(() => {
        getClientes();
        // eslint-disable-next-line
    }, []);


        const getClientes = async () => {
        const res = await axios.get(`${URL}${id}`) 
        setNombres(res.data.nombres)
        setApellidos(res.data.apellidos)
        setDocumento(res.data.documento)
        setCorreo(res.data.correo)
        setDireccion(res.data.direccion)
        setTelefono(res.data.telefono)

    }
    
    return(
        <div>
            <h3>Formulario Modificar Clientes </h3>
            <form onSubmit={modificarCliente}>

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
                <button type="submit" className="btn btn-primary"> Actualizar </button>
            </form>
        </div>
    )
}
export default CompModClientes;