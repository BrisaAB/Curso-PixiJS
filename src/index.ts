import { Application, Container, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});
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

//const myLoader =new Loader();


Loader.shared.add({url:"./terry.png", name:"normalTerry"});
Loader.shared.add({url:"./caña.png", name:"normalcania"});
Loader.shared.add({url:"./cielo.jpg", name:"normalCielo"});
Loader.shared.add({url:"./fondoAgua.jpg", name:"normalAgua"});
Loader.shared.add({url:"./fondoTierraEditado.png", name:"normalTierra"});
Loader.shared.add({url:"./Pez.png", name:"normalPez"});

Loader.shared.onComplete.add(()=>{
	//-------- Transformaciones TERRY-----------------------
	//const clampy: Sprite = Sprite.from("./clampy.png");
	const terry: Sprite = Sprite.from("normalTerry");
	console.log("Hola mundo!");
	console.log("Width: ", terry.width,"Height: ", terry.height);
	//terry.anchor.set(0.5);

	//terry.x = app.screen.width / 2;
	//terry.y = app.screen.height-(terry.height)/2;

	const cania: Sprite = Sprite.from("normalcania");
	cania.y = 45;
	cania.x = 80;
	cania.scale.set(0.50,0.50);
	
	//-------- Transformaciones CIELO-----------------------
	const cielo: Sprite = Sprite.from("normalCielo");

	//-------- Transformaciones AGUA-----------------------
	const agua: Sprite = Sprite.from("normalAgua");
	const aguaYscale = 0.75;
	agua.y = app.screen.height-(agua.height*aguaYscale);
	agua.scale.set(1,aguaYscale);

	//-------- Transformaciones TIERRA-----------------------
	const tierra: Sprite = Sprite.from("normalTierra");
	
	const tierraYscale = 0.5;
	tierra.y = app.screen.height-(agua.height*aguaYscale)-(tierra.height*tierraYscale)-(tierra.height*tierraYscale)/4;
	console.log("screenHeight: " + app.screen.height);
	console.log("aguaNewHeight: " + agua.height*aguaYscale);
	tierra.scale.set(1,tierraYscale);
	//---- Transformaciones Peces (rotaciones y escalados) ----
	const pez1: Sprite = Sprite.from("normalPez");
	pez1.scale.set(0.05);
	pez1.y = app.screen.height*3/4;
	pez1.x = app.screen.width*3/4;
	pez1.angle = -20;
	const pez2: Sprite = Sprite.from("normalPez");
	pez2.y = app.screen.height/2;
	pez2.x = app.screen.width/4;
	pez2.angle = 20;
	pez2.scale.set(-0.035,0.035);
	const pez3: Sprite = Sprite.from("normalPez");
	pez3.scale.set(0.02);
	pez3.y = app.screen.height*3/4;
	pez3.x = app.screen.width*3/8;
	pez3.angle = 5;




	//------------------- CONTENEDORES-----------------------
	const fondo: Container = new Container();	
	fondo.addChild(cielo);	
	fondo.addChild(agua);	
	fondo.addChild(tierra);

	const terryCania: Container = new Container();
	terryCania.addChild(terry);
	terryCania.addChild(cania);
	terryCania.scale.set(0.60);
	terryCania.position.x = (app.screen.width-terryCania.width)/2;

	app.stage.addChild(fondo);
	app.stage.addChild(terryCania);	
	app.stage.addChild(pez1);	
	app.stage.addChild(pez2);
	app.stage.addChild(pez3);	
})

Loader.shared.load();