// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: function (response) {
            if (!response.length) {
                return console.log("Please enter a valid title name.")
            }
            console.log(response);
            return true;
        }
    },
]);
};
questions()
    .then(answers => {
        console.log(answers);
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
