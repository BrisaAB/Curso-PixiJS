import { Container, Sprite } from "pixi.js";

export class Fondo extends Container{
    constructor(){
        super();
        //-------- Transformaciones CIELO-----------------------
	const cielo: Sprite = Sprite.from("normalCielo");

	//-------- Transformaciones AGUA-----------------------
	const agua: Sprite = Sprite.from("normalAgua");
	const aguaYscale = 0.75;
	agua.y = cielo.height-(agua.height*aguaYscale);
	agua.scale.set(1,aguaYscale);

	//-------- Transformaciones TIERRA-----------------------
	const tierra: Sprite = Sprite.from("normalTierra");
	
	const tierraYscale = 0.5;
	tierra.y = cielo.height-(agua.height*aguaYscale)-(tierra.height*tierraYscale)-(tierra.height*tierraYscale)/4;
	console.log("screenHeight: " + cielo.height);
	console.log("aguaNewHeight: " + agua.height*aguaYscale);
	tierra.scale.set(1,tierraYscale);
    this.addChild(cielo);	
	this.addChild(agua);	
	this.addChild(tierra);
    }
}