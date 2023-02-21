import { Component, OnInit } from '@angular/core';
import {
  DataInsightService,
  ISummaryDiagnose,
  ITreatment,
} from '../shared/services';

@Component({
  selector: 'data-insight-home',
  templateUrl: './data-insight-home.component.html',
  styleUrls: ['./data-insight-home.component.less'],
})
export class DataInsightHomeComponent implements OnInit {
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
  public summaryChart;
  public diagnoses: ISummaryDiagnose[];
  public treatments: ITreatment;
  public outcome;

  constructor(private _dataInsightService: DataInsightService) {}

  public async ngOnInit() {
    this.summaryChart = await this._dataInsightService.getHospitalSummary();
    this.diagnoses = await this._dataInsightService.getHospitalDiagnose();
    this.treatments = await this._dataInsightService.getHospitalTreatments();
    this.outcome = await this._dataInsightService.getHospitalOutcome();
  }
}
