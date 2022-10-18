import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WantedPerson } from 'src/app/shared/model/wantedPerson';
import { WantedPersonInSearchsService } from 'src/app/shared/services/wanted-personIn-searchs/wanted-personIn-searchs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  display: boolean = false;
  searchForm: any;
  persons!: WantedPerson[];
  searchSites = [{ name: 'الكل', value: 'الكل' }, { name: 'فرع 318', value: 'فرع 318' }, { name: 'بحث وتحري', value: 'بحث وتحري' }, { name: 'مشترك بين الافرع', value: 'مشترك بين الافرع' }];
  selectedSite: any;
  selectedDocs:[]=[];
  constructor(private fb: FormBuilder, private WantedPersonInSearchsSer: WantedPersonInSearchsService) {
    this.searchForm = this.fb.group({
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

  displaySearchBar() {
    this.display = true;
  }

  search(data: any) {
    this.WantedPersonInSearchsSer.search(data).subscribe(res => {
      this.persons = res;
      this.display = false;
    })
  }

  checkSearchSite(event: any) {

  }

  mergeDocs(){

  }

  selectDoc(id:any,data:any){
    console.log(id," ",data);
    
  }
}
