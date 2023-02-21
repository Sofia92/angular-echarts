import { Component, OnInit } from '@angular/core';
import { Insight } from '../shared/models/insight';
import {
  DataInsightService,
  ISummaryDiagnose,
  ITreatment,
} from '../shared/services';

@Component({
  selector: 'data-insight',
  templateUrl: './data-insight.component.html',
  styleUrls: ['./data-insight.component.scss'],
  host: {
    '[class.collapsed]': 'isCollapsed',
  },
})
export class DataInsightComponent implements OnInit {
  public isCollapsed = true;
  public insight: Insight;
  public conditionGroups = [];
  public currentGroup;
  public contentEditBlock: boolean;
  public summaryChart;
  public diagnoses: ISummaryDiagnose[];
  public treatments: ITreatment;
  public outcome;

  constructor(private _dataInsightService: DataInsightService) {}

  public async ngOnInit() {
    const conditionGroups = [
      {
        id: 1,
        name: '组一',
        conditions: [
          {
            id: 1,
            expression:
              '(「"疾病及临床发现/主动脉夹层等于是" 范围：其他诊断,院内感染,病理诊断,损伤和中毒的外部原因,门诊诊断,并发症,出院诊断,入院诊断,手术并',
            result: { people: 99999, emr: 12121 },
          },
          {
            id: 2,
            expression:
              '(「"疾病及临床发现/主动脉夹层等于是" 范围：其他诊断,院内感染,病理诊断,损伤和中毒的外部原因,门诊诊断,并发症,出院诊断,入院诊断,手术并',
            result: { people: 23922, emr: 12121 },
          },
          {
            id: 2,
            expression:
              '(「"疾病及临床发现/主动脉夹层等于是" 范围：其他诊断,院内感染,病理诊断,损伤和中毒的外部原因,门诊诊断,并发症,出院诊断,入院诊断,手术并',
            result: { people: 999, emr: 12121 },
          },
          {
            id: 2,
            expression:
              '(「"疾病及临床发现/主动脉夹层等于是" 范围：其他诊断,院内感染,病理诊断,损伤和中毒的外部原因,门诊诊断,并发症,出院诊断,入院诊断,手术并',
            result: { people: 99, emr: 12121 },
          },
        ],
      },
      {
        id: 2,
        name: '组二',
        conditions: [
          {
            id: 1,
            expression:
              '(「"疾病及临床发现/主动脉夹层等于是" 范围：其他诊断,院内感染,病理诊断,损伤和中毒的外部原因,门诊诊断,并发症,出院诊断,入院诊断,手术并',
            result: { people: 99999, emr: 12121 },
          },
          {
            id: 2,
            expression:
              '(「"疾病及临床发现/主动脉夹层等于是" 范围：其他诊断,院内感染,病理诊断,损伤和中毒的外部原因,门诊诊断,并发症,出院诊断,入院诊断,手术并',
            result: { people: 43922, emr: 12121 },
          },
        ],
      },
      {
        id: 3,
        name: '组三',
        conditions: [
          {
            id: 1,
            expression:
              '(「"疾病及临床发现/主动脉夹层等于是" 范围：其他诊断,院内感染,病理诊断,损伤和中毒的外部原因,门诊诊断,并发症,出院诊断,入院诊断,手术并',
            result: { people: 99999, emr: 12121 },
          },
          {
            id: 2,
            expression:
              '(「"疾病及临床发现/主动脉夹层等于是" 范围：其他诊断,院内感染,病理诊断,损伤和中毒的外部原因,门诊诊断,并发症,出院诊断,入院诊断,手术并',
            result: { people: 59999, emr: 12121 },
          },
        ],
      },
    ];
    this.insight = new Insight({
      id: 1,
      name: '冠心病数据探索患者数据初筛',
      conditionGroups,
    });

    this.setSelectedGroup(this.insight.conditionGroups[0]);
    console.log(this.conditionGroups);
    this.summaryChart = await this._dataInsightService.getHospitalSummary();
    this.diagnoses = await this._dataInsightService.getHospitalDiagnose();
    this.treatments = await this._dataInsightService.getHospitalTreatments();
    this.outcome = await this._dataInsightService.getHospitalOutcome();
  }

  public newGroup() {
    this.insight.createGroup();
  }

  public setSelectedGroup(group) {
    this.insight.setCurrentGroup(group);
  }
  public setSelectedCondition(condition) {
    this.insight.setCurrentCondition(this.insight.currentGroup, condition);
  }

  public insightcopy() {
    this.insight.copyToCreateNewGroup();
  }
  public insightlike() {}
  public insightdel() {}

  public showContentEditBlock() {
    this.contentEditBlock = true;
  }
}
