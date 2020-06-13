import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PresidentsComponent } from './components/presidents/presidents.component';
import { UploadComponent } from './components/upload/upload.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'presidents', component: PresidentsComponent},
  {path: 'upload', component: UploadComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
