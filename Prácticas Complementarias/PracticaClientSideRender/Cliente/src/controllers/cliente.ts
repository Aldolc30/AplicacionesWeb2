import { IResCliente, Cliente } from "../interfaces/ICliente";
import {httpAxios} from '../services/clienteService'


const limpiar = (nombre_cliente: any, cedula: any, edad: any, telefono: any, facultad: any,
	user: any, password: any) =>{
        nombre_cliente.value=""
        cedula.value=""
        edad.value=""
        telefono.value=""
        facultad.value=""
        user.value=""
        password.value=""
    }

export {
    limpiar
}