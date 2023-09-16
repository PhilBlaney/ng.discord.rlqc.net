import { Component } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NavbarService } from 'src/services/navbar-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private code : string | null = "";
  constructor(private route: ActivatedRoute,private router: Router, private navbarService : NavbarService){

  }
  async ngOnInit(){
    this.route.queryParams
      .subscribe(params => {
        this.code = params["code"]
      })
      if(this.code){
        try{
          const formData = new URLSearchParams({
            'client_id': environment.CLIENT_ID,
            'client_secret': environment.CLIENT_SECRET,
            'grant_type': 'authorization_code',
            'code': this.code,
            'redirect_uri' : environment.URL+'/login',
          });
          const response = await axios.post(
            'https://discord.com/api/oauth2/token',
            formData.toString(),
            {
              headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }
          );
          const {access_token,expires_in,refresh_token} = response.data;
          let dateTime = new Date()
          dateTime.setSeconds(dateTime.getSeconds() + expires_in);
          this.navbarService.setCookie('access',access_token,expires_in);
          this.navbarService.setCookie('refresh',refresh_token,expires_in);
          this.navbarService.setCookie('expire',expires_in,expires_in);
          this.navbarService.setServiceValues();
          await this.navbarService.getUserId();
        }
        catch(err){
          console.log(err);
        }
      }
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
  }

}

//https://stackoverflow.com/questions/43159090/how-can-i-detect-service-variable-change-when-updated-from-another-component
