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
}
