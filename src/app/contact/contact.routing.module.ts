import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { ContactLayoutComponent } from "./contact.layout";

export const routes: Routes = [
  {
    path: "",
    component: ContactLayoutComponent,

    children: [
      {
        path: "contact",
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
