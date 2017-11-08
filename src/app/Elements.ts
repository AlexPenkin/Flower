export interface Element {
    MolarMass: number;
    weightProportion: number;
    nutrient: number;
}


export class N implements Element {
    MolarMass = 14.0067;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        this.weightProportion = value;
        this.nutrient = value;
    }
}

export class P implements Element {
    MolarMass = 30.973762;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        this.weightProportion = value;
        this.nutrient = value * 0.43;
    }
}

export class K implements Element {
    MolarMass = 39.0983;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        this.weightProportion = value;
        this.nutrient = value * 0.82;
    }
}

