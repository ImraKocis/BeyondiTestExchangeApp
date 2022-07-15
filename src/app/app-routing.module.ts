import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { NewsComponent } from "./news/news.component";
import { ContactComponent } from "./contact/contact.component";
import { ExchangeComponent } from "./exchange/exchange.component";
import { HistoryComponent } from "./history/history.component";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },

  // { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "**", redirectTo: "home" },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
