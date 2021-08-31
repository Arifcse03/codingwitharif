import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  { path: ' ', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },

  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
 { path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule) },
 { path: 'c', loadChildren: () => import('./education/education.module').then(m => m.EducationModule) },
 { path: 'd', loadChildren: () => import('./skill/skill.module').then(m => m.SkillModule) },
  { path: 'e', loadChildren: () => import('./interest/interest.module').then(m => m.InterestModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
