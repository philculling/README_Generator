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
            message: "Table of contents",
            name: "contents",      
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
            name: "licence",
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GMU license', 'n.a'],      
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
    title 
}) => {
//Content removed needs to be replaced from lines 74 onwards.
//"Ish" if you add or remove anything from above!
const template =`# ${title}
* [Description](#description)
* [Contents](#contents)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contributions)
* [Tests](#tests)
* [Credits](#credits)
# Installation
Experimenting with template literal text here.
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

/*
${installation}
## Usage
${usage}
## Contribution
${contributions}
### instructions
${instructions}
## Credits
${credit}
~~ License
${license}

# Contact
* GitHub :${github}
* Email :${email}
*/