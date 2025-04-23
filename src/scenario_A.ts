class Parametre {
    private static _instance: Parametre;
    private _value: number;

    private constructor(value = 50) {
        this.value = value
    }

    public static get instance() {
        if (this._instance == null)
        {
            this._instance = new Parametre()
        }
        return this._instance;
    }

    public set value(number: number) {
        if(number<0 || number >100) {
            throw new Error("la valeur doit être un pourcentage")
        } else {
            this._value = number;
        }
    }

    public get value(): number {
        return this._value;
    }
}

let parametreAudio = Parametre.instance
let parametreGraphic = Parametre.instance

parametreAudio.value = 18