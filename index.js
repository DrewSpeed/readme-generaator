// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');

// TODO: Create an array of questions for user input
function promptUser() {
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
    {
        type: 'input',
        message: 'Please enter a brief description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please provide testing instructions and/or examples.',
        name: 'tests',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this product:',
        choices: [
            'Apache',
            'GNU',
            'MIT',
            'None'
        ]
    },
])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README.md file has been created!')
    })
}

const writeFileAsync = util.promisify(writeToFile)

// TODO: Create a function to initialize app
async function init() {
    try {
    const answers = await promptUser();
    const generateContent = generateMarkdown(answers);
    console.log("Your responses: ", answers);
    const project = answers.title;
    await writeFileAsync('./dist/README.md', generateContent);
    } catch(err) {
        console.log(err);
    }
    
}

// Function call to initialize app
init()