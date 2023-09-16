import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmdComponent } from './cmd/cmd.component';
import { VocauxComponent } from './vocaux/vocaux.component';
import { MemberHistoryComponent } from './member-history/member-history.component';
import { MessageRotationComponent } from './message-rotation/message-rotation.component';
import { ModerationCmdComponent } from './moderation-cmd/moderation-cmd.component';
import { NameHistoryComponent } from './name-history/name-history.component';
import { SupportHistoryComponent } from './support-history/support-history.component';
import { FormationComponent } from './formation/formation.component';
import { LoginComponent } from './login/login.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { authGuard } from 'src/guards/auth.guard';
const routes: Routes = 
[
  {path: 'cmd', component: CmdComponent},
  {path: 'vocaux', component: VocauxComponent, canActivate:[authGuard]},
  {path: 'memberhistory', component: MemberHistoryComponent, canActivate:[authGuard]},
  {path: 'messagerotation', component: MessageRotationComponent, canActivate:[authGuard]},
  {path: 'modcmd', component: ModerationCmdComponent, canActivate:[authGuard]},
  {path: 'namehistory', component: NameHistoryComponent, canActivate:[authGuard]},
  {path: 'support', component: SupportHistoryComponent, canActivate:[authGuard]},
  {path: 'support/:id', component: SupportHistoryComponent, canActivate:[authGuard]},
  {path: 'formation', component: FormationComponent, canActivate:[authGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'accessdenied', component: AccessDeniedComponent},
  { path: '', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
