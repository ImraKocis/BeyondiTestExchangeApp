import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbLayoutModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { AboutLayoutComponent } from "./about.layout";
import { AboutRouterModule } from "./about.routing.module";

@NgModule({
  declarations: [AboutLayoutComponent],
  imports: [CommonModule, AboutRouterModule, NbLayoutModule, ThemeModule],
})
export class AboutModule {}
