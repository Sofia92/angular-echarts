export class DataInsightSerialize {
  public buildSummary(summaryMeta, isSingle: boolean = true) {
    const { emrs, patients, sex, age } = summaryMeta;
    return {
      summary: {
        config: {
          type: 'pie-doughnut',
        },
        data: [
          { value: emrs, name: '病历' },
          { value: patients, name: '患者' },
        ],
      },
      sex: this.buildPieMeta(sex),
      age: {
        config: {
          type: 'bar',
        },
        data: age,
      },
    };
  }

  public buildPieMeta(data): any {
    return {
      config: {
        type: 'pie',
      },
      data,
    };
  }

  public buildPictorialBarMeta(data): any {
    return {
      config: {
        type: 'pictorialBar',
      },
      data,
    };
  }
}
