import { Element, N, P, K } from './Elements';

export interface IComposition {
    N: Element;
    P: Element;
    K: Element;
}

export class Composition implements IComposition {
    N = new N(0);
    P = new P(0);
    K = new K(0);
    constructor(composition?: { N?, P?, K?}) {
        if (composition) {
            this.N = composition.N;
            this.P = composition.P;
            this.K = composition.K;
        }
    }
}
