import { User as UserInterface } from '../interfaces/user.interface'

export class User implements UserInterface {
  id: string
  
  private _name: string

  get name(): string {
    return this._name
  }

  public exampleMethod(): void {
    // do stuff
  }
}
