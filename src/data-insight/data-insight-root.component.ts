import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'data-insight-root',
  templateUrl: './data-insight-root.component.html',
  styles: [
    `
  :host{
    width: 100%;
    height: 100%
  }
  `,
  ],
})
export class DataInsightRootComponent {
  constructor(private _router: Router) {}

  public goTo(routes: string) {
    this._router.navigate([`/data-insight/${routes}`]);
  }
}
