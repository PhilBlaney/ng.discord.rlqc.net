import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { CmdComponent } from './cmd/cmd.component';
import { VocauxComponent } from './vocaux/vocaux.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NameHistoryComponent } from './name-history/name-history.component';
import { MemberHistoryComponent } from './member-history/member-history.component';
import { MessageRotationComponent } from './message-rotation/message-rotation.component';
import { FormationComponent } from './formation/formation.component';
import { ModerationCmdComponent } from './moderation-cmd/moderation-cmd.component';
import { SupportHistoryComponent } from './support-history/support-history.component';
import { SupportDialogComponent } from './support-dialog/support-dialog.component';
import { LoopmsgDialogComponent } from './loopmsg-dialog/loopmsg-dialog.component';
import { LoginComponent } from './login/login.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
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
import { RemoveComponent } from './moderation-cmd/Notes/remove/remove.component';
import { NoteComponent } from './moderation-cmd/Notes/note/note.component';
import { WarningComponent } from './moderation-cmd/Notes/warning/warning.component';
import { HistoryComponent } from './moderation-cmd/Notes/history/history.component';
import { ByMemberComponent } from './moderation-cmd/Sanctions/by-member/by-member.component';
import { ByIdComponent } from './moderation-cmd/Sanctions/by-id/by-id.component';
import { SayComponent } from './moderation-cmd/Writing/say/say.component';
import { EditComponent } from './moderation-cmd/Writing/edit/edit.component';
import { ReactComponent } from './moderation-cmd/Writing/react/react.component';
import { StatusComponent } from './moderation-cmd/Writing/status/status.component';
import { StreamingComponent } from './moderation-cmd/Writing/streaming/streaming.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CmdComponent,
    VocauxComponent,
    NameHistoryComponent,
    MemberHistoryComponent,
    MessageRotationComponent,
    FormationComponent,
    ModerationCmdComponent,
    SupportHistoryComponent,
    SupportDialogComponent,
    LoopmsgDialogComponent,
    LoginComponent,
    AccessDeniedComponent,
    LeaveComponent,
    RebootComponent,
    ShutdownComponent,
    GuildsComponent,
    UptimeComponent,
    MoveComponent,
    DmComponent,
    InviteComponent,
    RoleComponent,
    PurgeComponent,
    RolesComponent,
    MentionComponent,
    IdentificationComponent,
    CreatedComponent,
    ActiveComponent,
    InvitedByComponent,
    UserComponent,
    MemberComponent,
    GuildInfoComponent,
    SearchComponent,
    RemoveComponent,
    NoteComponent,
    WarningComponent,
    HistoryComponent,
    ByMemberComponent,
    ByIdComponent,
    SayComponent,
    EditComponent,
    ReactComponent,
    StatusComponent,
    StreamingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatDividerModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule 
{ }
