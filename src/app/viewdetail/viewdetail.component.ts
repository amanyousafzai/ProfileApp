import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../profile-service.service';
import { IProfile } from '../iprofile';


@Component({
  selector: 'viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.scss']
})
export class ViewdetailComponent implements OnInit {


  // @Input() item:any;
  userId: string = '';
  temp = "text";
  

  constructor(private route: ActivatedRoute , private profileservice: ProfileServiceService) { }
  showDetailProfile :any;
  allProfiles = this.profileservice.Profiles;

  ngOnInit(): void {

    this.profileservice.getprofileIndex.subscribe((res)=> {
      this.userId = res;
      console.log("useridddd in response ", this.userId)
    })


// console.log("item", this.item)
    // this.userId = +this.route.snapshot.paramMap.get('id');

    // this.route.paramMap.subscribe(params => {
    
      // this.userId =  params.get('id');
      // this.userId = this.item;

      // console.log("userId", this.userId)
      // Retrieve user data based on the userId
      // Pe3rform necessary operations
    // });
    // console.log("profile.id", this.allProfiles.)
    console.log("userId", this.userId)
    console.log(this.allProfiles); // Check if the array is defined and has data

    this.showDetailProfile = this.allProfiles.find((profile: IProfile) => (profile.id == this.userId));

    console.log("showdetails", this.showDetailProfile);



}



}