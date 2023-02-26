const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// const questions = [

// ];

inquirer.prompt(
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
//After testing, bring back code temporarily placed at bottom
//and place below next line
const template =`# ${title}

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

// * [Installation](#installation)
// * [Usage](#usage)
// * [contribution](#contribution)
// * [Credits](#credits)
// * [License](#license)
// # Installation
// ${installation}
// ## Usage
// ${usage}
// ## Contribution
// ${contribution}
// ### instructions
// ${instructions}
// ## Credits
// ${credit}
// ~~ License
// ${license}

// # Contact
// * GitHub :${git}
// * Linkedin :${linkedin}
// * E-mail :${email}