interface EntrepriseComponent {
    get nom(): string;
}

class Employee implements EntrepriseComponent {
    private _nom: string;
    private _prenom: string;
    private _salaire: number;
    private _job: string;

    constructor(nom: string, prenom: string, salaire : number, job: string) {
        this._nom = nom;
        this._prenom = prenom;
        this._salaire = salaire;
        this._job = job;
    }

    get nom(): string{
        return this._nom+""+this._prenom;
    }
}

class Departement implements EntrepriseComponent {
    private _nom: string;
    private _listSuperviser: EntrepriseComponent[] = [];

    get nom(): string {
        return this._nom
    }

    add(component: EntrepriseComponent): void {
        this._listSuperviser.push(component)
    }
}