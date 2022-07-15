import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about.component";
import { AboutLayoutComponent } from "./about.layout";

export const routes: Routes = [
  {
    path: "",
    component: AboutLayoutComponent,

    children: [
      {
        path: "about",
        component: AboutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRouterModule {}
