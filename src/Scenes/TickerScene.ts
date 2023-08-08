import { Container, Graphics, Ticker } from "pixi.js";
import { IUpdateable } from "../utils/Updateable";
import { Keyboard } from "../utils/Keyboard";

export class TickerScene extends Container implements IUpdateable{
    private endLine: number = 100;
    private  line : Graphics = new Graphics();
    constructor(){
        super();
        //const line : Graphics = new Graphics();

        this.line.lineStyle({color: 0x000000, width: 5, alpha: 1});
        this.line.moveTo(0,0);
        this.line.lineTo(0,this.endLine);

        this.addChild(this.line);
        Ticker.shared.add(this.update,this);
    }
    update(_deltaTime: number, _deltaFrame?: number | undefined): void {
        if(Keyboard.state.get("ArrowUp")&&this.endLine>100){
            this.endLine --;
        }else{
            if(Keyboard.state.get("ArrowDown")){
                this.endLine ++;
            }
        }
        this.line.clear();
        this.line.lineStyle({color: 0x000000, width: 5, alpha: 1});
        this.line.moveTo(0,0);
        this.line.lineTo(0,this.endLine);
        console.log("El final es ", this.endLine);
        //throw new Error("Method not implemented.");
    }
}