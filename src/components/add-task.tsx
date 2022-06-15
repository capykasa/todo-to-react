function AddTask(): JSX.Element {
  return (
    <div className="tasks-list__add-task">
      <button className="toggle-all" aria-label="Toggle all to do tasks">
        <span className="rotate"></span>
      </button>
      <input className="tasks-list__item-input" type="text" placeholder="What needs to be done?" />
    </div>
  )
}

export default AddTask;
