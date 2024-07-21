import { CreateTask, Task } from "../models";

export interface ITaskService {
  getUserTasks(userId: string): Task[];
  addTask(newTask: CreateTask, userId: string): void;
  removeTask(taskId: string): void;
}