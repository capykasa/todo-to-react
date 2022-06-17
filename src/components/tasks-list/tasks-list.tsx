import { useContext } from "react";
import { ContextApp } from "../../store/reducer";
import { ActionType } from "../../types/actions";
import { Task } from "../../types/task";
import { filterTasks, sortTasks } from "../../utils";

const TasksList: React.FC = () => {
  const { state, changeState } = useContext(ContextApp);

  const sortedTasks = sortTasks(state.tasks);
  const filteredTasks = filterTasks(sortedTasks, state.selectFilter);

  const removeTask = (taskForRemoving: Task) => {
    changeState({ type: ActionType.REMOVE, payload: taskForRemoving })
  }

  const toggleReadiness = (taskForChange: Task) => {
    changeState({ type: ActionType.TOGGLE, payload: taskForChange })
  }

  return (
    <>
      {filteredTasks.length > 0
        ? <ul className="tasks__list-tasks">
          {filteredTasks.map((task, i) => (
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
        : <span className="tasks__list-empty">there are no tasks here yet</span>}
    </>
  );
}

export default TasksList;
