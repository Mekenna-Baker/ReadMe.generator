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
        name: 'tableOfContents',
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
        message: 'What are the contributing guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: //replace with license options//,
    },
    {   type: 'input',
        name: 'github',
        message: 'Enter your Github username:',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter  your email address:'
    }.
    {
        type: 'input',
        name: 'questions',
        message: 'Provide your contact information for questions.',
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'Please enter the name of the file to save the README (README.MD):',
        default: 'README.md',
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    console.log(`Writing  to file: ${fileName}`);
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log(`${fileName} has been created!`)
    });

}
// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = `
        # ${answers.projectName}
        
        ## Description
        ${answers.description}
        
        ## Table of Contents
        ${answers.tableOfContents}
        
        ## Installation
        ${answers.installation}
        
        ## Usage
        ${answers.usage}
        
        ## Contributing
        ${answers.contributing}
        
        ## Tests
        ${answers.tests}
        
        ## License
        ${answers.license}
        
        ## Questions
        ${answers.questions}
        `;

        console.log(`Provided filename: ${answers.fileName}`);
        writeToFile(answers.fileName, readmeContent);
    }).catch((error) => console.error("Error initializing app:", error));
}

// Function call to initialize app
init();


