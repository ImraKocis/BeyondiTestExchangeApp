import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-about",
  template: `<ngx-one-column-layout>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>`,
  styleUrls: ["./about.component.scss"],
})
export class AboutLayoutComponent {}
