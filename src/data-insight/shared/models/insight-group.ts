import { InsightCondition } from './insight-condition';

export class InsightGroup {
  public id: number;
  public name: string;
  public conditions = [];
  public theme;
  public styles = { hover: false, selected: false };

  constructor(groupMeta, groupIndex: number) {
    const { id, name, conditions = [] } = groupMeta;
    Object.assign(this, { id, name });

    this.conditions = conditions.map((c) => {
      const condition = new InsightCondition(c);
      condition['parent'] = this;
      return condition;
    });
    this.buildGroupTheme(groupIndex);
    this.calcConditionPercentage();
  }

  public buildGroupTheme(groupIndex) {
    switch (groupIndex) {
      case 0:
        this.theme = 'first';
        break;
      case 1:
        this.theme = 'second';
        break;
      case 2:
        this.theme = 'third';
        break;
    }
  }

  public calcConditionPercentage() {
    const firstCondition = this.conditions[0];
    if (!firstCondition) {
      return;
    } else {
      const {
        result: { people: total },
      } = firstCondition;
      firstCondition.setPercentageValue(100);
      this.conditions
        .filter((c) => c !== firstCondition)
        .forEach((c) => {
          const {
            result: { people: currTotal },
          } = c;
          const pv = (currTotal / total) * 100;
          c.setPercentageValue(pv);
        });
    }
  }

  public setActiveStyles() {
    this.styles.hover = true;
    this.styles.selected = true;
    this.conditions.forEach((condition) => condition.setActiveStyles());
  }
  public clearActiveStyles() {
    this.styles.hover = false;
    this.styles.selected = false;
    this.conditions.forEach((condition) => condition.clearActiveStyles());
  }
  public setHoverActive() {
    this.styles.hover = true;
    this.conditions.forEach((condition) => condition.setHoverActive());
  }
  public clearHoverActive() {
    this.styles.hover = false;
    this.conditions.forEach((condition) => condition.clearHoverActive());
  }
}
