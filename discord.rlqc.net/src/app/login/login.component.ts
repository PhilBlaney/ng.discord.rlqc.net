import { Component } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private code : string | null = "";
  constructor(private route: ActivatedRoute,private router: Router){

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
          const {access_token,expires_in} = response.data;
          let dateTime = new Date()
          dateTime.setSeconds(dateTime.getSeconds() + expires_in);
          console.log(dateTime);
          localStorage.setItem("access",access_token);
          localStorage.setItem("exipre",JSON.stringify(dateTime));
          this.router.navigate(['/'])
        }
        catch(err){
          console.log(err);
        }
      }
  }

}
