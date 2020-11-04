import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
            },
            {
                path: 'home',
                loadChildren: () => import('./../modules/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'courses',
                loadChildren: () => import('./../modules/courses/courses.module').then(m => m.CoursesModule)
            },
            {
                path: 'auth',
                loadChildren: () => import('./../modules/auth/auth.module').then(m => m.AuthModule)
            },


        ]
    },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
