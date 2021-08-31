import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterestComponent } from './interest/interest.component';

const routes: Routes = [{ path: '', component: InterestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestsRoutingModule { }
