import { useContext } from "react";
import { ContextApp } from "../store/reducer";
import { ActionType } from "../types/actions";
import { Task } from "../types/task";
import { sortTasks } from "../utils";
import NewTask from "./new-task";
import Tabs from "./tabs";

const Main: React.FC = () => {
  const { state, changeState } = useContext(ContextApp);

  const sortedTasks = sortTasks(state.tasks);

  const removeTask = (taskForRemoving: Task) => {
    changeState({ type: ActionType.REMOVE, payload: taskForRemoving })
  }

  const toggleReadiness = (taskForChange: Task) => {
    changeState({ type: ActionType.TOGGLE, payload: taskForChange })
  }

  return (
    <div className="page">
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">todos</h1>
        </div>
      </header>

      <main className="page-main">
        <h1 className="visually-hidden">Тестовое задание</h1>

        <div className="tasks__list">
          <NewTask />

          {state.tasks.length > 0
            ? <ul className="tasks__list-tasks">
              {sortedTasks.map((task, i) => (
                <li
                  key={i}
                  className="tasks__list-item"
                >
                  <input
                    type="checkbox"
                    className="tasks__list-item-checkbox"
                    id={`task-${i}`}
                    onChange={() => toggleReadiness(task)}
                    checked={task.isDone}
                  />
                  <label className="tasks__list-item-mark" htmlFor={`task-${i}`}></label>
                  <span className="tasks__list-item-text">{task.name}</span>
                  <button
                    className="delete-button"
                    onClick={() => removeTask(task)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
            : <span className="tasks__list-empty">add the first task</span>}

          <Tabs />
        </div>
      </main>
    </div >
  );
}

export default Main;
