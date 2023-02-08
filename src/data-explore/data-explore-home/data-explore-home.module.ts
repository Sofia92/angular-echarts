import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EchartRender } from '../shared/echart-render.component';
import { DataExploreHomeComponent } from './data-explore-home.component';

const routes: Routes = [{ path: '', component: DataExploreHomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    EchartRender,
  ],
  declarations: [DataExploreHomeComponent],
})
export class DataExploreHomeModule {}
