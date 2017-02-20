import { Component, OnInit } from '@angular/core'
import { AppDiTest } from '../services/app-di-test'

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    private appDiTest: AppDiTest
  ) {}

  ngOnInit() { }
}