import React, { useEffect } from "react"
import { useState } from "react"
import * as API from '../servicios/servicios'
import { Link } from "react-router-dom";
import { EditarCliente } from "./EditarCliente";
export function ListadoClientes(){

    const [clientes, setClientes] = useState([]);
    const [MensajeError, setMensajeError] = useState('');

    useEffect(() =>{
        API.getClientes().then(setClientes)
    }, [])


        // FUNCION BAJA DE CLIENTE//
    const bajaCliente = async(id)=>{
        console.log("el id que vamos a dar de baja es el...",id)

        const user = await API.BajaCliente(id)
        console.log('guarda el id en user?', user)
        
        if(user.status){

            setMensajeError(user.mensaje)
            setTimeout(()=>{
                setMensajeError('')
                window.location.reload(true);
            }, 4000)

        }else{
            setMensajeError(user.mensaje)
            setTimeout(()=>{
                setMensajeError('')
            }, 3000)
        }
    }
        ///////////////////////////

        // FUNCION ALTA DE CLIENTE//

        const altaCliente = async(id)=>{
            console.log("el id que vamos a dar de alta es el...",id)
    
            const user = await API.AltaCliente(id)
            console.log('guarda el id en user?', user)
            
            if(user.status){
    
                setMensajeError(user.mensaje)
                setTimeout(()=>{
                    setMensajeError('')
                    window.location.reload(true);
                }, 4000)
    
            }else{
                setMensajeError(user.mensaje)
                setTimeout(()=>{
                    setMensajeError('')
                }, 3000)
            }
        }

        ///////////////////////////

    return (
        <>
        <div className="container">
       <div className="carta">
        <div className="cartacabeza">
           <h1 className="titulito1">Lista de Clientes Activos</h1>
        </div>
                {
                    MensajeError?
                    <div className="alert alert-success" role="alert">
                     {MensajeError}
                    </div>
                    :('')

                }
       <div className="table-responsive"> 
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Dni</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Domicilio</th>
                    <th>Estado</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map((cliente) => (

                    <tr key={cliente.idclientes}>

                        <td scope="row">{cliente.idclientes}</td>
                        <td>{cliente.dni}</td>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.apellido}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.domicilio}</td>
                        <td>{cliente.estado}</td>
                        <td>
                            { (cliente.estado==="A")?
                            <div className="btn-group" role="group" aria-label="">
                               <button onClick={() => bajaCliente(cliente.idclientes)} type="button" className="btn btn-danger">Dar de Baja</button>
                            </div>
                            :
                            <div className="btn-group" role="group" aria-label="">
                               <button onClick={() => altaCliente(cliente.idclientes)} type="button" className="btn btn-success">Dar de Alta</button>
                            </div>
                            }
                        </td>
                        <td>
                            <Link to={`/editarcliente/${cliente.idclientes}`}><button className="btn btn-warning" type="button">Editar</button></Link>
                        </td>
                    </tr>
                ))}
                <div className="card-footer text-muted" >
                    <ul><Link name="" id="" className="btn btn-primary" to="/crearClientes" role="button">Agregar Cliente</Link></ul>
                </div>
            </tbody>
        </table>
        </div>
        </div>
        </div>
        </>
    )

}