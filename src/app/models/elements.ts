export interface IElement {
    MolarMass: number;
    weightProportion: number;
    nutrient: number;
    calcNutrient(): number;
    calcWeightProportion(): number;
}

export class Element implements IElement {
    MolarMass: number;
    weightProportion: number;
    nutrient: number;

    calcNutrient(): number {
        return this.weightProportion;
    }

    calcWeightProportion(): number {
        return this.nutrient;
    }
}

export class N extends Element {
    MolarMass = 14.0067;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = value;
    }

    calcNutrient(): number {
        return this.weightProportion;
    }

    calcWeightProportion(): number {
        return this.nutrient;
    }
}

export class P extends Element {
    MolarMass = 30.973762;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }

    calcNutrient() {
        return this.weightProportion * 0.43;
    }

    calcWeightProportion() {
        return this.nutrient / 0.43;
    }
}

export class K extends Element {
    MolarMass = 39.0983;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }

    calcNutrient() {
        return this.weightProportion * 0.82;
    }

    calcWeightProportion() {
        return this.nutrient / 0.82;
    }
}

