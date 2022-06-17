import { useContext } from "react";
import { Filter } from "../const";
import { ContextApp } from "../store/reducer";
import { ActionType } from "../types/actions";
import { Task } from "../types/task";

const Tabs: React.FC = () => {
  const { state, changeState } = useContext(ContextApp);

  const notComplatedTasks = state.tasks.filter((task) => !task.isDone);

  const removeComplatedTasks = (tasksForRemoving: Task[]) => {
    changeState({ type: ActionType.REMOVE_COMPLATED, payload: tasksForRemoving })
  }

  const selectFilter = (filterForChange: string) => {
    changeState({ type: ActionType.SELECT_FILTER, payload: filterForChange })
  }

  return (
    <div className="tabs">
      <span className="tabs__info" aria-label="Number of to do tasks left to complete">{notComplatedTasks.length} items left</span>
      <ul className="tabs__menu">
        {Filter.map((item: string, i) => (
          <li
            key={i}
            className={state.selectFilter === item ? "tabs__menu-item tabs__menu-item--active" : "tabs__menu-item"}
            aria-label={`Show ${item.toLowerCase()} to do tasks`}
          >
            <button
              className="tabs__menu-item-link"
              onClick={() => {
                selectFilter(item);
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="tabs__clear-button"
        aria-label="Clear completed to do tasks"
        onClick={() => removeComplatedTasks(state.tasks)}
      >
        Clear completed
      </button>
    </div>
  )
}

export default Tabs;
