import { Component, OnInit } from '@angular/core';

// import SpacexdataService
import { SpacexdataService } from '../spacexdata.service';

// import Mission
import { Mission } from '../mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  spacexData;

  missions: Mission[];

  selectedMission?: Mission;
  onSelect(mission: Mission):void{
    this.selectedMission = mission;
  }

  constructor(private spacexDataService: SpacexdataService){}

  getSpacexData(){
    this.spacexData = this.spacexDataService.fetchData();
  }

  ngOnInit(): void {
  }

}
