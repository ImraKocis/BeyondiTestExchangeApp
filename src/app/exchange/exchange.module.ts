import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbLayoutModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { ExchangeLayoutComponent } from "./exchange.layout";
import { ExchangeRouterModule } from "./exchange.routing.module";

@NgModule({
  declarations: [ExchangeLayoutComponent],
  imports: [CommonModule, ExchangeRouterModule, NbLayoutModule, ThemeModule],
})
export class ExchangeModule {}
