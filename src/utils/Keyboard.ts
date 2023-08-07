export class Keyboard{
    public static readonly state: Map<string, boolean> = new Map();

    private constructor(){}

    private static initialized:boolean = false;
    public static initialize():void{
        if(Keyboard.initialized){
            return;
        }
        Keyboard.initialized = true;
        document.addEventListener("keydown",Keyboard.onKeyDown);
        document.addEventListener("keyup",Keyboard.onKeyUp);
    }

    private static onKeyDown(e: KeyboardEvent){
        Keyboard.state.set(e.code,true);
    }

    private static onKeyUp(e: KeyboardEvent){
        Keyboard.state.set(e.code,false);
    }
}