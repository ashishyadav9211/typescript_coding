import { TodoItem } from "./TodoItem";

type TotatlRecord = {
  totalCount: Number;
  pendingTask: Number;
  completedTask: Number;
};
export class TodoCollection {
  private nextId: number = 1;
  private itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, public todoItems: TodoItem[] = []) {
    this.todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  addTodoTask(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem {
    return this.itemMap.get(this.nextId);
  }
  markComplete(complete: boolean) {
    this.itemMap.forEach((item) => (item.complete = complete));
  }

  getToDOItems(complete: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter(
      (item) => complete == item.complete
    );
  }

  removeItemsBasedOnTaskStatus(taskStatus: boolean): void {
    [...this.itemMap.values()].filter((item) => {
      if (item.complete == taskStatus) {
        this.itemMap.delete(item.id);
      }
    });
  }

  getTotalCount(): TotatlRecord {
    console.log(this.itemMap);
    return {
      totalCount: this.itemMap.size,
      pendingTask: this.getToDOItems(false).length,
      completedTask: this.getToDOItems(true).length,
    };
  }
}
