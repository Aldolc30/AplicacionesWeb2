export interface IResCliente {
    total: Number;
    clientes: Cliente[];

}

export interface Cliente { 
    nombre_cliente: String,
	cedula: String,
	edad: Number,
	telefono: Number,
	facultad: String,
	user: String,
	password: String,
}