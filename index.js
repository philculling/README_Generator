const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// const questions = [

// ];

inquirer.createPromptModule(
    [
        {
            type: 'input',
            message: "Title of project?",
            name: "title",
        }
    ]
).then(({
    title 
}) => {
const template =`# ${title}

* [Installation](#installation)
* [Usage](#usage)
* [contribution](#contribution)
* [Credits](#credits)
* [License](#License)
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
* E-mail :${email}`;
}
)

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
