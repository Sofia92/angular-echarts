import { Injectable } from '@angular/core';
import { ISummaryDiagnose, ITreatment } from '.';
import { DataInsightSerialize } from './data-insight.serialize';
import {
  hospitalDiagnose,
  hospitalOutcome,
  hospitalSummary,
  hospitalTreatment,
} from './mock';

@Injectable({ providedIn: 'root' })
export class DataInsightService {
  private insightSerialize = new DataInsightSerialize();
  constructor() {}

  public getHospitalSummary() {
    const res = this.insightSerialize.buildSummary(hospitalSummary, true);
    return Promise.resolve(res);
  }

  public getHospitalDiagnose(): Promise<ISummaryDiagnose[]> {
    return Promise.resolve(hospitalDiagnose);
  }

  public getHospitalTreatments(): Promise<ITreatment> {
    const { percentage, detail } = hospitalTreatment;
    return Promise.resolve({
      percentage: this.insightSerialize.buildPieMeta(percentage),
      detail,
    });
  }

  public getHospitalOutcome(): Promise<any> {
    return Promise.resolve({
      pieData: this.insightSerialize.buildPieMeta(hospitalOutcome),
      pictorialBar:
        this.insightSerialize.buildPictorialBarMeta(hospitalOutcome),
    });
  }
}
