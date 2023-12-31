import { Application, Loader, Ticker} from 'pixi.js'
import { assets } from './assets';
import { Scene } from './Scenes/Scene';
//import { Cartel } from './Scenes/Cartel';
import { Keyboard } from './utils/Keyboard';
import { TickerScene } from './Scenes/TickerScene';
//import { DvdScene } from './Scenes/DvdScene';

export const WHIDTH = 1280;
export const HEIGHT = 720;
const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x000000 /*0x6495ed*/,
	width: WHIDTH,
	height: HEIGHT
});

Keyboard.initialize();
window.addEventListener("resize",()=>{
		console.log("resized");
		//-------------TAMANO DEL JUEGO-------------------
		//Calculo las escalas en X y en Y dividiendo el ancho y 
		//alto real de la pantalla(window.inner...) por el ancho
		// y alto definido para la imagen(app.screen...)
		const scaleX = window.innerWidth/app.screen.width;
		const scaleY = window.innerHeight/app.screen.height;
		const scale = Math.min(scaleX,scaleY);

		const gameWidth = app.screen.width*scale;
		const gameHeight = app.screen.height*scale;

		app.view.style.width = gameWidth + "px";
		app.view.style.height = gameHeight + "px";
		//-----------POSICION DEL JUEGO--------------------

		const marginHorizontal = (window.innerWidth - gameWidth)/2;
		const marginVertical = (window.innerHeight - gameHeight)/2;

		app.view.style.marginLeft = marginHorizontal + "px";
		app.view.style.marginRight = marginHorizontal + "px";

		app.view.style.marginTop = marginVertical + "px";
		app.view.style.marginBottom = marginVertical + "px";
})
window.dispatchEvent(new Event("resize"));

Loader.shared.add(assets)

Loader.shared.onComplete.add(()=>{	
	const myScene = new Scene(app.screen.width, app.screen.height);
	app.stage.addChild(myScene)
	const TScene = new TickerScene(app.screen.width, app.screen.height);
	TScene.x = 733;
	TScene.y = 50;
	app.stage.addChild(TScene);
	//const cartelNivel = new Cartel(app.screen.width,app.screen.height);
	//app.stage.addChild(cartelNivel);
	//const myDVD = new DvdScene();
	//app.stage.addChild(myDVD);
	Ticker.shared.add(function(deltaFrame){
		TScene.update(Ticker.shared.deltaMS, deltaFrame);
		
		//myDVD.update(Ticker.shared.deltaMS,deltaFrame);
	})
})

Loader.shared.load();