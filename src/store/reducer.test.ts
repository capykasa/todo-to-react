import { Action, ActionType } from "../types/actions";
import { State } from "../types/state";
import { Task } from "../types/task";
import { reducer } from "./reducer";

describe('reducer', () => {
  it('returns new state for "ADD" type', () => {
    const initialState: State = {
      newTask: '',
      tasks: [],
      selectFilter: 'All',
    };
    const updateAction: Action = { type: ActionType.ADD, payload: 'new task' };
    const updatedState = reducer(initialState, updateAction);
    expect(updatedState).toEqual({
      newTask: '',
      tasks: [{ name: 'new task', isDone: false }],
      selectFilter: 'All',
    });
  });

  it('returns new state for "REMOVE" type', () => {
    const task: Task = { name: 'new task', isDone: false }
    const initialState: State = {
      newTask: '',
      tasks: [task],
      selectFilter: 'All',
    };
    const updateAction: Action = { type: ActionType.REMOVE, payload: task };
    const updatedState = reducer(initialState, updateAction);
    expect(updatedState).toEqual({
      newTask: '',
      tasks: [],
      selectFilter: 'All',
    });
  });

  it('returns new state for "REMOVE COMPLATED" type', () => {
    const tasks: Task[] = [
      { name: 'new task', isDone: true },
      { name: 'new task 2', isDone: false },
      { name: 'new task 3', isDone: true },
    ]
    const initialState: State = {
      newTask: '',
      tasks: tasks,
      selectFilter: 'All',
    };
    const updateAction: Action = { type: ActionType.REMOVE_COMPLATED, payload: tasks };
    const updatedState = reducer(initialState, updateAction);
    expect(updatedState).toEqual({
      newTask: '',
      tasks: [{ name: 'new task 2', isDone: false }],
      selectFilter: 'All',
    });
  });

  it('returns new state for "TOGGLE" type', () => {
    const task: Task = { name: 'new task', isDone: false }
    const initialState: State = {
      newTask: '',
      tasks: [task],
      selectFilter: 'All',
    };
    const updateAction: Action = { type: ActionType.TOGGLE, payload: task };
    const updatedState = reducer(initialState, updateAction);
    expect(updatedState).toEqual({
      newTask: '',
      tasks: [{ name: 'new task', isDone: true }],
      selectFilter: 'All',
    });
  });

  it('returns new state for "CHANGE" type', () => {
    const initialState: State = {
      newTask: '',
      tasks: [],
      selectFilter: 'All',
    };
    const updateAction: Action = { type: ActionType.CHANGE, payload: 'new task' };
    const updatedState = reducer(initialState, updateAction);
    expect(updatedState).toEqual({
      newTask: 'new task',
      tasks: [],
      selectFilter: 'All',
    });
  });

  it('returns new state for "SELECT FILTER" type', () => {
    const initialState: State = {
      newTask: '',
      tasks: [],
      selectFilter: 'All',
    };
    const updateAction: Action = { type: ActionType.SELECT_FILTER, payload: 'Active' };
    const updatedState = reducer(initialState, updateAction);
    expect(updatedState).toEqual({
      newTask: '',
      tasks: [],
      selectFilter: 'Active',
    });
  });
})
