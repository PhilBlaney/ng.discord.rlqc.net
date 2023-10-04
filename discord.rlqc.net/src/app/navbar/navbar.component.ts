import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavbarService } from 'src/services/navbar-service.service';
import { Guild } from '../_models/guild';
import { MatOptionSelectionChange } from '@angular/material/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private breakpointObserver = inject(BreakpointObserver);
  public isAdmin:boolean = false;
  public isConnected:boolean = false;
  public selectedGuild:Guild;
  private expire:any;
  guildList:Guild[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private router: Router,private navbarService : NavbarService)
  {

  }
  async ngOnInit(){
    if(this.navbarService.getCookie('access')){
      this.isConnected = true;
      if(await this.navbarService.validatePermission()){
        this.isAdmin = true;
        this.expire = this.navbarService.getCookie('expire')
        this.guildList = await this.navbarService.getGuilds();
      }
    }
    
  }
  onClickLogin(){
    window.location.href = environment.DISCORD_LOGIN
  }
  onClickLogout(){
    this.navbarService.deleteCookie('access');
    this.navbarService.deleteCookie('refresh');
    this.navbarService.deleteCookie('user_id');
    this.navbarService.deleteCookie('expire');
    this.isConnected = false;
    this.isAdmin = false;
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
  onSelectedGuild(event:MatOptionSelectionChange<Guild>){
    console.log(event)
    if (event.isUserInput){
      var value = "";
      if(event.source.value)
      {
        value = event.source.value.id.toString();
      }
      this.navbarService.newEvent(value);
    }
  }
}
