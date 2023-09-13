import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../profile-service.service';
import { IProfile } from '../iprofile';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  islogin:boolean =false;
  isLogout:boolean= false;
  // islogNotOut:boolean=true;
  constructor( private route: ActivatedRoute,private router: Router, private profileservice: ProfileServiceService){}
  ngOnInit(): void {
    this.profileservice.isLoggedIn.subscribe((res)=>{
      this.islogin= res;
      console.log("isloggedIn response",res);
    })
   
  }

  ADDTeamMember(){
    this.router.navigate(['create'], {relativeTo: this.route})
  }
  ListTeam(){
    
    this.router.navigate(['list'], {relativeTo: this.route})
  }
  Login(){
   
    this.router.navigate(['login'], {relativeTo: this.route})
  }

  Logout(){
    this.profileservice.isLoggedIn.next(false);
  }
  register(){

  }
  ngOnDestroy(){
    this.profileservice.isLoggedIn.unsubscribe();
  }
}
