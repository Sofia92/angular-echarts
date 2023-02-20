import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { InsightGroup } from '../models';
import { Insight } from '../models/insight';
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
  @Input() public insight: Insight;

  constructor(private _elf: ElementRef) {}

  public setSelectedCondition(condition) {
    this.insight.setCurrentCondition(this.conditionGroup, condition);
    // this.currentCondition?.clearActiveStyles();
    // this.currentCondition = condition;
  }

  @HostListener('mouseover')
  mouseover() {
    if (!this.conditionGroup.styles.selected) {
      this.conditionGroup.setHoverActive();
    }
  }

  @HostListener('mouseout')
  mouseout() {
    if (!this.conditionGroup.styles.selected) {
      this.conditionGroup.clearHoverActive();
    }
  }
}
