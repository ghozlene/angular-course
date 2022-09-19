import { Routes, RouterModule, Router } from "@angular/router";
import { ColorComponent } from "./color/color.component";
import { CvComponent } from "./cvTech/cv/cv.component";
import { DetailComponent } from "./cvTech/detail/detail.component";

const APP_ROUTING: Routes = [
  { path: 'cv/:id', component: DetailComponent },
  { path: 'cv', redirectTo: '/', pathMatch: 'full' },

  { path: '', component: CvComponent },

  { path: 'color', component: ColorComponent }

]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)

