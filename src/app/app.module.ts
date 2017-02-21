import { NgModule } from '@angular/core'
import { CompilerConfig } from '@angular/compiler'
import { Routes, RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { HomeModule } from './home/home.module'

import { ExamplePipe } from './pipes/example.pipe'
import { ExampleService } from './services/example.service'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
]

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    ExampleService,
    { provide: 'EXAMPLE_API_URL', useValue: 'http://test.com' },
    { provide: 'EXAMPLE_COOKIE_NAME', useValue: 'COOKIE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
