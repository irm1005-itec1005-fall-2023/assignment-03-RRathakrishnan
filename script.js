/* Assignment 03: Starting a Todo List App
 *
 * You are going to build the brains of a simple Todo List application
 * in JavaScript. You don't have to worry about the look of the app for now.
 * We will make it look awesome in Assignment 04.
 *
 * For now, we'll focus on giving the application the following features:
 * 1. Add a new todo item
 * 2. Delete a todo item
 * 3. Mark a todo item as completed
 * 4. Delete a todo item
 * 5. Clear all completed todos
 *
 * The following code is the starting point for this assignment.
 *
 * You will have to write the code to initialise the todoItems array and
 * for the functions below.
 *
 * 1. addToDoItem(text)
 * 2. removeToDoItem(todoId)
 * 3. markToDoItemAsCompleted(todoId)
 * 4. deleteToDoItem(todoId)
 * 5. clearCompletedTasks()
 *
 * YOU MUST NOT CHANGE ANY OF THE FUNCTION NAMES OR THE AUTOMATED TESTS WILL FAIL
 *
 * As you write each function, press on the "Run Tests" button in the browser
 * to run the automated tests and check your work.
 *
 * You can also add your own tests and debug statements at the bottom of this file.
 *
 */


// Data storage - Initialize the array of To Do items
//
// NOTE:
//
// You must use the following object literal structure when creating new todo items
// {
//   id: 0,
//   text: "This is a todo item",
//   completed: false,
// }

// Initialise an empty array with the variable name todoItems
let todoItems = [];
let counter = 0;

// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// the function does not need to return anything

function addToDoItem(text) {
  if (typeof text !== "string") { // Checks if the type of text is not a string
    return false; // If not a string, return false
  }

  // Create a new todo item using the provided text and a counter variable
  let todo = {
    id: counter,
    text: text,
    completed: false
  };

  // Push the new todo item to the todoItems array
  todoItems.push(todo);
  counter++;// Increment the counter for the next todo item
  console.log("Todo item was added");
}

// Function to remove a todo to the list
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything
  // Implement the logic to add a task here

  function removeToDoItem(todoId) {
    if (!Number.isInteger(todoId)) {
      return false;
    }

    let found = false;

    for (let itemIndex = todoItems.length - 1; itemIndex >= 0; itemIndex--) {
      if (todoItems[itemIndex].id === todoId) {
        console.log(todoItems);
        todoItems.splice(itemIndex, 1);
        console.log(todoItems);
        found = true;
        break; // Stop the loop once the item is found and removed
      }
    }

    console.log(todoItems);
    return found;
  }


// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything

function markToDoItemAsCompleted(todoId) {
  if (!Number.isInteger(todoId)) {
    console.error('Error: Input must be an integer');
    return;
  }

  let found = false;

 // Implement the logic to mark a task as completed here

  for (let index = 0; index < todoItems.length; index++) {
    if (todoItems[index].id === todoId) {
      todoItems[index].completed = true;
      found = true;
      break;
    }
  }

  if (!found) {
    console.log(`Task with ID ${todoId} not found`);
  }
}


// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted
function deleteToDoItem(todoId) {
  for (let index = 0; index < todoItems.length; index++) {
    if (todoItems[index].id === todoId) { // Check if the current todo item has the specified id
      todoItems.splice(index, 1);    // Remove the todo item from the array

        // Implement the logic to remove a task here

      console.log(`Task with ID ${todoId} deleted`);

      return;
    }
  }

  // Log a message if the task with the specified ID was not found
  console.log(`Task with ID ${todoId} not found`);
}


// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array
function clearCompletedTasks() {
  const newArray = [];

  for (let i = 0; i < todoItems.length; i++) {
    const todo = todoItems[i];

    if (!todo.completed) {
      newArray.push(todo);
    }
  }


    // Implement the logic to clear completed tasks here
    
  // Log the array before and after the removal
  console.log("Before:", todoItems);
  console.log("Removed:", todoItems.filter((todo) => todo.completed));

  // Update the todoItems array with the new array
  todoItems.length = 0;
  Array.prototype.push.apply(todoItems, newArray);

  // Log the updated array
  console.log("After:", todoItems);
}




// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed
