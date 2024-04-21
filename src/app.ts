import { envs } from "./config";
import {AppRoutes} from './presentation/routes';
import {Server} from './presentation/server';

(() => {
    main(); // Creamos una funcion anonima que estara autoinvocada
})()

 async function main() {
     // todo: await base de datos
     
    // todo: inicio de nuestro server
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
     }).start();// creamos una instancia y llamamos el metodo start para ejecutrala
 }