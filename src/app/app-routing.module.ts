import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { InputWantedComponent } from './components/input-wanted/input-wanted.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', component: HomeComponent },
  { path: 'input-wanted', component: InputWantedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
