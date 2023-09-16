import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { RLQCService } from 'src/app/_services';
import { HttpHeaders } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
    private expire:string | null;
    private refresh:string | null;
    private access:string | null;
    private user_id:string;
    private guild:string = "218484309776924672";
    constructor(private rlqcService:RLQCService ){
      this.user_id = this.getCookie("user_id") ?? "";
      this.access  = this.getCookie("access");
      this.refresh = this.getCookie("refresh");
      this.expire = this.getCookie("expire");
    }
    async validatePermission(): Promise<boolean>{    
      if(this.access)
      {
        const value = await this.rlqcService.validate("validAdmin",this.createHeader()).toPromise()
        return value ? value.success : false;
      }
      return false;
    }
    createHeader(){
      let headers = new HttpHeaders();
      if(this.user_id)
      {
        headers = headers.append('user_id',this.user_id);
        headers = headers.append('guild',this.guild);
      }
      return headers;
    }
    async getUserId():Promise<string>{
      if(this.access && !this.user_id){
        var site = await fetch("https://discord.com/api/v10/users/@me", {
            method: 'GET',
            headers: {'Authorization': `Bearer ${this.access}`}
        });
        var response = await site.json();
        const {id} = response;
        this.setCookie("user_id",id,this.expire);
        this.user_id = id
        console.dir(this.user_id);
      }
      return this.user_id;
    }
    setCookie(name:string,value:string,days:any) {
      var expires = "";
      if (days) {
          var date = new Date();
          date.setSeconds(date.getSeconds() + days);
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    getCookie(name:string) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    }
    deleteCookie(name:string){
      document.cookie = name + "=;" + "expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    }
    setServiceValues(){
      this.user_id = this.getCookie("user_id") ?? "";
      this.access  = this.getCookie("access");
      this.refresh = this.getCookie("refresh");
      this.expire = this.getCookie("expire");
    }
    async getGuilds():Promise<string>{
      if(this.access && !this.user_id){
        var site = await fetch("https://discord.com/api/v10/users/@me/guilds", {
            method: 'GET',
            headers: {'Authorization': `Bearer ${this.access}`}
        });
        var response = await site.json();
        const {id} = response;
        this.setCookie("user_id",id,this.expire);
        this.user_id = id
        console.dir(this.user_id);
      }
      return this.user_id;
    }
}
