export interface IResCliente {
    total: Number;
    client: Cliente[];

}

export interface Cliente { 
	_id?:String,
    nombre_cliente: String,
	cedula: String,
	edad: Number,
	telefono: Number,
	facultad: String,
	user: String,
	password: String,
}