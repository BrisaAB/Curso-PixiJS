import { Application, Loader} from 'pixi.js'
import { assets } from './assets';
import { Scene } from './Scenes/Scene';
import { Cartel } from './Scenes/Cartel';
import { Keyboard } from './utils/keyboard';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
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
	const cartelNivel = new Cartel(app.screen.width,app.screen.height);
	app.stage.addChild(cartelNivel);
})

Loader.shared.load();