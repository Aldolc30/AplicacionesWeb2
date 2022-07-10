import { IResCliente, Cliente } from "../interfaces/ICliente";
import {httpAxios, errorAxios} from '../services/clienteService'


const limpiar = (id: any, nombre_cliente: any, cedula: any, edad: any, telefono: any, facultad: any,
	user: any, password: any) =>{
        id.value=""
        nombre_cliente.value=""
        cedula.value=""
        edad.value=""
        telefono.value=""
        facultad.value=""
        user.value=""
        password.value=""
    }

const registrar = async (nombre_cliente:any, cedula: any, edad: any, telefono: any, facultad: any,
user: any, password: any) =>{
        const data:Cliente|any = {
            nombre_cliente:nombre_cliente.value,
            cedula: cedula.value,
            edad: Number(edad.value),
            telefono: Number(telefono.value),
            facultad: facultad.value,
            user: user.value,
            password:password.value
        }
        try{
            const res:Cliente|any = await httpAxios.post<Cliente>("/", data)
            const {client}:Cliente|any = await res.data;
            console.log(`Se ha registrado correctamente: ${client.nombre_cliente}`);
            
        }catch (error:Error|any){
            errorAxios(error)
        }
}

const editar = async (id:any, nombre_cliente:any, cedula: any, edad: any, telefono: any, facultad: any,
    user: any, password: any) =>{
            const data:Cliente|any = {
                id:id.value,
                nombre_cliente:nombre_cliente.value,
                cedula: cedula.value,
                edad: Number(edad.value),
                telefono: Number(telefono.value),
                facultad: facultad.value,
                user: user.value,
                password:password.value
            }
            try{
                const res:Cliente| any = await httpAxios.put<Cliente>(`/${id.value}`, data)
                const  client  = await res.data;
                console.log(`Se ha actualizado correctamente: ${client.nombre_cliente}`);
            }catch (error:Error|any){
                errorAxios(error)
            }
    }

const consultar = async (id:any, nombre_cliente:any, cedula: any, edad: any, telefono: any, facultad: any,
    user: any, password: any, cuerpo:any) =>{

        const resCliente:IResCliente = await (await httpAxios.get<IResCliente>(`/`)).data;
        const tabla = document.createElement("table");
        tabla.id = "tabla";
        tabla.border = "1"
        tabla.style.marginTop = '40px'
        tabla.style.marginLeft = '35%'
        const {client} = resCliente

        for(const cliente of client){
            const row = tabla.insertRow();
            const celda = row.insertCell();
            celda.innerHTML = `<button class="boton" value=${cliente._id}>${cliente.nombre_cliente}</button>`
            const celda2 =row.insertCell();
            celda2.innerHTML = `${cliente.cedula}`;
            const celda3 =row.insertCell();
            celda3.innerHTML = `${cliente.facultad}`;
        }

        cuerpo.innerHTML = ``;
        cuerpo.appendChild(tabla);
        document.querySelectorAll('.boton').forEach((boton:Element)=>{
            boton.addEventListener("click", async()=>{
                const idx = (boton as HTMLButtonElement).value;
                // console.log(idx);
                
                const {cliente}:Cliente|any = await (await httpAxios.get<Cliente>(`/ver/${idx}`)).data;
                // console.log(cliente);
                
                id.value=cliente._id!
                nombre_cliente.value =cliente.nombre_cliente
                cedula.value= cliente.cedula
                edad.value= cliente.edad
                telefono.value= cliente.telefono
                facultad.value= cliente.facultad
                user.value= cliente.user
                password.value= cliente.password      
            })
        })
    }

const eliminar = async (id:any) =>{
    try {
        const resCliente:Cliente|any = await httpAxios.delete<Cliente>(`/${id.value}`)
        const client  = await resCliente.data
        console.log(`El cliente ${client.nombre_cliente} ha sido eliminado`);
        
    }catch (error:Error|any){
        errorAxios(error)
    }
}


export {
    registrar,
    editar,
    consultar,
    eliminar,
    limpiar
}