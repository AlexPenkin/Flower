import { Fertilizer, IFertilizer } from './fertilizer';
import { Composition } from './composition';
import * as Elements from './Elements';

export interface IFertilizerList {
    ID?: number;
    name: string;
    culture: string;
    litrage: number;
    list: Fertilizer[];
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
        public list: Fertilizer[] = [],
        public culture: string = 'green',
        public litrage: number = 1,
        public reciepts: number = 2
    ) {
        this.name = name;
        this.ID = FertilizerList.ID++;
    }

    get(): Fertilizer[] {
        return this.list;
    }

    add(fert: any) {
        if (fert && Array.isArray(fert)) {
            this.list = [...this.list, ...fert];
        } else {
            if (this.list.length > 0 && this.list.some((value => value.name === fert.name))) {
                return console.error(`${fert.name}: Запись с таким именем уже имеется`);
            }
            this.list.push(fert);
        }
        this.result = this.calc();
    }

    calc(): Composition {
        const result: Composition = this.list.reduce((acc, curr) => {
            for (const key in acc) {
                if (acc[key] instanceof Elements.Element) {
                    acc[key].nutrient += curr.composition[key].nutrient * curr.amount;
                    acc[key].weightProportion += curr.composition[key].weightProportion  * curr.amount;
                    acc[key].nutrient = Math.floor(acc[key].nutrient);
                    acc[key].weightProportion = Math.floor(acc[key].weightProportion);
                }
            }
            return acc;
        }, new Composition({ N: new Elements.N(0), P: new Elements.P(0), K: new Elements.K(0) }));

        for (const key in result) {
            if (result[key] instanceof Elements.Element) {
                result[key].nutrient = Number(this.litrage) * Number(result[key].nutrient);
            }
        }
        return result;
    }
}
