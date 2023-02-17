import { Component } from '@angular/core';

@Component({
  selector: 'data-insight-home',
  templateUrl: './data-insight-home.component.html',
  styleUrls: ['./data-insight-home.component.less'],
})
export class DataInsightHomeComponent {
  pieData = [
    { value: 1048, name: '对比组1' },
    { value: 735, name: '对比组2' },
    { value: 580, name: '对比组3' },
  ];

  public chartPieData = new Map(this.pieData.map((d) => [d.name, d]));
  public pictorialBarData = [
    { value: 9756, name: '对比组1' },
    { value: 5000, name: '对比组2' },
    { value: 6800, name: '对比组3' },
  ];

  public chartPictorialBarData = new Map(
    this.pictorialBarData.map((d) => [d.name, d.value])
  );

  public data = new Map([
    ['概览', { report: [259060], person: [122434] }],
    ['性别', { 男: [37272], 女: [2022] }],
    [
      '年龄',
      { '0-8': [37272], '18-45': [2022], '45-63': [2222], '>63': [212] },
    ],
  ]);

  public chartData = {
    summary: {
      config: {
        type: 'pie-doughnut',
      },
      data: new Map([
        ['病历', { value: 259060, name: '病历' }],
        ['患者', { value: 122434, name: '患者' }],
      ]),
    },
    sex: {
      config: {
        type: 'pie',
      },
      data: new Map([
        ['男', { value: 37272, name: '男' }],
        ['女', { value: 2022, name: '女' }],
      ]),
    },
    age: {
      config: {
        type: 'bar',
      },
      data: [
        {
          group: '对比组1',
          groupData: [
            { value: 756, name: '0-8' },
            { value: 956, name: '18-45' },
            { value: 212, name: '45-63' },
            { value: 56, name: '>63' },
          ],
        },
        {
          group: '对比组2',
          groupData: [
            { value: 324, name: '0-8' },
            { value: 112, name: '18-45' },
            { value: 333, name: '45-63' },
            { value: 96, name: '>63' },
          ],
        },
      ],
    },
  };
}
