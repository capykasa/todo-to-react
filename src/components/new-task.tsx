import React, { useContext } from 'react';
import { ContextApp } from '../store/reducer';
import { ActionType } from '../types/actions';

const MIN_SYMBOLS = 1;

const NewTask: React.FC = () => {
  const { state, changeState } = useContext(ContextApp);

  const isReviewValid = (text: string) => {
    if (text.length < MIN_SYMBOLS) {
      return false;
    }
    return true;
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>, task: string) => {
    event.preventDefault();

    if (isReviewValid(state.newTask)) {
      changeState({ type: ActionType.ADD, payload: task })
    }
    changeState({ type: ActionType.CHANGE, payload: '' })
  }

  const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeState({ type: ActionType.CHANGE, payload: event.target.value })
  }

  return (
    <div className="tasks-list__add-task">
      <button className="toggle-all" aria-label="Toggle all to do tasks">
        <span className="rotate"></span>
      </button>
      <form
        className='tasks-list__item-form'
        onSubmit={(event) => addTask(event, state.newTask)}
      >
        <input
          type="text"
          placeholder="What needs to be done?"
          className="tasks-list__item-input"
          onChange={(event) => changeTask(event)}
          value={state.newTask}
        />
      </form>
    </div >
  )
}

export default NewTask;
