import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});
//const myLoader =new Loader();


Loader.shared.add({url:"./terry.png", name:"normalTerry"});

Loader.shared.onComplete.add(()=>{
	//const clampy: Sprite = Sprite.from("./clampy.png");
	const terry: Sprite = Sprite.from("normalTerry");
	console.log("Hola mundo!");
	console.log("Width: ", terry.width,"Height: ", terry.height);
	terry.anchor.set(0.5);

	terry.x = app.screen.width / 2;
	terry.y = app.screen.height-(terry.height)/2;

	app.stage.addChild(terry);	
})

Loader.shared.load();