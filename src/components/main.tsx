import AddTask from "./add-task";
import Tabs from "./tabs";

function Main(): JSX.Element {
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
          <AddTask />

          <ul className="tasks-list__tasks">
            <li className="tasks-list__item">
              <input type="checkbox" className="tasks-list__item-checkbox" id="task-1" />
              <label className="tasks-list__item-mark" htmlFor="task-1"></label>
              <span className="tasks-list__item-text" contentEditable="true">Тестовое задание</span>
              <button className="delete-button">x</button>
            </li>
            <li className="tasks-list__item">
              <input type="checkbox" className="tasks-list__item-checkbox" id="task-2" />
              <label className="tasks-list__item-mark" htmlFor="task-2"></label>
              <span className="tasks-list__item-text" contentEditable="true">Check This</span>
              <button className="delete-button">x</button>
            </li>
            <li className="tasks-list__item">
              <input type="checkbox" className="tasks-list__item-checkbox" id="task-3" />
              <label className="tasks-list__item-mark" htmlFor="task-3"></label>
              <span className="tasks-list__item-text" contentEditable="true">Check This</span>
              <button className="delete-button">x</button>
            </li>
          </ul>

          <Tabs />
        </div>
      </main>
    </div >
  );
}

export default Main;
