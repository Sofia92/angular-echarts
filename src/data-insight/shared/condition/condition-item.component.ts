import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
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

  constructor(private _elf: ElementRef) {}

  @HostBinding('style.background-image')
  get width() {
    const defaultColor = 'rgba(221, 226, 231, 0.8)';
    const blankcolor = 'rgba(240, 242, 245, 0.5)';
    const { theme } = this.condition['parent'] || { theme: 'default' };
    const option = {
      first: 'rgba(219, 234, 255, 0.8)',
      second: 'rgba(230, 255, 252, 0.8)',
      third: '#FCF2DD',
      default: 'rgba(221, 226, 231, 0.8)',
    };
    const { hover, selected } = this.condition.styles;
    const bg1 = !hover && !selected ? defaultColor : option[theme];

    return `linear-gradient(to right,
      ${bg1} ${this.condition.percentageValue}%,
       ${blankcolor} ${this.condition.percentageValue}% 80%
     )`;
  }

  @HostListener('mouseover')
  mouseover() {
    if (!this.condition['parent']?.styles.selected) {
      this.condition.setHoverActive();
    }
  }

  @HostListener('mouseout')
  mouseout() {
    if (!this.condition['parent']?.styles.selected) {
      this.condition.clearHoverActive();
    }
  }
}
