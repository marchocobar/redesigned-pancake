// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Enter installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this application?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'If applicable, enter contribution guidelines.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'If applicable, enter tests for your application.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Enter application license.',
      choices: ['MIT', 'ISC', 'Mozilla Public License', 'Apache 2.0', 'none']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, generateMarkdown(data));

}

// TODO: Create a function to initialize app
function init() {
  questions();

    // .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
    // .then(() => console.log('Successfully wrote to readme.md'))
    // .catch((err) => console.error(err));

}

// Function call to initialize app
init();
