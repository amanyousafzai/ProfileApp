import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileServiceService } from '../profile-service.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  
constructor(private profileservice: ProfileServiceService, 
  private route: ActivatedRoute,private router: Router,
  
  ){}
  
profilesArray = this.profileservice.Profiles;
indexOfEditingRecord:any;
 form!: FormGroup;
 IsformChanged:boolean = false;
 message:string = '';
 showtoaster:boolean = false;



ngOnInit() {
   this.profileservice.getprofileIndex.subscribe((res)=>
   {
    this.indexOfEditingRecord = res;
   })

    this.form = new FormGroup({
    name: new FormControl(this.profileservice.Profiles[this.indexOfEditingRecord].name , [Validators.required]),
    id: new FormControl(this.profileservice.Profiles[this.indexOfEditingRecord].id,[Validators.required]),
    email: new FormControl(this.profileservice.Profiles[this.indexOfEditingRecord].email,[Validators.required, Validators.email]),
    phone: new FormControl(this.profileservice.Profiles[this.indexOfEditingRecord].phone,[Validators.required, Validators.maxLength(11)]),
    address: new FormControl(this.profileservice.Profiles[this.indexOfEditingRecord].address,[Validators.required]),
    password: new FormControl(this.profileservice.Profiles[this.indexOfEditingRecord].password,[Validators.required])
   
  });

  const initialForm = this.form.value;
  this.form.valueChanges.subscribe((_res: any)=>{
    console.log("response", _res)
    
    this.IsformChanged = Object.keys(initialForm).some(key => this.form.value[key] !== initialForm[key])
  }) 
  
}


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
editForm(){
  
  
  if(this.form.valid){
   
        this.profileservice.Profiles[this.indexOfEditingRecord].name = this.name;
        this.profileservice.Profiles[this.indexOfEditingRecord].id = this.id;
        this.profileservice.Profiles[this.indexOfEditingRecord].email = this.email;
        this.profileservice.Profiles[this.indexOfEditingRecord].phone = this.phone;
        this.profileservice.Profiles[this.indexOfEditingRecord].address = this.address;
        this.profileservice.Profiles[this.indexOfEditingRecord].password = this.password;

        if(this.IsformChanged){
          
          setTimeout(() => {
           
            this.router.navigate(['/list'], {relativeTo: this.route});
          }, 1000);
          this.showtoaster = !this.showtoaster;
          this.message = 'Form is changed';
        console.log("form is  changed", this.IsformChanged)
      }
        else{
          this.showtoaster = !this.showtoaster;

          this.message = 'Form is not changed! ';
          setTimeout(() => {
          this.showtoaster = !this.showtoaster;
          }, 2000);

          console.log("form is not changed", this.IsformChanged)
        }
    
  }
  else{
    console.log("form is not valid");
  }
}


}
