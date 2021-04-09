import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

//import spacexdata service
import { SpacexdataService } from './spacexdata.service';

//import HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // add HttpClientModule
  ],
  providers: [SpacexdataService],// add SpacexdataService
  bootstrap: [AppComponent]
})
export class AppModule { }
