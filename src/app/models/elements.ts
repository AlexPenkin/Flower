export interface IElement {
    molarMass: number;
    weightProportion: number;
    nutrient: number;
    calcNutrient(): number;
    calcWeightProportion(): number;
}

export class Element implements IElement {
    molarMass: number;
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
    molarMass = 14.0067;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = value;
    }
}

export class P extends Element {
    molarMass = 30.973762;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}

export class K extends Element {
    molarMass = 39.0983;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}

export class Ca extends Element {
    molarMass = 40.078;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}

export class Mg extends Element {
    molarMass = 24.307;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}

export class S extends Element {
    molarMass = 32.059;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}

export class Fe extends Element {
    molarMass = 55.847;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}


export class B extends Element {
    molarMass = 10.806;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}

export class Mn extends Element {
    molarMass = 54.938045;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}

export class Zn extends Element {
    molarMass = 65.38;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}

export class Cu extends Element {
    molarMass = 63.546;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}

export class Co extends Element {
    molarMass = 58.933194;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}

export class Mo extends Element {
    molarMass = 95.96;
    weightProportion = 0;
    nutrient = 0;
    constructor(value: number) {
        super();
        this.weightProportion = value;
        this.nutrient = this.calcNutrient();
    }
}
