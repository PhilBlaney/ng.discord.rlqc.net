import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private code : string | null = "";
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(){
    this.route.queryParams
      .subscribe(params => {
        this.code = params["code"]
      })
      if(this.code){
        try{
          
        }
        catch(err){
          console.log(err);
        }
      }
  }

}
