import axios from 'axios';
import {IResCliente} from "../interfaces/ICliente"

export const httpAxios = axios.create({
    baseURL:`http://localhost:3500/v1/sextoA/api/cliente`
})

export const postCliente = async (url:string, data:IResCliente[])=>{
    return await httpAxios.post(url, data)
}

export const getCliente = async (url:string,)=>{
    return await httpAxios.get(url)
}

export const updateCliente = async (url:string, data:IResCliente[])=>{
    return await httpAxios.put(url, data)
}

export const deleteCliente = async (url:string)=>{
    return await httpAxios.put(url)
}

export const errorAxios = (error:Error)=>{
    if (axios.isAxiosError(error)){
        console.log(`Error en el Axios`);
        
    }
}