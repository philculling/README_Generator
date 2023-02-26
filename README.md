# README_Generator
Week 11 Challenge Working with ES6 and Node.js

Phil's to-do list

Read the instructions again, below, particularly about contents.
Read about tables: how fully depends on the instructions. If we're definitely required to produce a table, read carefully, otherwise maybe don't bother.
Think more carefully about exactly what is required for the contents section. You probably need to remove it from the user prompt section and just make sure it's in the template literal, which you can adapt later to create links.
Try to obtain clarity of thought, don't worry if you don't do any more coding before lunch. Most of it is done, it's clarity of thought you need otherwise you will go deep into a rabbit hole of confusion and create the need for lots of undoing.

Look at exercises from earlier in the week about rendering to html and work out how you can render successfully to a mardown file. You should probably try to resolve this before moving on.

If necessary ask BCS.

If stuck, continue and try to address the rendering later?

Research the licence: which one you should use, how to give options when node index is run, but ignore the badge for the moment.

Read the README guide that's in BCS, in the long explanation of what to do for this project. Or the link below if that works.

Research badges, work out how to get it to show; remember that on Friday, both Anthony and Esra sent links about this.

Complete the github rendering which also has to include a link.

Work out how to complete the table of contents that will contain internal links to the corresponding section of the README. One way might be to REMOVE it from the prompt questions in node. js, but keep it in what is to be rendered to the markdown file, and then set up links from within the markdown file.

Continue the rendering code.

Read about how to submit a video.

Finish the rendering code.

See if you can work out how to make the correct README update!

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
