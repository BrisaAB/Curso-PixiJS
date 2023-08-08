import { AnimatedSprite, Container, Graphics, Texture} from "pixi.js";
import { IUpdateable } from "../utils/Updateable";
import { Keyboard } from "../utils/Keyboard";

export class TickerScene extends Container implements IUpdateable{
    private fishAnimated:AnimatedSprite;

    private endLine: number = 100;
    private  line : Graphics = new Graphics();
    constructor(){
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

        this.fishAnimated.play(); 
        this.fishAnimated.animationSpeed = 0.2;
        this.fishAnimated.scale.set(0.7);
        this.fishAnimated.position.set(100,300); 

        this.line.lineStyle({color: 0x000000, width: 5, alpha: 1});
        this.line.moveTo(0,0);
        this.line.lineTo(0,this.endLine);
        
        this.addChild(this.fishAnimated);
        this.addChild(this.line);
        //Ticker.shared.add(this.update,this);
    }
    update(_deltaTime: number, _deltaFrame: number): void {
        if(Keyboard.state.get("ArrowUp")&&this.endLine>100){
            this.endLine --;
        }else{
            if(Keyboard.state.get("ArrowDown")){
                this.endLine ++;
            }
        }
        this.fishAnimated.update(_deltaFrame);
        this.line.clear();
        this.line.lineStyle({color: 0x000000, width: 5, alpha: 1});
        this.line.moveTo(0,0);
        this.line.lineTo(0,this.endLine);
        console.log("El final es ", this.endLine);
        //throw new Error("Method not implemented.");
    }
}