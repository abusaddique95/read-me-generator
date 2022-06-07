const inquirer = require("inquirer");

// array of questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter any installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter your project usage information",
  },
  {
    type: "input",
    name: "License",
    message: "Please select the license used for this project",
    choices: ["Mozilla", "MIT", "Apache", "Boost", "N/A"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter your project contribution guidelines",
  },
  {
    type: "input",
    name: "test",
    message: "Please enter your project test instructions:",
  },
  {
    type: "input",
    name: "Github",
    message: "Please enter your Github username",
  },
  {
    type: "input",
    name: "Email Address",
    message: "Please enter your email address",
  },
];

const fs = require("fs");

const init = async () => {
  const answers = await inquirer.prompt(questions);
};

// call the function
init();

// generating the read me answers
const generateAnswers = (answers) => {
  {
    return `# ${answers.title} ![alt text](${encodeURI(
      `https://img.shields.io/badge/${answers.license}-License-green`
    )})`;
  }


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
 
${answers.description}

## Installation
 
Please follow the instructions below to clone this project:
\`\`\`\
 
${answers.installation}
  
\`\`\`\

## Usage
${answers.usage}

## License
${answers.license}
  
## Contributing
 
${answers.contributing}
 
## Tests

Please follow the instructions below:

\`\`\`\
${answers.test}
\`\`\`\

## Author
${answers.fullName}

## Questions

Please contact me if you have any queries on my email: ${answers.email};

Visit my GitHub profile [here](https://github.com/${answers.userName})`;
};
