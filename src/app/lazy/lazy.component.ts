import { Component, OnInit } from '@angular/core'
import { AppDiTest } from '../services/app-di-test'

@Component({
  selector: 'lazy',
  templateUrl: './lazy.component.html'
})
export class LazyComponent implements OnInit {
  constructor(
    private appDiTest: AppDiTest
  ) {}

  ngOnInit() { }
}
