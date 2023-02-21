export interface IBaseEnumMeta {
  value: number;
  name: string;
}
export interface ISummaryDiagnose {
  value: number;
  percentage: number;
  name: string;
}

export interface ITreatment {
  percentage: any;
  detail: { name: string; data: ISummaryDiagnose[] }[];
}
