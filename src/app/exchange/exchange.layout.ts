import { Component } from "@angular/core";

@Component({
  selector: "ngx-exchange",

  template: `<ngx-one-column-layout>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>`,
  styleUrls: ["./exchange.component.scss"],
})
export class ExchangeLayoutComponent {}
