import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataInsightRootComponent } from './data-insight-root.component';

const routes: Routes = [
  {
    path: '',
    component: DataInsightRootComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/data-insight-home.module').then(
            (mod) => mod.DataInsightHomeModule
          ),
      },
      {
        path: 'insight',
        loadChildren: () =>
          import('./insight/data-insight.module').then(
            (mod) => mod.DataInsightModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [DataInsightRootComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class DataInsightRootModule {}
