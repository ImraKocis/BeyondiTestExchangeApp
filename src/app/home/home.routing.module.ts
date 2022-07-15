import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeLayoutComponent } from "./home.layout";

export const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,

    children: [
      {
        path: "home",
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
