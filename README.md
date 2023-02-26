# README_Generator
Week 11 Challenge Working with ES6 and Node.js

Phil's to-do list

Check what's going on with credits. Remove if not needed.
Commit.

Read the README guide that's in BCS, in the long explanation of what to do for this project. Or the link below if that works, just in case this throws up any issues.

Create table if you've decided to go ahead with this.

Research the licence: which one you should use; ignore the badge for the moment.

Complete the github rendering which also has to include a link.

Research badges, work out how to get it to show; remember that on Friday, both Anthony and Esra sent links about this.

Complete the email rendering which has some quite specific instructions.

Read about how to submit a video.

Do the actual README (this one).

Do the video!

## Your Task

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README Guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md) as a reminder of everything that a high-quality, professional README should contain. 

The application will be invoked by using the following command:

```bash
node index.js
```
## Acceptance Criteria

* Create a command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

## Getting Started

Here are some guidelines to help you get started:

* Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

I think I can ignore the above paragraph as it was in the starter code.
