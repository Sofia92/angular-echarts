import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InsightGroup } from '../models';
import { DataInsightConditionItem } from './condition-item.component';

@Component({
  selector: 'data-insight-condition-group',
  standalone: true,
  imports: [CommonModule, DataInsightConditionItem],
  templateUrl: './condition-group.component.html',
  styleUrls: ['./condition.scss'],
})
export class DataInsightConditionGroup {
  @Input() public conditionGroup: InsightGroup;
  public currentCondition;
  ;


  constructor() {}

  public setSelectedCondition(condition) {
    this.currentCondition = condition;
  }
}
