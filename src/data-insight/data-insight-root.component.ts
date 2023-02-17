import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'data-insight-root',
  templateUrl: './data-insight-root.component.html',
  styleUrls: ['./data-insight-root.component.scss'],
})
export class DataInsightRootComponent {
  constructor(private _router: Router) {}

  public checkMenuActive(routes: string): boolean {
    return this._router.url.endsWith(routes);
  }

  public goTo(routes: string) {
    this._router.navigate([`/data-insight/${routes}`]);
  }
}
