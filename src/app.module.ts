import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.componnent';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./data-explore').then((mod) => mod.DataExploreHomeModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
