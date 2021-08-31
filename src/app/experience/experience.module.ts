import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { ExpericenceRoutingModule } from './expericence-routing.module';


@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ExpericenceRoutingModule
  ]
})
export class ExperienceModule { }
