export const hospitalSummary = {
  emrs: 259060, // 病历数
  patients: 12242, // 患者人数
  sex: [
    { value: 756, name: '男' },
    { value: 956, name: '女' },
  ],
  age: [
    { value: 756, name: '0-8' },
    { value: 956, name: '18-45' },
    { value: 212, name: '45-63' },
    { value: 56, name: '>63' },
  ],
};

export const hospitalDataInsightSummary = {
  fillSummary: [
    { value: 756, name: '有值数据' },
    { value: 956, name: '空数据' },
  ],
  fillPercentage: [
    { value: 10395, name: '>80%' },
    { value: 12242, name: '80%-60%' },
    { value: 12242, name: '60%-40%' },
    { value: 12242, name: '40%-20%' },
    { value: 12242, name: '<20%' },
  ],
};

export const hospitalDataInsightDetail = [
  { value: 200, percentage: 78, name: '血压', defaultVariable: true },
  { value: 400, percentage: 2, name: '心率', defaultVariable: true },
  { value: 400, percentage: 15, name: '甲状腺功能', defaultVariable: true },
  { value: 400, percentage: 5, name: '动脉CO2分压', defaultVariable: true },
  { value: 400, percentage: 5, name: '关注变量', defaultVariable: false },
];

export const hospitalDiagnose = [
  { value: 5000, percentage: 78, name: '诊断名称1' },
  { value: 4000, percentage: 2, name: '诊断名称2' },
  { value: 4000, percentage: 2, name: '诊断名称3' },
];

export const hospitalTreatment = {
  percentage: [
    { value: 200, name: '手术' },
    { value: 400, name: '放疗' },
    { value: 400, name: '化疗' },
  ],
  detail: [
    {
      name: '手术情况',
      data: [
        { value: 4000, percentage: 78, name: '手术名称' },
        { value: 4000, percentage: 21, name: '手术名称' },
      ],
    },
    {
      name: '用药情况',
      data: [
        { value: 4000, percentage: 78, name: '用药名称' },
        { value: 4000, percentage: 78, name: '用药名称' },
      ],
    },
  ],
};

export const hospitalOutcome = [
  { value: 29200, percentage: 78, name: '医嘱离院' },
  { value: 23400, percentage: 2, name: '自动出院' },
  { value: 8700, percentage: 15, name: '转院' },
  { value: 400, percentage: 5, name: '死亡' },
];

export const insightHistory = [
  {
    id: 1,
    searchId: 22,
    insightName: '探索3',
    searchAt: '2022/12/12 12:12:12',
    groupId: 22,
    groupName: '组1',
    searchResult: { patients: 120022, emrs: 20222 },
  },
];
