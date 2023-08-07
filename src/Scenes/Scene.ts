import { Container} from "pixi.js";
import { TerryCania } from "../game/TerryCania";
import { Pez } from "../game/Pez";
import { Fondo } from "../game/Fondo";

export class Scene extends Container{
    constructor(windowx: number, windowy: number){
        super();
            //---- Transformaciones Peces (rotaciones y escalados) ----
        const pez1: Pez = new Pez(0.05,0.05,windowx*3/4,windowy*3/4,-20);
        const pez2: Pez = new Pez((-0.035),0.035,(windowx/3),(windowy/2),20);
        const pez3: Pez = new Pez(0.02,0.02,(windowx*3/8),(windowy*3/4),5);
        
        //------------------- Agregar a Stage-----------------------
        const fondo: Fondo = new Fondo();	

        const terryCania: TerryCania = new TerryCania();
        terryCania.scale.set(0.60);
        terryCania.position.x = (windowx-terryCania.width)/2;

        this.addChild(fondo);
        this.addChild(terryCania);	
        this.addChild(pez1);	
        this.addChild(pez2);
        this.addChild(pez3);	
    }
}