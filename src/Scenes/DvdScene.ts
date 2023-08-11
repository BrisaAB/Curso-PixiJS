import { Container, Sprite } from "pixi.js";
import { PhysicsContainer } from "../game/PhysicsContainer";
import { IUpdateable } from "../utils/Updateable";
import { HEIGHT, WHIDTH } from "..";

export class DvdScene extends Container implements IUpdateable{
    private dvd:Sprite = Sprite.from("normalDVD");
    private physDvd: PhysicsContainer;
    constructor(){
        super();
        this.physDvd = new PhysicsContainer();
        this.physDvd.scale.set(0.1);
        this.physDvd.speed.set(195);


        this.addChild(this.physDvd);

        this.physDvd.addChild(this.dvd);
    }
    update(deltaTime: number, _deltaFrame?: number | undefined): void {
        const dt = deltaTime/1000;
        this.physDvd.update(dt);
        if(this.physDvd.x+this.physDvd.width > WHIDTH){
            this.physDvd.x = WHIDTH - this.physDvd.width;
            this.physDvd.speed.x = -(this.physDvd.speed.x);

            this.dvd.tint = 0xFFAAAA;
        }else if (this.physDvd.x < 0){
            this.physDvd.x = 0;
            this.physDvd.speed.x = -(this.physDvd.speed.x);
            this.dvd.tint = 0xFFAAFF;
        }
        if(this.physDvd.y+this.physDvd.height > HEIGHT){
            this.physDvd.y = HEIGHT-this.physDvd.height;
            this.physDvd.speed.y = -(this.physDvd.speed.y);
            this.dvd.tint = 0x88FF88;
        }else if (this.physDvd.y < 0){
            this.physDvd.y = 0;
            this.physDvd.speed.y = -(this.physDvd.speed.y);
            this.dvd.tint = 0xAAAAFF;
        }
    }

}