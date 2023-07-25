import {Container, Sprite } from "pixi.js";

export class Pez extends Container{
    constructor(scalex: number,scaley: number,x: number,y: number,angle: number){
        super();
        const pez: Sprite = Sprite.from("normalPez");
        pez.scale.set(scalex,scaley);
        pez.y = y;
        pez.x = x;
        pez.angle = angle;
        this.addChild(pez);
    }
}