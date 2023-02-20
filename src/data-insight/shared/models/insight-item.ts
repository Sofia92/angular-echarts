export class InsightItem {
  public id: number;
  public expression: string;
  public result = {};
  public percentageValue: number;
  public styles = { hover: false, selected: false };
  public editState: boolean = false;

  constructor(itemMeta) {
    Object.assign(this, { ...itemMeta });
  }

  public setPercentageValue(percentageValue) {
    this.percentageValue = percentageValue;
  }

  public setActiveStyles() {
    this.styles.hover = true;
    this.styles.selected = true;
  }
  public clearActiveStyles() {
    this.styles.hover = false;
    this.styles.selected = false;
  }
  public setHoverActive() {
    this.styles.hover = true;
  }
  public clearHoverActive() {
    this.styles.hover = false;
  }
}
