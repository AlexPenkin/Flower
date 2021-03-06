export interface IElement {
  molarMass: number;
  weightProportion: number;
  nutrient: number;
  coefficient: number;
  calcNutrient(): number;
  calcWeightProportion(): number;
}

export class Element implements IElement {
  molarMass: number;
  weightProportion: number;
  nutrient: number;
  coefficient = 1;

  calcNutrient(): number {
    return this.weightProportion * this.coefficient;
  }

  calcWeightProportion(): number {
    return this.nutrient / this.coefficient;
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
  coefficient = 0.41;
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
  coefficient = 0.84;
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

export class Ni extends Element {
  molarMass = 58.6934;
  weightProportion = 0;
  nutrient = 0;
  constructor(value: number) {
    super();
    this.weightProportion = value;
    this.nutrient = this.calcNutrient();
  }
}

export class Al extends Element {
  molarMass = 26.981;
  weightProportion = 0;
  nutrient = 0;
  constructor(value: number) {
    super();
    this.weightProportion = value;
    this.nutrient = this.calcNutrient();
  }
}

export class Si extends Element {
  molarMass = 28.085;
  weightProportion = 0;
  nutrient = 0;
  constructor(value: number) {
    super();
    this.weightProportion = value;
    this.nutrient = this.calcNutrient();
  }
}

export class V extends Element {
  molarMass = 50.9415;
  weightProportion = 0;
  nutrient = 0;
  constructor(value: number) {
    super();
    this.weightProportion = value;
    this.nutrient = this.calcNutrient();
  }
}

export class Se extends Element {
  molarMass = 78.971;
  weightProportion = 0;
  nutrient = 0;
  constructor(value: number) {
    super();
    this.weightProportion = value;
    this.nutrient = this.calcNutrient();
  }
}
