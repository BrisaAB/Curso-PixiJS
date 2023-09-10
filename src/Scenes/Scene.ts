import { Container} from "pixi.js";
import { TerryCania } from "../game/TerryCania";
import { Fondo } from "../game/Fondo";

export class Scene extends Container{
    
    constructor(windowx: number, _windowy: number){
        super();

        //------------------- Agregar a Stage-----------------------
        const fondo: Fondo = new Fondo();	

        const terryCania: TerryCania = new TerryCania();
        terryCania.scale.set(0.60);
        terryCania.position.x = (windowx-terryCania.width)/2;

        this.addChild(fondo);
        this.addChild(terryCania);	
    }
}