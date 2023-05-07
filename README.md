## Professional README Generator

## Description

This is a command-line application that generates a professional README.md file from a user's input using the Inquirer package. The application will be invoked with the following command:

`node index.js`

The user will be prompted for their GitHub username and other information for the project the README is for.

The README will be populated with the following:

- Project title
- Description
- Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions

## Table of Contents

- [Criteria](#criteria)
- [Licensing](#licensing)
- [Installation](#installation)
- [Inquirer](#inquirer)
- [Questions](#questions)

## Criteria

```bash
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Licensing

MIT
[![Generic badge](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/.)

## Installation

```bash
npm install
npm install inquirer
node index.js
```

## Inquirer

Inquirer is a collection of common interactive command line user interfaces.

- providing error feedback
- asking questions
- parsing input
- validating answers
- managing hierarchical prompts

## Walkthrough

[Walkthrough Video] (https://drive.google.com/file/d/1BZLQ4mHLKhNp2MydetPmaN-RwfO1fVMx/view)

## Questions

[aalexandr6](https://github.com/aalexandr6) at aalexanderp6@gmail.com.
