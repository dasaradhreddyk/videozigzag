import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  selection:string="image"; 
  showImages:string="no";
   
  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { 
   
  }
  switchview()
  {
    if(this.showImages == "no")
    {
      this.showImages = "yes";
    }
    else
    {
      this.showImages = "no";
    }

  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
   
  
  }
   
}


