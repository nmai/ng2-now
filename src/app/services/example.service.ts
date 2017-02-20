import { Inject, Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class ExampleService {

  private prop1: string = 'asdf'

  constructor(
    private http: Http,
    @Inject('EXAMPLE_API_URL') private apiUrl: string,
    @Inject('EXAMPLE_COOKIE_NAME') private cookieName: string
  ) {}

  get exampleProperty(): string {
    return this.prop1
  }

  public exampleMethod(): Promise<any> {
    // Do something!
    return Promise.resolve()
  }
}
