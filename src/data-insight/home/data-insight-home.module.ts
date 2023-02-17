import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EchartRender } from '../shared/echart-render.component';
import { DataInsightHomeComponent } from './data-insight-home.component';

const routes: Routes = [{ path: '', component: DataInsightHomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    EchartRender,
  ],
  declarations: [DataInsightHomeComponent],
})
export class DataInsightHomeModule {}
