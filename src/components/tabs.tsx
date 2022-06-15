function Tabs(): JSX.Element {
  return (
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
  )
}

export default Tabs;
