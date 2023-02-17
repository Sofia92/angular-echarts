export class InsightItem {
  public id: number;
  public expression: string;
  public result = {};
  public percentageValue: number;

  constructor(itemMeta) {
    Object.assign(this, { ...itemMeta });
  }

  public setPercentageValue(percentageValue) {
    this.percentageValue = percentageValue;
  }
}
