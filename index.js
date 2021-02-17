
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

     
// array of questions for user
   const questions = [

        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
           validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
    
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
            validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message: 'What command do you use to install dependancies?',
            name: 'installation',
            default: 'npm i',
             validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message: ' Please write a short description about this project',
            name: 'description',
            validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message: 'What command should be executed to run tests?',
            name: 'test',
            default: 'npm test',
            validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message: 'How can the user use your app?',
            name: 'usage',
            validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            type: 'input',
            message: 'Who contributed on this project?',
            name: 'contribution',
            validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        {
            //list of licenses
            type: 'list',
            message: 'what kind of license is needed for this project?',
            name: 'license',
            choices: ['MIT', 'GPL', 'APACHE', 'GNU', 'None'],
            validate: (value) =>{ if(value){return true} else {return 'it need a value to continue'}}
        },
        
    ]

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
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
  
