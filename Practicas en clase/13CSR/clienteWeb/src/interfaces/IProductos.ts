export interface IResProducto {
    total: number;
    productos: Producto[];
}

export interface Producto {
    _id:    string;
    nombre: string;
    estado: boolean;
    precio: number;
    costo:  number;
    minimo: number;
    stock:  number;
    __v:    number;
}