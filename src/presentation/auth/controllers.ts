import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain";

export class AuthController {
    contructor(){}

    registerUser = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body) // Llamamos el metodo create de DTO RegisterUserDto, y pasamos el cuerpo de la solicitud, con esto validaremos los datos que proporcionamos en la respuesta del cuerpo || si esta es exitosa devolvemos dos elementos || error cualquier error de validacion que ocurra || registerUserDto el objeto DTO creado a partir de los datos de entrada
        if (error) return res.status(400).json({error}) // Creamos un condicional para verificar si hay un error de validacion y si es así devolvemos una resputa HTTP 400 junto a un objeto JSON que contiene el error, con esto indicamos que los datos entregados no fueron validados por el DTO
        
        res.json(registerUserDto) // Si no tenemos errores de validacion devolvemos una respuesta JSON con el objeto registerUserDto, lo que nos da una validacion exitosa
    }

    loginUser = (req: Request, res: Response) => {
        res.json('loginUser controller')
    }
}