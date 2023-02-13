import 'zone.js/dist/zone';
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';
import * as EchartTheme from './customed.json';
import { labelSetting, pathSymbols } from './symbols';
import {
  barOption,
  pieOption,
  pieDoughnutOption,
} from './echart-option-getter';

@Component({
  selector: 'bc-echart-render',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styles: [
    `
  :host{
    width: 100%;
    height: 100%
  }
  `,
  ],
})
export class EchartRender implements OnChanges, OnInit {
  @Input() public chart: { config: any; data: any };
  @Input() public chartPieData;
  @Input() public chartPictorialBarData;
  public myChart;

  constructor(private _elf: ElementRef) {}

  public ngOnInit() {
    this.myChart = echarts.init(this._elf.nativeElement, EchartTheme);
  }
  public ngOnChanges(changes: SimpleChanges) {
    const { chart, chartPieData, chartPictorialBarData } = changes;
    if (chart) {
      const { config, data } = this.chart;

      this.myChart =
        this.myChart || echarts.init(this._elf.nativeElement, EchartTheme);
      switch (config.type) {
        case 'pie':
          this.myChart.setOption(pieOption(data));
          break;
        case 'pie-doughnut':
          this.myChart.setOption(pieDoughnutOption(data));
          break;
        case 'bar':
          this.myChart.setOption(barOption(data));
          break;
      }
    }

    // if (chartPictorialBarData) {
    //   const r = [];
    //   [...this.chartPictorialBarData.keys()].forEach((name) => {
    //     r.push({
    //       name: name,
    //       type: 'pictorialBar',
    //       label: labelSetting,
    //       symbolRepeat: true,
    //       symbolMargin: '5%',
    //       symbolClip: true,
    //       symbolSize: 12,

    //       barGap: '14px',
    //       barCategoryGap: '40%',
    //       // symbolSize: ['6.21', '16'],
    //       data: [
    //         {
    //           value: this.chartPictorialBarData.get(name),
    //           symbol: pathSymbols.car,
    //         },
    //         {
    //           value: this.chartPictorialBarData.get(name),
    //           symbol: pathSymbols.car,
    //         },
    //       ],
    //     });
    //   });
    //   console.log(r);
    //   this.myChart.setOption(
    //     this.pictorialBarOption(this.chartPictorialBarData, r)
    //   );
    // }
  }
}
