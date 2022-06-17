import { Task } from "./types/task";

export const sortTasks = (tasks: Task[]): Task[] => {
  let sortedTasks = tasks;

  function compare(task: Task) {
    if (task.isDone === false) {
      return -1;
    }
    if (task.isDone === true) {
      return 1;
    }
    return 0;
  }

  sortedTasks = tasks.sort((task) => compare(task));

  return sortedTasks;
};

export const filterTasks = (tasks: Task[], filter: string): Task[] => {
  let filteredTasks = tasks;

  if (filter === 'Active') {
    return filteredTasks.filter((task) => !task.isDone)
  }
  if (filter === 'Complated') {
    return filteredTasks.filter((task) => task.isDone)
  }
  return filteredTasks;
};
