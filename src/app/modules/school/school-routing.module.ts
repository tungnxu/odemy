import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BecomeAFreelancerComponent } from './become-a-freelancer/become-a-freelancer.component';
import { BecomeAPartnerComponent } from './become-a-partner/become-a-partner.component';
import { BecomeAStudentComponent } from './become-a-student/become-a-student.component';
import { BecomeATeacherComponent } from './become-a-teacher/become-a-teacher.component';
import { PartnerComponent } from './partner/partner.component';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { TeacherPolicyComponent } from './teacher-policy/teacher-policy.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { 
    path: 'become-a-student', 
    component: BecomeAStudentComponent 
  },
  { 
    path: 'become-a-freelancer', 
    component: BecomeAFreelancerComponent 
  },
  { 
    path: 'quiz-result', 
    component: QuizResultComponent 
  },
  { 
    path: 'teacher-policy', 
    component: TeacherPolicyComponent 
  },
  { 
    path: 'become-a-teacher', 
    component: BecomeATeacherComponent 
  },
  { 
    path: 'teacher', 
    component: TeacherComponent 
  },
  {
    path: 'teacher/:name',
    component: ProfileTeacherComponent
  },
  { 
    path: 'become-a-partner', 
    component: BecomeAPartnerComponent 
  },
  { 
    path: 'partner', 
    component: PartnerComponent 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
