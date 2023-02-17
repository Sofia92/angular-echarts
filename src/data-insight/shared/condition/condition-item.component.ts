import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'data-insight-condition-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './condition-item.component.html',
  styleUrls: ['./condition.scss']
})
export class DataInsightConditionItem {
  @Input() condition: string;
}
