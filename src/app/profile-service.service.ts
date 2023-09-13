import { Injectable } from '@angular/core';
import { IProfile } from './iprofile';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  getprofileIndex : BehaviorSubject<any>;
  isLoggedIn:BehaviorSubject<any>;
  UserLoggedInName:BehaviorSubject<any>;

  constructor() { 
    this.getprofileIndex = new BehaviorSubject({});
    this.isLoggedIn = new BehaviorSubject({});
    this.UserLoggedInName = new BehaviorSubject({});

  }

  Profiles: IProfile[]= [
    {
      id: '1',
      name: 'Aman',
      email:'aman@gmail.com',
      phone: 123456779,
      address:'street 25 house 50 F-6/2',
      password:'1234'
    },
    {
      id: '2',
      name: 'Khan',
      email:'khan@gmail.com',
      phone: 123456780,
      address:'street 8 house 37 F-11/1',
      password:'1234'
    }, 
    {
      id: '3',
      name: 'Majid',
      email:'majid@gmail.com',
      phone: 123456781,
      address:'street 33 house 512 E-11/3',
      password:'1234'
    },
    {
      id: '4',
      name: 'Shoaib',
      email:'shoaib@gmail.com',
      phone: 123456782,
      address:'street 25 house 56 F-6/1',
      password:'1234'
    },
    {
      id: '5',
      name: 'maroof',
      email:'maroof@gmail.com',
      phone: 123456783,
      address:'street 45 house 1019 E-11/3',
      password:'1234'
    },
    {
      id: '6',
      name: 'Arslan',
      email:'arslan@gmail.com',
      phone: 123456784,
      address:'street 5 house 83 E-11/2',
      password:'1234'
    },
    {
      id: '7',
      name: 'Jamal',
      email:'arslan@gmail.com',
      phone: 123456785,
      address:'street 25 house 50 F-6/2',
      password:'1234'
    },
    {
      id: '8',
      name: 'Rizwan',
      email:'rizwan@gmail.com',
      phone: 123456786,
      address:'street 22 house 80 F-11/2',
      password:'1234'
    },
    {
      id: '9',
      name: 'Abdullah',
      email:'abdullah@gmail.com',
      phone: 123456787,
      address:'street 5 house 71 F-10/2',
      password:'1234'
    },
    {
      id: '10',
      name: 'Hamid',
      email:'hamid@gmail.com',
      phone: 123456788,
      address:'street 51 house 85 G-6/3',
      password:'1234'
    },
    {
      id: '11',
      name: 'Asim',
      email:'asim@gmail.com',
      phone: 123456789,
      address:'street 20 house 15 G-9/2',
      password:'1234'
    },
    {
      id: '12',
      name: 'Junaid',
      email:'junaid@gmail.com',
      phone: 123456790,
      address:'street 1 house 6 G-9/4',
      password:'1234'
    }
   ];

  

}
