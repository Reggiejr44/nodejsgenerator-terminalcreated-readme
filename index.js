// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown  = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
function userInput(){
    
    return inquirer.prompt([

    { name: 'license',
    message: 'Select kind of license for this application:',
    type: 'list',
    choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "MIT"]
    },

    { name: 'title',
    message: 'What is the title of this project?',
    type: 'input'},

    { name: 'description',
    message: 'What does this application do?',
    type: 'input'},

    { name: 'install',
    message: 'What are the instructions for installation?',
    type: 'input'},

    { name: 'usage',
    message: 'How do I use this application?',
    type: 'input'},

    { name: 'contributing',
    message: 'How do I contribute to this application?',
    type: 'input'},

    { name: 'testing',
    message: 'How do I test this application?',
    type: 'input'},

    { name: 'username',
    message: 'What is your GitHub username?',
    type: 'input'},

    {  name: 'email',
    message: 'What is your e-mail address?',
    type: 'input'},

    { name: 'fileName',
    message: 'What do you want to call this readme?',
    type: 'input'},
])};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();

