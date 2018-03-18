export class Inputs {
  constructor(
    public investment: number, 
    public upFrontCosts: number,
    public monthlyCosts: number,
    public pricePerMachine: number,
    public powerCostPerMachine: number,
    public currentNumberOfMachines: number
  ) {}
}
