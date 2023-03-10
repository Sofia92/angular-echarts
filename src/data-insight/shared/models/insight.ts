import { InsightGroup } from './insight-group';
import { InsightCondition } from './insight-condition';

export class Insight {
  public id;
  public name;
  public conditionGroups: InsightGroup[] = [];
  public currentGroup: InsightGroup;
  public currentCondition: InsightCondition;

  constructor(insightMeta) {
    const { id, name, conditionGroups = [] } = insightMeta;
    Object.assign(this, { id, name });

    this.conditionGroups = conditionGroups.map(
      (c, i) => new InsightGroup(c, i)
    );
  }
  public createGroup() {
    const group = new InsightGroup({ name: '组1' }, 0);
    this.conditionGroups = [group];
    this.setCurrentGroup(group);
  }

  public setCurrentGroup(group: InsightGroup) {
    if (group) {
      this.currentGroup?.clearActiveStyles();
      this.setCurrentCondition(
        group,
        group.conditions[group.conditions.length - 1]
      );
      this.currentGroup.setActiveStyles();
    }
  }

  public setCurrentCondition(group: InsightGroup, condition: InsightCondition) {
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
      const condition = new InsightCondition(c);
      condition['parent'] = insightGroup;
      return condition;
    });
    this.conditionGroups.push(insightGroup);
    this.setCurrentGroup(insightGroup);
  }
}
