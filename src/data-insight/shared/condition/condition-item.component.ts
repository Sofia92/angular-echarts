import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { InsightItem } from '../models/insight-item';

@Component({
  selector: 'data-insight-condition-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './condition-item.component.html',
  styleUrls: ['./condition.scss'],
  host: {
    '[attr.percentageValue]': 'condition.percentageValue',
  },
})
export class DataInsightConditionItem {
  @Input() condition: InsightItem;
  @Input() result: { people: number; emr: number };

  @HostBinding('style.background-image') get width() {
    return `linear-gradient(to right,
    rgba(219, 234, 255, 0.8) ${this.condition.percentageValue}%,
       #ffffff ${this.condition.percentageValue}% 80%
     )`;
  }
}
