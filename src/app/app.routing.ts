import { Routes, RouterModule, Router } from "@angular/router";
import { ColorComponent } from "./color/color.component";
import { CvComponent } from "./cvTech/cv/cv.component";

const APP_ROUTING: Routes = [
  { path: 'cv', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: CvComponent },
  { path: 'color/:default', component: ColorComponent }
]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)

