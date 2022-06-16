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
  console.log(sortedTasks)

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

        <div className="tasks-list">
          <NewTask />

          {state.tasks.length > 0
            ? <ul className="tasks-list__tasks">
              {state.tasks.map((task, i) => (
                <li
                  key={i}
                  className="tasks-list__item"
                >
                  <input
                    type="checkbox"
                    className="tasks-list__item-checkbox"
                    id={`task-${i}`}
                    onChange={() => toggleReadiness(task)}
                    checked={task.isDone}
                  />
                  <label className="tasks-list__item-mark" htmlFor={`task-${i}`}></label>
                  <span className="tasks-list__item-text">{task.name}</span>
                  <button
                    className="delete-button"
                    onClick={() => removeTask(task)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
            : <p>add the first task</p>}

          <Tabs />
        </div>
      </main>
    </div >
  );
}

export default Main;
