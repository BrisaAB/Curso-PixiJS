import { AnimatedSprite, Container, Texture} from "pixi.js";
import { IUpdateable } from "../utils/Updateable";
import { Player } from "../game/Player";
//import { checkCollision } from "../game/IHitbox";
import { Pez } from "../game/Pez";

export class TickerScene extends Container implements IUpdateable{
    private fishAnimated:AnimatedSprite;
    private playerLine : Player = new Player();
    private fish : Pez[];
    constructor(windowx: number, windowy: number){
        super();
        //const line : Graphics = new Graphics();
        this.fishAnimated = new AnimatedSprite(
            [Texture.from("normalFish1"),
            Texture.from("normalFish2"),
            Texture.from("normalFish3"),
            Texture.from("normalFish4"),
            Texture.from("normalFish5"),
            Texture.from("normalFish6")],
            false
        )
        
        this.fish = [];

        //---- Transformaciones Peces (rotaciones y escalados) ----
        const pez1: Pez = new Pez(0.05,0.05,windowx*3/4-733,windowy*3/4,-20);
        const pez2: Pez = new Pez((-0.035),0.035,(windowx/3)-733,(windowy/2),20);
        const pez3: Pez = new Pez(0.02,0.02,(windowx*3/8)-733,(windowy*3/4),5);
        
        this.fish.push(pez1);
        this.fish.push(pez2);
        this.fish.push(pez3);

        this.fishAnimated.play(); 
        this.fishAnimated.animationSpeed = 0.2;
        this.fishAnimated.scale.set(0.7);
        this.fishAnimated.position.set(100,300); 

       
        this.addChild(this.fishAnimated);
        //Ticker.shared.add(this.update,this);
        this.addChild(this.playerLine);
        
        this.addChild(pez1);	
        this.addChild(pez2);
        this.addChild(pez3);	
        //this.addChild(this.fish[0])
    }
    update(_deltaTime: number, _deltaFrame: number): void {
        this.fishAnimated.update(_deltaFrame);
        this.playerLine.update(_deltaTime);
        //for(let pez of this.fish)
        //console.log(checkCollision(this.playerLine,pez))
    }
}