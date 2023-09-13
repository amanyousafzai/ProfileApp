import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileServiceService } from '../profile-service.service';
import { IProfile } from '../iprofile';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
constructor(private profileservice: ProfileServiceService, private route: ActivatedRoute,private router: Router){}
message:string = '';
showtoaster:boolean = false;
 

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.maxLength(11)]),
    address: new FormControl('',[Validators.required]),
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




  // ADDteamMembers(){

  // }
  submitForm(){
    if(this.form.valid){
      let obj = {
        id: this.id || '',
        name: this.name || '',
        email:this.email ||'',
        phone: +(this.phone || '') ,
        address:this.address || '',
        password:this.password || ''

      }
      this.profileservice.Profiles.unshift(obj);

      setTimeout(() => {
        this.router.navigate(['/list'], {relativeTo: this.route})
        
      }, 2000);
      this.showtoaster = !this.showtoaster;
      this.message = 'Record is added successfully';
      
    }
    else{
      this.showtoaster = !this.showtoaster;
      this.message = 'Error in adding Record! Try Again';
      setTimeout(() => {
      this.showtoaster = !this.showtoaster;
      }, 2000);
      console.log("form is not valid");
    }
  }

}
