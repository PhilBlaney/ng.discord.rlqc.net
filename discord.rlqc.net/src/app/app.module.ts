import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import { CmdComponent } from './cmd/cmd.component';
import { VocauxComponent } from './vocaux/vocaux.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NameHistoryComponent } from './name-history/name-history.component';
import { MemberHistoryComponent } from './member-history/member-history.component';
import { MessageRotationComponent } from './message-rotation/message-rotation.component';
import { FormationComponent } from './formation/formation.component';
import { ModerationCmdComponent } from './moderation-cmd/moderation-cmd.component';
import { SupportHistoryComponent } from './support-history/support-history.component';

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
    SupportHistoryComponent
  ],
  imports: [
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ }
