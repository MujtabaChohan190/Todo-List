import promptSync from 'prompt-sync';  // Import prompt-sync with ES Module syntax
const prompt = promptSync();  // Initialize prompt

let tasks = [];  // This array will hold the tasks

// Function to add a task
function addTask() {
    const task = prompt('Enter the task: ');
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

// Function to remove a task by index
function removeTask() {
    displayTasks();
    const index = parseInt(prompt('Enter the task number to remove: ')) - 1;
    if (index >= 0 && index < tasks.length) {
        const removed = tasks.splice(index, 1);
        console.log(`Task removed: "${removed}"`);
    } else {
        console.log('Invalid task number.');
    }
}

// Regular function to display each task
function displayTask(task, index) {
    console.log(`${index + 1}. ${task}`);
}

// Function to display all tasks
function displayTasks() {
    if (tasks.length === 0) {
        console.log('No tasks in the list.');
    } else {
        console.log('Tasks:');
        tasks.forEach(displayTask);  // Pass the regular function to .forEach()
    }
}

// Function to clear all tasks
function clearTasks() {
    tasks = [];
    console.log('All tasks cleared.');
}

// Main program loop
while (true) {
    console.log('\nChoose a command: add, remove, view, clear, exit');
    const command = prompt('What would you like to do? (add, remove, view, clear, exit): ').toLowerCase();

    if (command === 'add') {
        addTask();
    } else if (command === 'remove') {
        removeTask();
    } else if (command === 'view') {
        displayTasks();
    } else if (command === 'clear') {
        clearTasks();
    } else if (command === 'exit') {
        console.log('Exiting the program. Goodbye!');
        break;  // Breaks the loop and stops the program
    } else {
        console.log('Invalid command. Please try again.');
    }
}
