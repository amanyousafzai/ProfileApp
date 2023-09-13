import { DOCUMENT } from '@angular/common';
import { Component, Inject , OnInit} from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  @Inject(DOCUMENT) document?: Document
  element?: HTMLElement;
  showteam:boolean = false;

  constructor() {
    
 }
  ngOnInit() {
    // this.profileService.UserLoggedInName.subscribe((name)=> {
    //   this.profileService.isLoggedIn.subscribe((ress)=>{
    //     if(ress){
    //       this.showName = name;
    //       console.log("name", name);
    //     }
    //   })
    // })
   
  }
 

 open(){
  const sidebarElement = document?.getElementById('mySidebar') as HTMLElement | null;
  if (sidebarElement) {
  sidebarElement.style.display = "block";
}
 }
 close(){
  const sidebarElement = document?.getElementById('mySidebar') as HTMLElement | null;
if (sidebarElement) {
  sidebarElement.style.display = "none";
}
 }

 showTeam(){
this.showteam = !this.showteam;
console.log("showteam", this.showteam)
 }

 ngOnDestroy() {
  this.destroyed$.next(false);
  this.destroyed$.unsubscribe();
}

}
