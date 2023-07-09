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

const routes: Routes = 
[
  {path: 'cmd', component: CmdComponent},
  {path: 'vocaux', component: VocauxComponent},
  {path: 'memberhistory', component: MemberHistoryComponent},
  {path: 'messagerotation', component: MessageRotationComponent},
  {path: 'modcmd', component: ModerationCmdComponent},
  {path: 'namehistory', component: NameHistoryComponent},
  {path: 'support', component: SupportHistoryComponent},
  {path: 'formation', component: FormationComponent},
  { path: '', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
