import express from 'express';
import cors from 'cors';
import { dbConnection } from './database/config';
import routeCliente from './routes/cliente';
import { config } from 'dotenv';

config({ path: '.env' });

export class Server {
    public app: express.Router;
    public router: express.Router;
    public port: string | number;
    private paths: {
        bar: string,
        cliente: string,
        menu: string,
        plato: string,
        reservacion: string
    };
    private _express: express.Application;
    
    constructor() {
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT || 4000;
        this.paths = {
            bar        : '/api/bar',
            cliente    : '/api/cliente',
            menu       : '/api/menu',
            plato      : '/api/plato',
            reservacion: '/api/reservacion',
        };
        this.conectarDB().then();
        this.middlewares();
        this.routes();
        this.router.use('/v1/sextoA', this.app);
        this._express = express().use(this.router);
    }
    
    async conectarDB() {
        await dbConnection(); // espera a que se conecte a la base de datos
    }
    
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }
    
    routes() {
        this.app.use(this.paths.cliente, routeCliente);
    }
    
    listen() {
        this._express.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${ this.port }`);
        });
    }
}