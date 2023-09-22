import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-moderation-cmd',
  templateUrl: './moderation-cmd.component.html',
  styleUrls: ['./moderation-cmd.component.scss']
})
export class ModerationCmdComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  showSubmenu: boolean = false;
  isShowing = true;
  showSubSubMenu: boolean = false;

  mouseenter() {
    
      this.isShowing = true;
    
  }

  mouseleave() {
    
      this.isShowing = false;
    
  }
}
