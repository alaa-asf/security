import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WantedPersonInSearchsService } from 'src/app/shared/services/wanted-personIn-searchs/wanted-personIn-searchs.service';

@Component({
  selector: 'app-wanted-data',
  templateUrl: './wanted-data.component.html',
  styleUrls: ['./wanted-data.component.css']
})
export class WantedDataComponent implements OnInit {
  inputForm:any;
  cities:[]=[];
  towns:[]=[];
  nationalities:[]=[];
  constructor(private fb:FormBuilder,private WantedPersonInSearchsSer: WantedPersonInSearchsService) {
    this.inputForm = this.fb.group({
      firstName: [null],
      lastName: [null],
      fatherName: [null],
      motherName: [null],
      fullName: [null],
      surName: [null],
      nationalID: [null],
      militaryID: [null],
      bitrthPlaceDate: [null],
      square: [null],
      city: [null],
      town: [null],
      place: [null],
      address: [null],
      persistentAddress: [null],
      job: [null],
      observation: [null],
      phone: [null],
      mobile: [null],
      belongTo: [null],
      rowCreatedUserName: [null],
      rowCreatedDate: [null],
      rowUpdatdedUserName: [null],
      rowUpdatedDate: [null],
      nationality: [null],
      dossier_ID: [null],
      incumbent_No: [null],
      incumbent_Date_Start: [null],
      incumbent_Date_End: [null],
      incumbent_Source: [null],
      incumbent_Reason: [null],
      incumbent_Note: [null],
      incumbent_Type: [null]
    })
  }

  ngOnInit() {
  }
  checkSearchSite(event:any){

  }

  addWanted(data:any){
    this.WantedPersonInSearchsSer.add(data).subscribe(res => {
      console.log(res);
    })
  }
}
