import { Component, OnInit } from '@angular/core';
import { InsightGroup } from '../shared/models';

@Component({
  selector: 'data-insight',
  templateUrl: './data-insight.component.html',
  styleUrls: ['./data-insight.component.scss'],
})
export class DataInsightComponent implements OnInit {
  public conditionGroups = [];
  public currentGroup;

  constructor() {}

  public ngOnInit() {
    this.conditionGroups = [
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
            result: { people: 9999, emr: 12121 },
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
            result: { people: 99999, emr: 12121 },
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
            result: { people: 99999, emr: 12121 },
          },
        ],
      },
    ].map((group, i) => new InsightGroup(group, i));
    this.currentGroup = this.conditionGroups[0];
  }

  public setSelectedGroup(group) {
    this.currentGroup = group;
  }
}
