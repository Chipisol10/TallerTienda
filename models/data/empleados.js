import 'dotenv/config.js'
import '../../config/database.js'

import Empleado from '../Empleado.js';

const empleados = [
    { nombre: "Carlos Pérez", cargo: "Desarrollador", salario: 40000 },
    { nombre: "María Gómez", cargo: "Gerente de Proyectos", salario: 60000 },
    { nombre: "Juan Rodríguez", cargo: "Diseñador Gráfico", salario: 35000 },
    { nombre: "Ana López", cargo: "Analista de Datos", salario: 45000 },
    { nombre: "Luis Hernández", cargo: "Soporte Técnico", salario: 30000 },
    { nombre: "Claudia Martínez", cargo: "Desarrollador", salario: 42000 },
    { nombre: "Pedro García", cargo: "Administrador de Redes", salario: 50000 },
    { nombre: "Sofía Sánchez", cargo: "Especialista en Marketing", salario: 38000 },
    { nombre: "Raúl Díaz", cargo: "Consultor", salario: 55000 },
    { nombre: "Elena Morales", cargo: "Tester de Software", salario: 32000 },
    { nombre: "Fernando Castillo", cargo: "Director de Tecnología", salario: 70000 },
    { nombre: "Laura Rivas", cargo: "Recursos Humanos", salario: 46000 },
    { nombre: "Adriana Torres", cargo: "Asistente Administrativo", salario: 28000 },
    { nombre: "Andrés Vargas", cargo: "Jefe de Ventas", salario: 62000 },
    { nombre: "Ricardo Mendoza", cargo: "Especialista en Ciberseguridad", salario: 53000 }
  ];
  

Empleado.insertMany(empleados)