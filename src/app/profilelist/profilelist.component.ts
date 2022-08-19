import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profilelist',
  templateUrl: './profilelist.component.html',
  styleUrls: ['./profilelist.component.css']
})
export class ProfilelistComponent implements OnInit {

  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts : ProfileData[] =[];
  public CHARACTERS: any[]=[];
   
  constructor(private http: HttpClient) { }
   
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
   
    this.http.get<ProfileData[]>('http://localhost:8840/api/data/GetUserData?input=art')
      .subscribe(posts => {       
		 
		    this.posts = posts;          
		
    });
   
  }
  getProfileData(value: string)
  {
	  console.log("Click Event" + value);
	  while(this.posts.length) {
         let item = this.posts.pop();    
      }
	 
	   this.http.get<ProfileData[]>('http://localhost:8840/api/data/GetUserData?input='+value)
      .subscribe(posts => {       
		 
		    this.posts = posts;          
		
    });
  }
  
   
}
interface ProfileData {
    name: string;
    age: string ;
    species: string;
    occupation: string;
}