import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataInsightConditionGroup } from '../shared/condition/condition-group.component';
import { DataInsightConditionItem } from '../shared/condition/condition-item.component';
import { EchartRender } from '../shared/echarts/echart-render.component';
import { DataInsightComponent } from './data-insight.component';

const routes: Routes = [{ path: '', component: DataInsightComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    EchartRender,
    DataInsightConditionGroup,
    DataInsightConditionItem,
  ],
  declarations: [DataInsightComponent],
})
export class DataInsightModule {}
