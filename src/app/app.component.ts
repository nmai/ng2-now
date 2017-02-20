import { Component } from '@angular/core'
import { ExampleService } from './services/example.service'

import './styles/example-styles.scss'


@Component({
  selector: 'app-container',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private exampleService: ExampleService
  ) {}
}
