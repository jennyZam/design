import {Aplicacion} from"./aplicacion.model";

export class AplicacionService {
    
    aplicaciones: Aplicacion[] = [
        new Aplicacion("App ver el mundo"),
        new Aplicacion("Pagina web ver el mundo"),
        new Aplicacion("App Food and Drink"),
        new Aplicacion("Pagina web Food and Drink")
    ]
}