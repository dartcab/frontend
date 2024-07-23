import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//const URL = 'http://localhost:7000/api/proveedores/';

const URL =  'https://backend-4qqk.onrender.com/api/proveedores/';
const CompProveedoresMostrar = () => {

    const [proveedores, setProveedores] = useState([])
    useEffect(() => {
        getProveedores();
    }, []);


    //  funcion  mostrar clientes 
    const getProveedores = async () => {
        const datos = await axios.get(URL)
        setProveedores(datos.data);
        //console.log(datos.data);
    }



    //funcion eliminar  clientes
    const eliminarProveedores = async (id) => {
        await axios.delete(`${URL}${id}`);
        getProveedores();
        // eslint-disable-next-line
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/proveedores/agregar' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tablethebg'>
                            <tr>
                                <th>Nombre proveedores</th>
                                <th>area proveedores</th>
                                <th>Documento</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proveedores.map( (pro, index) => (
                                <tr key = {index}>
                                    <td> {pro.nombre} </td>
                                    <td> {pro.area} </td>
                                    <td> {pro.documento} </td>
                                    <td> {pro.correo} </td>
                                    <td> {pro.telefono} </td>
                                    <td> {pro.direccion} </td>
                                    <td>

                                        <Link to={`/proveedores/editar/${pro._id}`} className='btn btn-Success mt-2 mb-2'> <i className="fa-solid fa-file-pen"></i> </Link>
                                        <button onClick={() => eliminarProveedores(pro._id)} className='btn btn-danger mt-2 mb-2'> <i className="fa-solid fa-trash-can"></i> </button>
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

export default CompProveedoresMostrar;