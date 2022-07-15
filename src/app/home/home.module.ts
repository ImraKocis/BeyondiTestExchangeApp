import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeLayoutComponent } from "./home.layout";
import { ThemeModule } from "../@theme/theme.module";
import { HomeRoutingModule } from "./home.routing.module";
import { NbLayoutModule } from "@nebular/theme";

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [CommonModule, HomeRoutingModule, NbLayoutModule, ThemeModule],
})
export class HomeModule {}
