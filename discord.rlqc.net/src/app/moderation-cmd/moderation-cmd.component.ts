import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-moderation-cmd',
  templateUrl: './moderation-cmd.component.html',
  styleUrls: ['./moderation-cmd.component.scss']
})
export class ModerationCmdComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  ShowingAdmin = false; ShowingModeration = false;ShowingWriting = false;ShowingSanction=false;ShowingNotes = false;
}
