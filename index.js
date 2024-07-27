// TODO: Include packages needed for this application

import inquirer from 'inquirer';

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How do you use this project?',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List any collaborators here.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does your project have?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


