import { Component } from "@angular/core";

@Component({
  selector: "ngx-contact",
  template: `<ngx-one-column-layout>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>`,
  styleUrls: ["./contact.component.scss"],
})
export class ContactLayoutComponent {}
