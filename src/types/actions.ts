import { Task } from "./task";

export enum ActionType {
  ADD = 'ADD',
  CHANGE = 'CHANGE',
  REMOVE = 'REMOVE',
  REMOVE_COMPLATED = 'REMOVE_COMPLATED',
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

type RemoveComplated = {
  type: ActionType.REMOVE_COMPLATED;
  payload: Task | Task[];
}

type ToggkeTask = {
  type: ActionType.TOGGLE;
  payload: Task;
}
export type Action =
  | AddTask
  | ChangeTask
  | RemoveTask
  | RemoveComplated
  | ToggkeTask;
