import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { WebComponent } from "app/pages/web/web.component";
import { AplicativoComponent } from "app/pages/aplicativo/aplicativo.component";
import { StaksComponent } from "app/pages/staks/staks.component";

import { BancoComponent } from "app/pages/banco/banco.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "web", component: WebComponent },
      { path: "staks", component: StaksComponent },
      { path: "aplicativo", component: AplicativoComponent },
      { path: "banco", component: BancoComponent },

      {
        path: "",
        redirectTo: "/staks",
        pathMatch: "full",
      },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutesMenuModule {}
