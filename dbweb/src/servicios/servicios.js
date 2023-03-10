const API_URL='http://localhost:3500';


//trae a los abogados de la base de datos por el metodo get
export async function getAbogados(){
    try{

        const response = await fetch(`${API_URL}/abogados`);
        const data = await response.json();
        return data;
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}

//trae a los abogados por su ID

export async function getAbogadosById(id_abogados){
    const token = JSON.parse(localStorage.getItem('token'))
    const jsonTextInput = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${token}`,
        }
    };
    try{
        const response = await fetch(`${API_URL}/abogados/${id_abogados}`, jsonTextInput);
        const data = await response.json();
        console.log('ServiciosJS',data)
        return data[0];
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}


//trae a los clientes de la base de datos por el metodo get
export async function getClientes(){
    const token = JSON.parse(localStorage.getItem('token'))
    const jsonTextInput = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${token}`,
        }
    };
    try{
        const response = await fetch(`${API_URL}/clientes`, jsonTextInput);
        const data = await response.json();
        return data;
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}

//trae a los clientes por ID de la base de datos por el metodo get

export async function getClientesById(id_clientes){
    const token = JSON.parse(localStorage.getItem('token'))
    const jsonTextInput = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${token}`,
        }
    };
    try{

        const response = await fetch(`${API_URL}/clientes/${id_clientes}`, jsonTextInput);
        const data = await response.json();
        console.log('ServiciosJS',data)
        return data[0];
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}

//Edita a los clientes por ID

export function EditarCliente(idclientes, datos){
    const token = JSON.parse(localStorage.getItem('token'))
    const jsonTextInput = {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json',
           Authorization : `Bearer ${token}`,
       },
       body: JSON.stringify(datos)
    };
        fetch(`${API_URL}/clientes/${idclientes}`, jsonTextInput)
   }

//ALTA y BAJA DE CLIENTES

export async function BajaCliente(id_clientes){
    const jsonTextInput = {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json'
       }
    };
    console.log('Guarda en servicios el id_cliente?',id_clientes)
    try{
    const response = await fetch(`${API_URL}/bajacliente/${id_clientes}`, jsonTextInput);
    const data = await response.json();
    console.log('datos del API en servicios', data)
    return data;
    } catch(error){
        console.log('no funciona la comunicacion con el backend')
    } 
   }

   export async function AltaCliente(id_clientes){
    const jsonTextInput = {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json'
       }
    };
    console.log('Guarda en servicios el id_cliente?',id_clientes)
    try{
    const response = await fetch(`${API_URL}/altacliente/${id_clientes}`, jsonTextInput);
    const data = await response.json();
    console.log('datos del API en servicios', data)
    return data;
    } catch(error){
        console.log('no funciona la comunicacion con el backend')
    } 
   }

//conexion entre front y end de guardar datos de consulta

export function GuardarConsulta(datos){
 const jsonTextInput = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
 };
     fetch(`${API_URL}/insertarconsulta`, jsonTextInput)
}

// Login
export async function Login(datos){
    const jsonTextInput = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/login`, jsonTextInput);
    const data = await response.json();
    console.log('datos del API en servicios', data)
    return data;
    } catch(error){
        console.log('no funciona la comunicacion con el backend')
    } 
   }

//conexion entre front y end de guardar datos de cliente nuevo
   export function GuardarCliente(datos){
    const jsonTextInput = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)
    };
        fetch(`${API_URL}/insertarclientes`, jsonTextInput)
   }

   //variante mejorada

   export function GuardarClienteSsj(datos){
    const token = JSON.parse(localStorage.getItem('token'))
    const jsonTextInput = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           Authorization : `Bearer ${token}`,
       },
       body: JSON.stringify(datos)
    };
        fetch(`${API_URL}/insertclients`, jsonTextInput)
   }

   //conexion entre front y end para insertar usuario nuevo
   export function GuardarUsuario(datos){
    const jsonTextInput = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)
    };
        fetch(`${API_URL}/registro`, jsonTextInput)
   }

   //conexion entre front y end de guardar datos de un nuevo abogado
   export function GuardarAbogado(datos){
    const jsonTextInput = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)
    };
        fetch(`${API_URL}/insertarabogados`, jsonTextInput)
   }

   //ELIMINAR A UN ABOGADO DE LA BASE DE DATOS
   export async function EliminarAbogado(idabogados){
    const token = JSON.parse(localStorage.getItem('token'))
    const jsonTextInput = {
       method: 'DELETE',
       headers: {
           'Content-Type': 'application/json',
           Authorization : `Bearer ${token}`,
       }
    };
    console.log('Guarda en servicios el idabogados?',idabogados)
    try{
    const response = await fetch(`${API_URL}/abogados/${idabogados}`, jsonTextInput);
    const data = await response.json();
    console.log('datos del API en servicios', data)
    return data;
    } catch(error){
        console.log('no funciona la comunicacion con el backend')
    } 
   }

   //Trae las consultas para mostrarlas en el componente ConsultasAdmin.jsx

   export async function getConsultas(){
    try{

        const response = await fetch(`${API_URL}/consultas`);
        const data = await response.json();
        return data;
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}

//Marca como leido la consulta

export async function marcaLeido(id_consultas){
    const jsonTextInput = {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json'
       }
    }
    console.log('Guarda en servicios el id_cliente?',id_consultas)
    try{
    const response = await fetch(`${API_URL}/leidoconsultas/${id_consultas}`, jsonTextInput);
    const data = await response.json();
    console.log('datos del API en servicios', data)
    return data;
    } catch(error){
        console.log('no funciona la comunicacion con el backend')
    } 
   }

   export async function marcaNoLeido(id_consultas){
    const jsonTextInput = {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json'
       }
    }
    console.log('Guarda en servicios el id_cliente?',id_consultas)
    try{
    const response = await fetch(`${API_URL}/noleidoconsultas/${id_consultas}`, jsonTextInput);
    const data = await response.json();
    console.log('datos del API en servicios', data)
    return data;
    } catch(error){
        console.log('no funciona la comunicacion con el backend')
    } 
   }

   // VISTA DE ABOGADOS Y CLIENTES RELACIONADOS
   export async function getVista(){
    try{

        const response = await fetch(`${API_URL}/vistarelacion`);
        const data = await response.json();
        return data;
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}
//EDITAR ABOGADOS
export function EditarAbogado(idabogados, datos){
    const token = JSON.parse(localStorage.getItem('token'))
    const jsonTextInput = {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json',
           Authorization : `Bearer ${token}`,
       },
       body: JSON.stringify(datos)
    };
        fetch(`${API_URL}/abogados/${idabogados}`, jsonTextInput)
   }