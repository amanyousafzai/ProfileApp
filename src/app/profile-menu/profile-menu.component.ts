import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {
  

  constructor( private route: ActivatedRoute,private router: Router) {
}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  
}
