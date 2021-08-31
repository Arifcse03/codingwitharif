import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestComponent } from './interest/interest.component';
import { InterestsRoutingModule } from './interests-routing.module';


@NgModule({
  declarations: [
    InterestComponent
  ],
  imports: [
    CommonModule,
    InterestsRoutingModule
  ]
})
export class InterestModule { }
