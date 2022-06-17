import React from "react";
import { Action, ActionType } from "../types/actions";
import { ContextState, State } from "../types/state";

export const initialState: State = {
  newTask: '',
  tasks: [],
  selectFilter: 'All',
}
export const ContextApp = React.createContext<ContextState>({} as ContextState);

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD: {
      return {
        ...state, tasks: [...state.tasks, {
          name: action.payload,
          isDone: false
        }]
      }
    }
    case ActionType.CHANGE: {
      return { ...state, newTask: action.payload }
    }
    case ActionType.REMOVE: {
      return { ...state, tasks: [...state.tasks.filter(task => task !== action.payload)] }
    }
    case ActionType.REMOVE_COMPLATED: {
      return { ...state, tasks: [...state.tasks.filter(task => !task.isDone)] }
    }
    case ActionType.TOGGLE: {
      return { ...state, tasks: [...state.tasks.map((task) => (task !== action.payload ? task : { ...task, isDone: !task.isDone }))] }
    }
    case ActionType.SELECT_FILTER: {
      return { ...state, selectFilter: action.payload }
    }
    default: throw new Error('Unexpected action');
  }
};
