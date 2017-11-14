import { Element, N, P, K, Ca, Mg, Fe, S, B, Co, Cu, Mn, Mo,  Zn } from './Elements';

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
    N = new N(0);
    P = new P(0);
    K = new K(0);
    Ca = new Ca(0);
    Mg = new Mg(0);
    S = new S(0);
    Fe = new Fe(0);
    B = new B(0);
    Co = new Co(0);
    Cu = new Cu(0);
    Mn = new Mn(0);
    Mo = new Mo(0);
    Zn = new Zn(0);
    constructor(composition?: IComposition) {
        if (composition) {
            for (const key in composition) {
                if (composition[key]) {
                    this[key] = composition[key];
                }

            }
        }
    }
}
