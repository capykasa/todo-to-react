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
          <div className="tasks-list__add-task">
            <button className="toggle-all" aria-label="Toggle all to do tasks">
              <span className="rotate"></span>
            </button>
            <input className="tasks-list__item-input" type="text" placeholder="What needs to be done?" />
          </div>

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

          <div className="tabs">
            <span className="tabs__info" aria-label="Number of to do tasks left to complete">3 items left</span>
            <ul className="tabs__menu">
              <li className="tabs__menu-item" aria-label="Show all to do tasks">
                <a href="/" className="tabs__menu-item-link">All</a>
              </li>
              <li className="tabs__menu-item tabs__menu-item--active" aria-label="Show active to do tasks">
                <a href="/" className="tabs__menu-item-link">Active</a>
              </li>
              <li className="tabs__menu-item" aria-label="Show completed to do tasks">
                <a href="/" className="tabs__menu-item-link">Completed</a>
              </li>
            </ul>
            <button className="tabs__clear-button" aria-label="Clear completed to do tasks">Clear completed</button>
          </div>
        </div>
      </main>
    </div >
  );
}

export default Main;
