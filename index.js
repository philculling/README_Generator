const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt(
    [
        {
            type: 'input',
            message: "Title of project? While practising, write 'terminalREADME'",
            name: "title",
        },
        {
            type: 'input',
            message: "Description of project",
            name: "description",      
        },
        {
            type: 'input',
            message: "How do you install your app?",
            name: "installation",      
        },
        {
            type: 'input',
            message: "Describe how you use your app",
            name: "usage",      
        },
        {
            type: 'list',
            message: "What license did you use?",
            name: "license",
            choices: ['MIT', 'Apache', 'GNU', 'n/a'],      
        },
        {
            type: 'input',
            message: "Contribution guidelines",
            name: "contributions",      
        },
        {
            type: 'input',
            message: "Test instructions",
            name: "tests",      
        },
        {
            type: 'input',
            message: "Github username",
            name: "github",      
        },
        {
            type: 'input',
            message: "Email address",
            name: "email",      
        },
    ]
).then(({
    title,
    description,
    installation,
    usage,
    license,
    contributions,
    tests,
    github,
    email

}) => {

//const licenseText = ${license.toLowerCase().split(' ').join('')};

const template =`# ${title}
![NPM License](https://img.shields.io/badge/license-${license}-red)
# Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contributions)
* [Tests](#tests)
# Description 
${description}
# Installation
 ${installation}
# Usage
 ${usage}
# Contributions
 ${contributions}
# Tests
 ${tests}
# License
This application is covered under ${license}.
# Questions
* [Github](${github})
* [Email] ${email}
`;

// function to write README file
createNewFile(title, template);
}
);

function createNewFile(fileName, data) {
    
fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("README successfully generated");
    })
}
// function to initialize program
function init() {

}

// function call to initialize program
init();