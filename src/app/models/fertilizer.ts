import { IComposition, Composition } from './composition';

export interface IFertilizer {
    ID?: number;
    amount: number;
    name: string;
    vendor: string;
    composition: IComposition;
}


export class Fertilizer implements IFertilizer {
    static ID = 1;
    ID: number;
    name: string;
    vendor: string;
    composition: IComposition;
    constructor(name: string, vendor?: string, composition?: IComposition, private _amount: number = 1) {
        this.name = name;
        this.ID = Fertilizer.ID++;
        this.vendor = vendor || '';
        this.composition = composition || new Composition();
    }

    set amount(value) {
        this._amount = value;
    }
    get amount() {
        return this._amount;
    }

}