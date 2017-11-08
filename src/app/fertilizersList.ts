import { Fertilizer, IFertilizer } from './fertilizer';
import * as Elements from './Elements';

export interface IFertilizerList {
    name: string;
    culture: string;
    litrage: number;
    list: Fertilizer[];
    reciepts: any;
    calc(): Elements.Element[];
    add(fert: Fertilizer);
}

export class FertilizerList implements IFertilizerList {
    name: string;
    culture = 'green';
    reciepts = [];
    list = [];
    litrage: number;
    constructor(name: string) {
        this.name = name;
    }

    add(fert) {
        if (fert && Array.isArray(fert)) {
            this.list = [...this.list, ...fert];
        } else {
            this.list.push(fert);
        }
    }

    calc() {
        return this.list.reduce((acc, curr) => {
            for (const key in acc) {
                if (acc.hasOwnProperty(key)) {
                    acc[key].nutrient += curr.composition[key].nutrient;
                }
            }
            return acc;
        }, { N: new Elements.N(0), P: new Elements.P(0), K: new Elements.K(0) });
    }
}
