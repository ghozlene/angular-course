import { Routes, RouterModule } from "@angular/router";
import { ColorComponent } from "./color/color.component";
import { CvComponent } from "./cvTech/cv/cv.component";

const APP_ROUTING: Routes = [

  { path: 'cv', component: CvComponent },
  { path: 'color', component: ColorComponent }
]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)

