class Parametre {
    private static _instance: Parametre

    private constructor() {}

    public static get instance() {
        if (this._instance == null)
        {
            this._instance = new Parametre()
        }
        return this._instance;
    }
}

let parametreAudio = Parametre.instance
let parametreGraphic = Parametre.instance