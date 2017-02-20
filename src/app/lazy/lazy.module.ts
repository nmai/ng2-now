import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule  } from '@angular/common'
import { LazyComponent } from './lazy.component'

const routes: Routes = [
  { path: '', component: LazyComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [LazyComponent],
  providers: [],
})
export class LazyModule {
  constructor() {}
}
