import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill/skill.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    SkillComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    ChartsModule

  ]
})
export class SkillModule { }
