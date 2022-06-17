import { useContext } from "react";
import { ContextApp } from "../store/reducer";
import { ActionType } from "../types/actions";
import { Task } from "../types/task";

const Tabs: React.FC = () => {
  const { state, changeState } = useContext(ContextApp);

  const complatedTasks = state.tasks.filter((task) => task.isDone);
  const notComplatedTasks = state.tasks.filter((task) => !task.isDone);
  console.log(complatedTasks, notComplatedTasks);

  const removeComplatedTasks = (tasksForRemoving: Task[]) => {
    changeState({ type: ActionType.REMOVE_COMPLATED, payload: tasksForRemoving })
  }

  return (
    <div className="tabs">
      <span className="tabs__info" aria-label="Number of to do tasks left to complete">{notComplatedTasks.length} items left</span>
      <ul className="tabs__menu">
        <li className="tabs__menu-item" aria-label="Show all to do tasks">
          <a href="/" className="tabs__menu-item-link">All</a>
        </li>
        <li className="tabs__menu-item tabs__menu-item-active" aria-label="Show active to do tasks">
          <a href="/" className="tabs__menu-item-link">Active</a>
        </li>
        <li className="tabs__menu-item" aria-label="Show completed to do tasks">
          <a href="/" className="tabs__menu-item-link">Completed</a>
        </li>
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
