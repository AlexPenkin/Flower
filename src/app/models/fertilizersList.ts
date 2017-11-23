import { Fertilizer, IFertilizer } from './fertilizer';
import { Composition } from './composition';
import * as elements from './Elements';

export interface IFertilizerList {
  ID?: number;
  name: string;
  culture: string;
  litrage: number;
  fertilizers: Fertilizer[];
  reciepts?: number;
  result: Composition;
  calc(): Composition;
  add(fert: Fertilizer);
}

export class FertilizerList implements IFertilizerList {
  static ID = 1;
  result = new Composition();
  ID: number;
  constructor(
    public name: string,
    public fertilizers: Fertilizer[] = [],
    public culture: string = 'green',
    public litrage: number = 1,
    public reciepts: number = 2
  ) {
    this.name = name;
    this.ID = FertilizerList.ID++;
  }

  get(): Fertilizer[] {
    return this.fertilizers;
  }

  add(fert: any) {
    if (fert && Array.isArray(fert)) {
      this.fertilizers = [...this.fertilizers, ...fert];
    } else {
      if (
        this.fertilizers &&
        this.fertilizers.some(value => value.name === fert.name)
      ) {
        return console.error(`${fert.name}: Запись с таким именем уже имеется`);
      }
      this.fertilizers.push(fert);
    }
    this.result = this.calc();
  }

  calc(): Composition {
    return this.fertilizers.reduce((acc, curr) => {
      for (const key in acc) {
        if (acc[key] instanceof elements.Element) {
          acc[key].nutrient += curr.composition[key].nutrient * curr.amount;
          acc[key].weightProportion +=
            curr.composition[key].weightProportion * curr.amount;
        }
      }
      curr.requiredAmount = curr.amount * this.litrage;
      return acc;
    }, new Composition({ N: new elements.N(0), P: new elements.P(0), K: new elements.K(0) }));
  }
}
