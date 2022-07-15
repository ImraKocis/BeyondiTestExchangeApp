import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-home",
  template: `<ngx-one-column-layout>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>`,
  styleUrls: ["./home.component.scss"],
})
export class HomeLayoutComponent {}
