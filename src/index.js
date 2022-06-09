const inquirer = require("inquirer");
const fs = require("fs");

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
    type: "list",
    name: "license",
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
    name: "github",
    message: "Please enter your Github username",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "Please enter your email address",
  },
];

const init = async () => {
  const answers = await inquirer.prompt(questions);
  const readMe = generateAnswers(answers);
  fs.writeFileSync("./myReadMe.md", readMe);
};

// generating the read me answers
const generateAnswers = (answers) => {
  {
    return `# ${answers.title} ![badge](${encodeURI(
      `https://img.shields.io/badge/${answers.license}-License-green`
    )});

  ## Contents

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

  \`\`\`
  ${answers.installation}
  \`\`\`

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing

  ${answers.contributing}

  ## Tests

  Please follow the instructions below:

  \`\`\`
  ${answers.test}
  \`\`\`


  ## Questions

  Please contact me if you have any queries on my email: ${
    answers.emailAddress
  };

  Visit my GitHub profile [here](https://github.com/${answers.github})`;
  }
};

// call the function
init();
