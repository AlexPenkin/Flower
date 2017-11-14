import { Element, N, P, K, Ca, Mg, Fe, S, B, Co, Cu, Mn, Mo, Zn } from './Elements';
import * as elements from './Elements';

export interface IComposition {
    N?: Element;
    P?: Element;
    K?: Element;
    Ca?: Element;
    Mg?: Element;
    S?: Element;
    Fe?: Element;
    B?: Element;
    Co?: Element;
    Cu?: Element;
    Mn?: Element;
    Mo?: Element;
    Zn?: Element;
}

export class Composition implements IComposition {
    constructor(composition?: IComposition) {
        if (composition) {
            for (const key in elements) {
                if (key.length < 3) {
                    if (composition[key]) {
                        this[key] = new elements[key](composition[key].weightProportion);
                    } else {
                        this[key] = new elements[key](0);
                    }
                }
            }
        } else {
            for (const key in elements) {
                if (key.length < 3) {
                    this[key] = new elements[key](0);
                }
            }
        }
    }
}
