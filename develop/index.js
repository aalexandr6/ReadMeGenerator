// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generatorMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {//Start
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
            console.log('Enter your GitHub username!');
            return false;
            }
    }
    },//Email
    {   type: 'input',
        name: 'questionsEmail',
        message: 'Enter your email',
        validate: questionsEmailInput => {
            if (questionsEmailInput) {
            return true;
            } else {
            console.log('Please enter an email!');
            return false;
            }
    }
    },//Title   
     {  type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
        validate: projectTitleInput => {
        if (projectTitleInput) {
        return true;
        } else {
        console.log('Please enter the title of your project!');
        return false;
        }
    }
    }
    ,//Description
    {   type: 'input',
        name: 'description',
        message: 'Provide a description of your project',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
    }
    },// License
    {   type: 'list',
        name: 'licenseChoice',
        message: 'What license does your project have?',
        choices: [
            'MIT', 
            'None'
        ],
    },//Install
    {   type: 'input',
        name: 'installationInstructions',
        message: 'Provide instructions to install your project.',
        validate: installationInstructions => {
            if (installationInstructions) {
            return true;
            } else {
            console.log('You need to provide instructions to install your project!');
            return false;
            }
    }
    },//Usage
    {   type: 'input',
        name: 'usageInstructions',
        message: 'Provide instructions to use your project.',
        validate: usageInstructions => {
            if (usageInstructions) {
            return true;
            } else {
            console.log('You need to provide instructions to use your project!');
            return false;
            }
        }
    },//Contribution INST*
    {   type: 'input',
        name: 'contributionInstructions',
        message: 'Provide instructions on how you want others to contribute.',
        validate: contributionInstructions => {
            if (contributionInstructions) {
            return true;
            } else {
            console.log('You need to provide instructions on how users can contribute to your project!');
            return false;
            }
        }
    },//How to Test
    {   type: 'input',
        name: 'testInstructions',
        message: 'Provide instructions on how users can test your project.',
        validate: testInstructions => {
            if (testInstructions) {
            return true;
            } else {
            console.log('You need to provide instructions on how users can test!');
            return false;
            }
        }
    }  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log("You have Created the README! Go to the Generator!")
    })
};

// TODO: Create a function to initialize app
function init() {

    console.log(`
    =================
    Welcome to a ReadMe Generator! 
    Answer these questions to generate a README.
    =================
    `);

    inquirer.prompt(questions)
    .then(readmeData => {
        // console.log(readmeData);
        writeToFile("./Generator/README.md", generateMarkdown(readmeData))
    })
};
// Function call to initialize app
init();
