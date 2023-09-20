import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/services/navbar-service.service';
import { Guild } from '../_models/guild';
import { MatOptionSelectionChange } from '@angular/material/core';
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
  constructor(private navbarService : NavbarService)
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
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1103047767946956863&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&response_type=code&scope=identify%20guilds%20guilds.members.read"
  }
  onClickLogout(){
    this.navbarService.deleteCookie('access');
    this.navbarService.deleteCookie('refresh');
    this.navbarService.deleteCookie('user_id');
    this.navbarService.deleteCookie('expire');
    this.isConnected = false;
    this.isAdmin = false;
  }
  onSelectedGuild(guild:MatOptionSelectionChange<Guild>){
    if(guild.source.value){
      this.navbarService.setCookie('selectedGuild',guild.source.value.id.toString(),this.expire)
    }
    else{
      this.navbarService.deleteCookie('selectedGuild');
    }
  }
}
