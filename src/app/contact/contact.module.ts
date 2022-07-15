import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbLayoutModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { ContactLayoutComponent } from "./contact.layout";
import { ContactRoutingModule } from "./contact.routing.module";

@NgModule({
  declarations: [ContactLayoutComponent],
  imports: [CommonModule, ContactRoutingModule, NbLayoutModule, ThemeModule],
})
export class ContactModule {}
