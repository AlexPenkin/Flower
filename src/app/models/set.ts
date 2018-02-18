import { Fertilizer, IFertilizer } from './fertilizer';
import { Composition } from './composition';

import * as elements from './Elements';

export interface IFertilizerList {
    ID?: number;
    name: string;
    culture: string;
    litrage: number;
    fertilizers: IFertilizer[];
    reciepts?: number;
    result: Composition;
    add(fert: Fertilizer);
}

export class FertilizerList implements IFertilizerList {
    result = new Composition();
    constructor(
        public name: string,
        public ID: number = 0,
        public fertilizers: Fertilizer[] = [],
        public culture: string = 'green',
        public litrage: number = 1,
        public reciepts: number = 2,
    ) {}

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
                return console.error(
                    `${fert.name}: Запись с таким именем уже имеется`
                );
            }
            this.fertilizers.push(fert);
        }
    }


}
