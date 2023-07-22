import { Container, NineSlicePlane,Texture,Text} from "pixi.js";
import { Objeto } from "./Objeto";

export class Cartel extends Container {
    constructor(windowx: number, windowy: number){
        super();
        const tablero = new NineSlicePlane(
            Texture.from("normalTablero"),
            50,50,50,50
            );
        //tablero.anchor.set(0.5);
        tablero.height = 3100;
        const escalaT = 0.2;
        tablero.scale.set(escalaT);
        tablero.y = (windowy-(tablero.height*escalaT))/2;
        tablero.x = (windowx-(tablero.width*escalaT))/2;
        
        const cartel = new NineSlicePlane(
            Texture.from("normalCartelito"),
            10,10,10,10
        )
        const escalaC = 0.25;
        cartel.width = (tablero.width*escalaT)*2;
        cartel.height = (tablero.height*escalaT)/2;
        cartel.scale.set(escalaC);
        cartel.y = tablero.y-((cartel.height*escalaC)/3);
        cartel.x = (windowx-(cartel.width*escalaC))/2;
        
        const titulo = new Text("Nivel X", {fontSize: 40, fill: 0x54d16e});
        titulo.x = cartel.x+(titulo.width/2)-5;
        titulo.y = cartel.y+(titulo.height/2)-10;
        
        const estrella1: Objeto = new Objeto("normalEstrellaL",
                                            tablero.x+(tablero.width*escalaT*2/9),
                                            tablero.y+(tablero.height*escalaT/5),
                                            0.05,0.05,-20);
        const estrella2: Objeto = new Objeto("normalEstrellaL",
                                            tablero.x+(tablero.width*escalaT/2),
                                            tablero.y+(tablero.height*escalaT/6),
                                            0.05,0.05,0);
        const estrella3: Objeto = new Objeto("normalEstrellaV",
                                            tablero.x+(tablero.width*escalaT*7/9),
                                            tablero.y+(tablero.height*escalaT/5),
                                            0.2,0.2,20);
        

        this.addChild(tablero);
        this.addChild(cartel);
        this.addChild(titulo);
        this.addChild(estrella1);
        this.addChild(estrella2);
        this.addChild(estrella3);
    }
}