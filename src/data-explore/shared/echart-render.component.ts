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

@Component({
  selector: 'bc-echart-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './echart-render.component.html',
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
  @Input() public chartPieData;
  @Input() public chartPictorialBarData;
  public myChart;

  constructor(private _elf: ElementRef) {}

  public ngOnChanges(changes: SimpleChanges) {
    const { chartPieData, chartPictorialBarData } = changes;
    if (chartPieData) {
      this.myChart = !!this.myChart || this.getMyChart();
      this.myChart.setOption(this.pieOption(this.chartPieData));
    }
    if (chartPictorialBarData) {
      const r = [];
      [...this.chartPictorialBarData.keys()].forEach((name) => {
        r.push({
          name: name,
          type: 'pictorialBar',
          label: labelSetting,
          symbolRepeat: true,
          barGap: '5px',
          symbolSize: ['6.21', '16'],
          data: [
            {
              value: this.chartPictorialBarData.get(name),
              symbol: pathSymbols.car,
            },
          ],
        });
      });
      console.log(r);
      this.myChart = !!this.myChart || this.getMyChart();
      this.myChart.setOption(
        this.pictorialBarOption(this.chartPictorialBarData, r)
      );
    }
  }

  public ngOnInit() {
    this.myChart = this.getMyChart();
  }

  private getMyChart() {
    return echarts.init(this._elf.nativeElement, EchartTheme);
  }
  private pieOption = (dataMap) => {
    return {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'bottom',
        itemGap: 10,
        padding: 2,
        textStyle: {
          color: '#4D4D4D',
          fontSize: 12,
          fontFamily: 'Source Han Sans CN',
          fontStyle: 'normal',
          fontWeight: 400,
        },
        formatter: (name) => {
          const str = `<span><i>${name}</i><i>${
            dataMap?.get(name).value
          } 份</i></span>`;
          return str;
        },
      },
      series: [
        {
          name: '病历数',
          type: 'pie',
          // radius: '50%',
          radius: ['30%', '50%'],
          data: [...dataMap?.values()],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  };

  private pictorialBarOption = (dataMap, series) => {
    return {
      legend: {
        data: [...dataMap.keys()],
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        containLabel: true,
        left: 0,
        right: 80,
      },
      yAxis: {
        data: ['治愈'],
        inverse: true,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          margin: 20,
          fontSize: 14,
        },
        axisPointer: {
          label: {
            show: true,
            margin: 30,
          },
        },
      },
      xAxis: {
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      series,
      // series: () => {
      //   const r = [];
      //   [...dataMap.keys()].forEach((name) => {
      //     r.push({
      //       name: name,
      //       type: 'pictorialBar',
      //       label: labelSetting,
      //       symbolRepeat: true,
      //       symbolSize: ['6.21', '16'],
      //       data: [
      //         {
      //           value: dataMap.get(name),
      //           symbol: pathSymbols.car
      //         },
      //       ],
      //     });
      //   });
      //   return r;
      // },
    };
  };
}
