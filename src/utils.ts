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
