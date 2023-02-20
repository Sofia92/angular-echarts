import { InsightGroup } from './insight-group';
import { InsightItem } from './insight-item';

export class Insight {
  public id;
  public name;
  public conditionGroups: InsightGroup[] = [];
  public currentGroup: InsightGroup;
  public currentCondition: InsightItem;

  constructor(insightMeta) {
    const { id, name, conditionGroups = [] } = insightMeta;
    Object.assign(this, { id, name });

    this.conditionGroups = conditionGroups.map(
      (c, i) => new InsightGroup(c, i)
    );
  }

  public setCurrentGroup(group: InsightGroup) {
    this.currentGroup?.clearActiveStyles();
    this.setCurrentCondition(
      group,
      group.conditions[group.conditions.length - 1]
    );
    this.currentGroup.setActiveStyles();
  }

  public setCurrentCondition(group: InsightGroup, condition: InsightItem) {
    this.currentGroup = group;
    this.currentCondition = condition;
  }

  public copyToCreateNewGroup() {
    const name = `组${this.conditionGroups.length + 1}_备份`;
    const conditionsBak = [];
    const insightGroup = new InsightGroup(
      { name, conditions: conditionsBak },
      this.conditionGroups.length - 1
    );

    this.currentGroup.conditions.forEach((c) => {
      delete c['parent'];

      conditionsBak.push(JSON.parse(JSON.stringify(c)));
    });
    insightGroup.conditions = conditionsBak.map((c) => {
      const condition = new InsightItem(c);
      condition['parent'] = insightGroup;
      return condition;
    });
    this.conditionGroups.push(insightGroup);
    this.setCurrentGroup(insightGroup);
  }
}
