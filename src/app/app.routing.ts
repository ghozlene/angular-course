import { Routes, RouterModule, Router } from "@angular/router";
import { ColorComponent } from "./color/color.component";
import { AddCvComponent } from "./cvTech/add-cv/add-cv.component";
import { CvComponent } from "./cvTech/cv/cv.component";
import { DeleteCvComponent } from "./cvTech/delete-cv/delete-cv.component";
import { DetailComponent } from "./cvTech/detail/detail.component";
import { ErrorComponent } from "./cvTech/error/error.component";

const APP_ROUTING: Routes = [
  {
    path: 'cv', children: [
      { path: '', component: CvComponent },

      { path: 'delete/:id', component: DeleteCvComponent },
      { path: 'add', component: AddCvComponent },
      { path: ':id', component: DetailComponent },



    ]
  },
  { path: '', component: CvComponent },

  { path: '**', component: ErrorComponent },

  { path: 'color', component: ColorComponent }

]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)

