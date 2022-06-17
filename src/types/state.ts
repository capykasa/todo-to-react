import { Dispatch } from "react";
import { Action } from "./actions";
import { Task } from "./task";

export type State = {
  newTask: string;
  tasks: Task[];
  selectFilter: string;
}

export type ContextState = {
  state: State;
  changeState: Dispatch<Action>
}
