export interface User {
  // Required property
  id: string
  
  // Optional property
  name?: string

  // With this line, TS will allow any amount of properties on the object,
  // with any type (other than the already defined properties). Usually
  // you will not need this but it is good to keep in mind.
  [anyProp: string]: any
}
