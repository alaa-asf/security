import { Injectable, Injector } from '@angular/core';
import { BaseComponent } from '../../components/base.component';

@Injectable({
  providedIn: 'root'
})
export class WantedPersonInSearchsService extends BaseComponent {
  constructor(injector: Injector) {
    super(injector);
  }

  search(data:any){
    return this.HttpClient.post<any>(this.url + '/api/WantedPersonInSearchs/Search', data);
  }

}
