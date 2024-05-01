import {Usuario} from"./usuario.model";

export class UsuarioService {
    
    usuarios: Usuario[] = [
        new Usuario("Administrator", "1234567", "administrator"),
        new Usuario("Jhon", "2468", "user"),
        new Usuario("Andrew", "6321", "user"),
        new Usuario("Louis", "7532", "user")
    ]
}