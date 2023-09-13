import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../profile-service.service';
import { ViewdetailComponent } from '../viewdetail/viewdetail.component';
import { IProfile } from '../iprofile';
import { UpdateComponent } from '../update/update.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from
'@angular/material/dialog';

@Component({
  selector: 'listProfiles',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // Dynamic routing details
  userId:any;
  showViewDetailModal:boolean = false;
  showChartModal:boolean = false;
  userisButForModal:any;
  public chart: any;

  constructor( private route: ActivatedRoute,private router: Router, private profileservice: ProfileServiceService,
    private dialog: MatDialog){
    // this.route.params.subscribe( this.doSearch(params['term']));
  }
  // Pagination Stuff

  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [3, 6, 9, 12];
  showName:any;


  message:string = '';
  showtoaster:boolean = false;

  search: FormControl = new FormControl();
  universalSearch: FormControl = new FormControl();
  filterProfiles: IProfile[] = this.profileservice.Profiles;

  ngOnInit(): void {
    this.showName = localStorage.getItem('name');
    this.route.paramMap.subscribe(params => {
    
      this.userId =  params.get('id');
      console.log("userId", this.userId)
      // this.userisButForModal = this.userId;
      // Retrieve user data based on the userId
      // Pe3rform necessary operations
    });

    this.search.valueChanges.subscribe((text: string) => {
      this.filterUsers(text);
    });

    this.universalSearch.valueChanges.subscribe((text: string) => {
      this.universalSearchUsers(text);
    });
  }
  // Add team member in the microagility team
  ADDTeamMember(){
    
  }

  filterUsers(text: string): void {
    this.filterProfiles = this.profileservice.Profiles.filter((profile: IProfile) => profile.name.toLowerCase().includes(text.toLowerCase()));
  }

  universalSearchUsers(text: string): void {
    this.filterProfiles = this.profileservice.Profiles.filter((profile: IProfile) => profile?.id.toLowerCase().includes(text.toLowerCase()) || profile.name.toLowerCase().includes(text.toLowerCase()) || profile.email.toLowerCase().includes(text.toLowerCase()) || profile.address.toLowerCase().includes(text.toLowerCase()));
  }

  DeleteRecord(i:number) :void{
       this.profileservice.Profiles.splice(i, 1);
       this.showtoaster = !this.showtoaster;
      
       this.message = 'Record Deleted';
       setTimeout(() => {
       this.showtoaster = !this.showtoaster;
       }, 2000);
         
          console.log("index of item", i);
          console.log("filterProfiles",this.filterProfiles);
  
  }
  EditRecord(i:number){


    this.profileservice.getprofileIndex.next(i);

    let dialogRef = this.dialog.open(UpdateComponent, {
      height: '400px',
      width: '600px',
    });
  dialogRef.afterClosed().subscribe((result)=> {
    console.log("result", result);
  })

    // this.router.navigate(['/update'],{relativeTo:this.route } )
  }
  AddRecord(){
    this.router.navigate(['/create'],{relativeTo:this.route } )
  }

  DeleteList(){
    this.filterProfiles = [];

  }

  Chart(){
    this.showChartModal = !this.showChartModal;
    // this.createChart();
  }

  ViewRecord(index:number){
    index = index+1;
    // this.router.navigate(['/list/index'],{relativeTo:this.route } )
    // console.log("index", index);
    // this.userisButForModal = index+1;

    this.profileservice.getprofileIndex.next(index);
    // console.log("userisbutformodal", this.userisButForModal)
      this.showViewDetailModal = true;
   
  }

  CloseModal(){
    this.showViewDetailModal = false;
    this.showChartModal = false;
    console.log("button is clicked", this.showViewDetailModal)
  }
  // CloseChartModal(){

  // }



  onTableDataChange(event: any){
    this.page = event;
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  } 

  // Create Charts
  


}
