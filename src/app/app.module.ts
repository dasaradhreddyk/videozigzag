import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


   
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { VideolistComponent } from './videolist/videolist.component';
import { ProfilelistComponent } from './profilelist/profilelist.component';

@NgModule({
  declarations: [
    AppComponent,
    VideolistComponent,
    ProfilelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	 DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
