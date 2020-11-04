import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseLiveDetailComponent } from './course-live-detail/course-live-detail.component';


@NgModule({
  declarations: [CoursesComponent, CourseListComponent, CourseDetailComponent, CourseLiveDetailComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
