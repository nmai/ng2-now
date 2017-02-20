import { NgModule } from '@angular/core'
import { CompilerConfig } from '@angular/compiler'
import { Routes, RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { HomeModule } from './home/home.module'

import { ExamplePipe } from './pipes/example.pipe'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: 'profiles', loadChildren: './+profile-view/profile-view.module#ProfileViewModule'}
]

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
