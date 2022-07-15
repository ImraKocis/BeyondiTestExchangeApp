import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExchangeComponent } from "./exchange.component";
import { ExchangeLayoutComponent } from "./exchange.layout";

export const routes: Routes = [
  {
    path: "",
    component: ExchangeLayoutComponent,

    children: [
      {
        path: "exchange",
        component: ExchangeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeRouterModule {}
