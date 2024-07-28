// TODO: Include packages needed for this application

import inquirer from 'inquirer'; //for the prompts
import fs from 'fs'; //to write file

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
        name: 'tableOfcontents',
        message: 'Provide the Table of Contents (optional)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contributing guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does your project have?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide your contact information for questions.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log(`${fileName} has been created!`)
    });
}

// TODO: Create a function to initialize app
function init() {};
// Function call to initialize app
init();


