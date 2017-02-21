import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  get showMessage(): boolean {
    return true
  }
  constructor(
  ) {}

  ngOnInit() { }

  sayHi() {
    alert('HI')
  }
}