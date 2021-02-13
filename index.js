const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')


     
// array of questions for user
   const questions = [

        {
            type: 'input',
            message = 'What is your GitHub username?',
            name: 'github',
           // validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message = 'What is your email address?',
            name: 'email',
           // validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
    
        {
            type: 'input',
            message = 'What is the project title?',
            name: 'title',
            //validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message = 'What command do you use to install dependancies?',
            name: 'installation',
            default: 'npm i',
          //  validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message = ' Please write a short description about this project',
            name: 'describtion',
           // validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message = 'What command should be executed to run tests?',
            name: 'test',
            default: 'npm test',
            //validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message = 'How can the user use your app?',
            name: 'usage',
            //validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message = 'What does the user need to know about contributing to the this repo?',
            name: 'contribution',
            //validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            //list of licenses
            type: 'list',
            message = 'what kind of license is needed for this project?',
            name: 'license',
            choices: ['MIT', 'GPL', 'APACHE', 'GNU', 'None'],
            //validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        
    ]
    
   
// function to write README file
function writeToFile(fileName, data) {

    return fs.writeToFile(`./${fileName.toLowerCase().split('.').join('')}.md`, data, (err) => {
        if(err){
            console.log(err)
        }
        console.log("your README has been generated.")
    })
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
      console.log("Generating README...");
      writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
  
}

// function call to initialize program
init();
