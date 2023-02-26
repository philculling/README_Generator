const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt(
    [
        {
            type: 'input',
            message: "Title of project?",
            name: "title",
        },
        {
            type: 'input',
            message: "Description of project",
            name: "description",      
        },
        {
            type: 'input',
            message: "Table of contents",
            name: "contents",      
        },
        {
            type: 'input',
            message: "how do you install your app?",
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
            name: "licence",
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GMU license', 'n.a'],      
        },
        {
            type: 'input',
            message: "List any contributions or credits",
            name: "contributions",      
        },
        {
            type: 'input',
            message: "Describe your tests",
            name: "tests",      
        },
        {
            type: 'input',
            message: "Any questions?",
            name: "questions",      
        },
    ]
).then(({
    title 
}) => {
const template =`# ${title}
* [Installation](#installation)
* [Usage](#usage)
* [contribution](#contribution)
* [Credits](#credits)
* [License](#license)
# Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
### instructions
${instructions}
## Credits
${credit}
~~ License
${license}

# Contact
* GitHub :${git}
* Linkedin :${linkedin}
* E-mail :${email}
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