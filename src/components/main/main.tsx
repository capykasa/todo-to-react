import NewTask from "../new-task/new-task";
import Tabs from "../tabs/tabs";
import TasksList from "../tasks-list/tasks-list";

const Main: React.FC = () => {
  return (
    <div className="page">
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">todos</h1>
        </div>
      </header>

      <main className="page-main">
        <h1 className="visually-hidden">To Do List</h1>

        <div className="tasks__list">
          <NewTask />

          <TasksList />

          <Tabs />
        </div>
      </main>
    </div >
  );
}

export default Main;
