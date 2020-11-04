import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseLiveDetailComponent } from './course-live-detail/course-live-detail.component';

import { CoursesComponent } from './courses.component';

const routes: Routes = [
    {
        path: '',
        component: CoursesComponent,
        children: [
            {
                path: ':slug',
                component: CourseListComponent
            },
            {
                path: ':slug/detail/:id',
                component: CourseDetailComponent
            },
            {
                path: ':slug/live-detail/:id',
                component: CourseLiveDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }
