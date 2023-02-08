import { Component } from '@angular/core';

@Component({
  selector: 'data-explore-home',
  templateUrl: './data-explore-home.component.html',
  styleUrls: ['./data-explore-home.component.less'],
})
export class DataExploreHomeComponent {
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
}
