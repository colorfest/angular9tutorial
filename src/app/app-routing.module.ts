import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PresidentsComponent } from './components/presidents/presidents.component';
import { UploadComponent } from './components/upload/upload.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'presidents', component: PresidentsComponent},
  {path: 'upload', component: UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
