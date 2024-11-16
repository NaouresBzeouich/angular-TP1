import {TodoStatus} from "./todoStatus";

export class Todo {
  constructor(
    public name = '',
    public content = '' ,
    public id: number = 0,
    public status:TodoStatus = 'waiting') {}
}
