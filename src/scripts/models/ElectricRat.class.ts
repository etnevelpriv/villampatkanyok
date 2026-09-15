import type { ElectricRat_Interface } from "./ElectricRat.interface";
export class ElectricRat implements ElectricRat_Interface {
    name: string;
    atk: number;
    hp: number;
    constructor(name: string, atk: number, hp: number) {
        if (typeof name != "string" || name.trim() == "" || name.length > 50) {
            throw new Error(`A név nincs megfelelően megadva: ${name}`)
        };
        if (typeof atk != "number" || atk == null || atk < 10 || atk > 20) {
            throw new Error(`A támadás nincs megfelelően megadva: ${atk}`)
        };
        if (typeof hp != "number" || hp == null || hp < 50 || hp > 100) {
            throw new Error(`Az élererő nincs megfelelően megadva: ${hp}`)
        };
        this.name = name;
        this.atk = atk;
        this.hp = hp;
    };
    toString() {
        return `Nev: ${this.name}, Tamadasero: ${this.atk}, Eletero: ${this.hp}`
    };
    toCSV() {
        // Ezt majd megcsinalom
    };
};