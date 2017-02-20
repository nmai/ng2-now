import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BrowserModule  } from '@angular/platform-browser'
import { HomeComponent }   from './home.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule { }
