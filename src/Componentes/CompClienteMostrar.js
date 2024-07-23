import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//const URL = 'http://localhost:7000/api/clientes/';

const URL =  'https://backend-4qqk.onrender.com/api/clientes/';

const CompClienteMostrar = () => {

    const [clientes, setCliente] = useState([])
    useEffect(() => {
        getClientes();
    }, []);


    //  funcion  mostrar clientes 
    const getClientes = async () => {
        const datos = await axios.get(URL)
        setCliente(datos.data);
        //console.log(datos.data);
    }



    //funcion eliminar  clientes
    const eliminarClientes = async (id) => {
        await axios.delete(`${URL}${id}`);
        getClientes();
        // eslint-disable-next-line
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/clientes/agregar' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tablethebg'>
                            <tr>
                                <th>Nombres cliente</th>
                                <th>Apellidos cliente</th>
                                <th>Documento</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map( (cli, index) => (
                                <tr key = {index}>
                                    <td> {cli.nombres} </td>
                                    <td> {cli.apellidos} </td>
                                    <td> {cli.documento} </td>
                                    <td> {cli.correo} </td>
                                    <td> {cli.telefono} </td>
                                    <td> {cli.direccion} </td>
                                    <td>

                                        <Link to={`/clientes/editar/${cli._id}`} className='btn btn-Success mt-2 mb-2'> <i className="fa-solid fa-file-pen"></i> </Link>
                                        <button onClick={() => eliminarClientes(cli._id)} className='btn btn-danger mt-2 mb-2'> <i className="fa-solid fa-trash-can"></i> </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default CompClienteMostrar;