import { Router } from 'express';
import {
    crearCliente,
    obtenerClienteById,
    obtenerClientes,
} from '../controllers/cliente';

const router = Router();

router.get('/ver/:id', obtenerClienteById);
router.get('/', obtenerClientes); // Obtener todos los clientes
router.post('/', crearCliente); // Crear un nuevo cliente

export default router;
