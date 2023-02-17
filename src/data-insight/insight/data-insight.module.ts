import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EchartRender } from '../shared/echart-render.component';
import { DataInsightComponent } from './data-insight.component';

const routes: Routes = [{ path: '', component: DataInsightComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    EchartRender,
  ],
  declarations: [DataInsightComponent],
})
export class DataInsightModule {}
