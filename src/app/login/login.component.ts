import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

message:string = '';
showtoaster:boolean = false;

 constructor( private route: ActivatedRoute,private router: Router, private profileservice: ProfileServiceService){}
  form = new FormGroup({
   
    email: new FormControl('',[Validators.required, Validators.email]),
    
    password: new FormControl('',[Validators.required])
   
  });

  get name(){
    return this.form.get('name')?.value;
  }
  get id(){
    return this.form.get('id')?.value;
  }
  get email(){
    return this.form.get('email')?.value;
  }
  get phone(){
    return this.form.get('phone')?.value;
  }
  get address(){
   return this.form.get('address')?.value
  }
  get password(){
    return this.form.get('password')?.value
  }

  Login(){

    for(let i=0; i<this.profileservice.Profiles.length; i++){
      if(this.profileservice.Profiles[i].email === this.email && this.profileservice.Profiles[i].password === this.password){
       
        this.profileservice.isLoggedIn.next(true);
        // this.profileservice.UserLoggedInName.next(this.profileservice.Profiles[i].name)
        localStorage.setItem('name', this.profileservice.Profiles[i].name);

        this.router.navigate(['/list'],{relativeTo:this.route})
      }
      else{
        
        this.message = 'Email or password not correct';
        setTimeout(() => {
        this.showtoaster = true;
        }, 100);
      }
      
    }
this.profileservice.isLoggedIn.next(true);
    console.log("sign in btn clicked")
  }

}
