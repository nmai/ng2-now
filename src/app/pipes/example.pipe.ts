import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'example-pipe'})
export class ExamplePipe implements PipeTransform {
  constructor() {}

  /**
   * Pipe transform method can return either the transformed value immediately,
   * or a promise for asynchronous stuff.
   */
  transform(value: number, param1: string, param2?: string): Promise<number> {
    return new Promise.resolve()
  }
}
