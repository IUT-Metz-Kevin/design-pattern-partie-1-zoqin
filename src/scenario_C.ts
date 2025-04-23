interface ControlerActions {
    sauter();
    attaquer();
    interargir();
}

class Clavier {
    toucheEspace(){};
    clicGauche(){};
    clicDroit(){};
}

class ManetteXbox {
    boutonA(){};
    boutonB(){};
    boutonX(){};
}

class ManettePs5 {
    boutonX(){};
    boutonO(){};
    boutonTriangle(){};
}

class ClavierAdaptateur implements ControlerActions {
    private _clavier: Clavier;

    constructor(clavier: Clavier) {
        this._clavier = clavier
    }

    sauter() {
        this._clavier.toucheEspace()
    }

    attaquer() {
        this._clavier.clicGauche()
    }

    interargir() {
        this._clavier.clicDroit()
    }
}

class ManettePs5Adaptateur implements ControlerActions {
    private _manettePs5: ManettePs5;

    constructor(manettePs5: ManettePs5) {
        this._manettePs5 = manettePs5
    }

    sauter() {
        this._manettePs5.boutonX()
    }

    attaquer() {
        this._manettePs5.boutonO()
    }

    interargir() {
        this._manettePs5.boutonTriangle()
    }
}

class ManetteXboxAdaptateur implements ControlerActions {
    private _manetteXbox: ManetteXbox;

    constructor(manetteXbox: ManetteXbox) {
        this._manetteXbox = manetteXbox
    }

    sauter() {
        this._manetteXbox.boutonA()
    }

    attaquer() {
        this._manetteXbox.boutonB()
    }

    interargir() {
        this._manetteXbox.boutonX()
    }
}