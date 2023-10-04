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

import { LeaveComponent } from './moderation-cmd/Admin/leave/leave.component';
import { RebootComponent } from './moderation-cmd/Admin/reboot/reboot.component';
import { ShutdownComponent } from './moderation-cmd/Admin/shutdown/shutdown.component';
import { GuildsComponent } from './moderation-cmd/Admin/guilds/guilds.component';
import { UptimeComponent } from './moderation-cmd/Admin/uptime/uptime.component';
import { MoveComponent } from './moderation-cmd/Admin/move/move.component';
import { DmComponent } from './moderation-cmd/Admin/dm/dm.component';
import { InviteComponent } from './moderation-cmd/Admin/invite/invite.component';
import { RoleComponent } from './moderation-cmd/Admin/role/role.component';
import { PurgeComponent } from './moderation-cmd/Admin/purge/purge.component';

import { RolesComponent } from './moderation-cmd/Moderation/roles/roles.component';
import { MentionComponent } from './moderation-cmd/Moderation/mention/mention.component';
import { IdentificationComponent } from './moderation-cmd/Moderation/identification/identification.component';
import { CreatedComponent } from './moderation-cmd/Moderation/created/created.component';
import { ActiveComponent } from './moderation-cmd/Moderation/active/active.component';
import { InvitedByComponent } from './moderation-cmd/Moderation/invited-by/invited-by.component';
import { UserComponent } from './moderation-cmd/Moderation/user/user.component';
import { MemberComponent } from './moderation-cmd/Moderation/member/member.component';
import { GuildInfoComponent } from './moderation-cmd/Moderation/guild-info/guild-info.component';
import { SearchComponent } from './moderation-cmd/Moderation/search/search.component';

import { SayComponent } from './moderation-cmd/Writing/say/say.component';
import { EditComponent } from './moderation-cmd/Writing/edit/edit.component';
import { ReactComponent } from './moderation-cmd/Writing/react/react.component';
import { StatusComponent } from './moderation-cmd/Writing/status/status.component';
import { StreamingComponent } from './moderation-cmd/Writing/streaming/streaming.component';

import { ByMemberComponent } from './moderation-cmd/Sanctions/by-member/by-member.component';
import { ByIdComponent } from './moderation-cmd/Sanctions/by-id/by-id.component';

import { RemoveComponent } from './moderation-cmd/Notes/remove/remove.component';
import { NoteComponent } from './moderation-cmd/Notes/note/note.component';
import { WarningComponent } from './moderation-cmd/Notes/warning/warning.component';
import { HistoryComponent } from './moderation-cmd/Notes/history/history.component';
const routes: Routes = 
[
  {path: 'cmd', component: CmdComponent},
  {path: 'vocaux', component: VocauxComponent, canActivate:[authGuard]},
  {path: 'memberhistory', component: MemberHistoryComponent, canActivate:[authGuard]},
  {path: 'messagerotation', component: MessageRotationComponent, canActivate:[authGuard]},
  {path: 'modcmd', component: ModerationCmdComponent, canActivate:[authGuard],
    children:[
      {path:'leave',component:LeaveComponent},
      {path:'reboot',component:RebootComponent},
      {path:'shutdown',component:ShutdownComponent},
      {path:'guilds',component:GuildsComponent},
      {path:'uptime',component:UptimeComponent},
      {path:'move',component:MoveComponent},
      {path:'dm',component:DmComponent},
      {path:'invite',component:InviteComponent},
      {path:'role',component:RoleComponent},
      {path:'purge',component:PurgeComponent},
      {path:'roles',component:RolesComponent},
      {path:'mention',component:MentionComponent},
      {path:'identification',component:IdentificationComponent},
      {path:'created',component:CreatedComponent},
      {path:'active',component:ActiveComponent},
      {path:'invitedby',component:InvitedByComponent},
      {path:'user',component:UserComponent},
      {path:'member',component:MemberComponent},
      {path:'guildinfo',component:GuildInfoComponent},
      {path:'search',component:SearchComponent},
      {path:'say',component:SayComponent},
      {path:'edit',component:EditComponent},
      {path:'react',component:ReactComponent},
      {path:'status',component:StatusComponent},
      {path:'streaming',component:StreamingComponent},
      {path:'bymember',component:ByMemberComponent},
      {path:'byid',component:ByIdComponent},
      {path:'remove',component:RemoveComponent},
      {path:'note',component:NoteComponent},
      {path:'warning',component:WarningComponent},
      {path:'history',component:HistoryComponent},
      
    ]},
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
