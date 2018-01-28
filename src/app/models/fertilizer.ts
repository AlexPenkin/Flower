import { IComposition, Composition } from './composition';

export interface IFertilizer {
  ID?: number;
  amount: number;
  requiredAmount: number;
  name: string;
  vendor: string;
  composition: IComposition;
}

export class Fertilizer implements IFertilizer {
  name: string;
  composition: IComposition;
  constructor(
    public ID: number = 0,
    name: string,
    public vendor: string = '',
    composition?: IComposition,
    public category: string = '',
    public amount: number = 1,
    public requiredAmount: number = 1
  ) {
    this.name = name;
    this.composition = composition || new Composition();
  }
}
