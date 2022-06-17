import React, { useReducer } from 'react';
import { ContextApp, initialState, reducer } from '../../store/reducer';
import { Action } from '../../types/actions';
import { State, ContextState } from '../../types/state';
import '../../scss/app.scss'
import Main from '../main/main';

const App: React.FC = () => {
  const [state, changeState] = useReducer<React.Reducer<State, Action>>(reducer, initialState);

  const ContextState: ContextState = {
    state,
    changeState
  };

  return (
    <>
      <ContextApp.Provider value={ContextState}>
        <Main />
      </ContextApp.Provider>
    </>
  );
}

export default App;
