import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  ngOnInit(): void {
    setTimeout(() => (this.staticAlertClosed = true), 10000);

    this._success.subscribe((message) => (this.successMessage = message));
    debounceTime
      .call(this._success, 5000)
      .subscribe(() => (this.successMessage = null));
  }
}
