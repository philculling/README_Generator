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
            type: 'list',
            message: "Contribution guidelines are set to the Contributor Covenant. Click 'Ok' to continue",
            name: "contributions",
            choices: ['Ok'],      
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

const template =`# ${title}
![NPM License](https://img.shields.io/badge/license-${license}-red)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
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
Contributions are guided by the [Contributor Covenant](https://www.contributor-covenant.org/). By selecting 'Ok' you have agreed to abide by the Contributor Covenant Code of Conduct. To report any misuse, please email [Email](mailto:${email}).
 ${contributions}
# Tests
 ${tests}
# License
This application is covered under the ${license} license.
# Questions
* [Github](${github})
* Click here to contact the creator for further details.
[Email](mailto:${email})
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