import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';
import { BecomeAStudentComponent } from './become-a-student/become-a-student.component';
import { BecomeAFreelancerComponent } from './become-a-freelancer/become-a-freelancer.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { TeacherPolicyComponent } from './teacher-policy/teacher-policy.component';
import { BecomeATeacherComponent } from './become-a-teacher/become-a-teacher.component';
import { TeacherComponent } from './teacher/teacher.component';
import { BecomeAPartnerComponent } from './become-a-partner/become-a-partner.component';
import { PartnerComponent } from './partner/partner.component';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';


@NgModule({
  declarations: [SchoolComponent, BecomeAStudentComponent, BecomeAFreelancerComponent, QuizResultComponent, TeacherPolicyComponent, BecomeATeacherComponent, TeacherComponent, BecomeAPartnerComponent, PartnerComponent, ProfileTeacherComponent],
  imports: [
    CommonModule,
    SchoolRoutingModule
  ]
})
export class SchoolModule { }
