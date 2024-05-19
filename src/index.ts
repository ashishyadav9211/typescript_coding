import { TodoCollection } from "./TodoCollection";
import { TodoItem } from "./TodoItem";
import inquirer from "inquirer";

let collectionItem = [
  new TodoItem(1, "Sproting Football", true),
  new TodoItem(2, "Singing ", true),
];

let addNewItem: TodoCollection = new TodoCollection(
  "Ashish TODO list ...",
  collectionItem
);

let newId = addNewItem.addTodoTask("Playing Cricket");

newId = addNewItem.addTodoTask("Playing Table Tenis");

// addNewItem.markComplete(true);

console.log(JSON.stringify(addNewItem.getToDOItems(true)));

//addNewItem.removeItemsBasedOnTaskStatus(true);
//console.log(JSON.stringify(addNewItem.getToDOItems(true)));

function displayTodoList(): void {
  console.log(
    `${addNewItem.userName}'s Todo List ` +
      `(${addNewItem.getTotalCount().pendingTask} items to do)`
  );
  addNewItem.getToDOItems(true).forEach((item) => item.printDetails());
}
enum Commands {
  Quit = "Quit",
}
function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Commands),
    })
    .then((answers) => {
      21;
      if (answers["command"] !== Commands.Quit) {
        promptUser();
      }
    });
}
console.log("calling prompt  ......");
promptUser();
