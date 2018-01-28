import { Injectable } from '@angular/core';
import { FertilizerList } from '../models/set';
import { Composition } from '../models/composition';
import * as Elements from '../models/Elements';

@Injectable()
export class CalcluationService {
    constructor() {}

    calculateResultComposition(list: FertilizerList): Composition {
        return list.fertilizers.reduce((acc, curr) => {
            for (const key in acc) {
                if (acc[key] instanceof Elements.Element) {
                    acc[key].nutrient +=
                        curr.composition[key].nutrient * curr.amount;
                    acc[key].weightProportion +=
                        curr.composition[key].weightProportion * curr.amount;
                }
            }
            curr.requiredAmount = curr.amount * list.litrage;
            return acc;
        }, new Composition({ N: new Elements.N(0), P: new Elements.P(0), K: new Elements.K(0) }));
    }
}
