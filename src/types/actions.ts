import { Dispatch } from "react";
import { State } from "./state";
import { Task } from "./task";

export enum ActionType {
  ADD = 'ADD',
  CHANGE = 'CHANGE',
  REMOVE = 'REMOVE',
  TOGGLE = 'TOGGLE',
}

type AddTask = {
  type: ActionType.ADD;
  payload: string;
}

type ChangeTask = {
  type: ActionType.CHANGE;
  payload: string;
}

type RemoveTask = {
  type: ActionType.REMOVE;
  payload: Task;
}

type ToggkeTask = {
  type: ActionType.TOGGLE;
  payload: Task;
}
export type Action =
  | AddTask
  | ChangeTask
  | RemoveTask
  | ToggkeTask;

export type ContextState = {
  state: State;
  changeState: Dispatch<Action>
}
