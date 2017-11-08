import { IComposition, Composistion } from './composition';

export interface IFertilizer {
    name: string;
    vendor: string;
    composition: IComposition;
}


export class Fertilizer implements IFertilizer {
    name: string;
    vendor: string;
    composition: IComposition;
    constructor(name: string, vendor?: string, composition?: IComposition) {
        this.name = name;
        this.vendor = vendor || '';
        this.composition = composition || new Composistion();
    }
}
