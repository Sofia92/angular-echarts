import { InsightItem } from './insight-item';

export class InsightGroup {
  public id: number;
  public name: string;
  public conditions = [];
  private groupIndex: number;

  constructor(groupMeta, groupIndex: number) {
    const { id, name, conditions = [] } = groupMeta;
    Object.assign(this, { id, name, groupIndex: groupIndex });

    this.conditions = conditions.map((c) => {
      const condition = new InsightItem(c);
      condition['parent'] = this;
      return condition;
    });
    this.calcConditionPercentage();
  }

  public get indexAttr() {
    return {
      first: !this.groupIndex,
      second: !!this.groupIndex && this.groupIndex == 1,
      third: !!this.groupIndex && this.groupIndex == 2,
    };
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
          const pv = currTotal / total;
          c.setPercentageValue(pv);
        });
    }
  }
}
