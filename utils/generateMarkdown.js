// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT': 
    return'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    break;
    case 'ISC': 
    return'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    break;
    case 'Mozilla Public License': 
    return'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    break;
    case 'Apache 2.0': 
    return'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    break;
    case 'none': 
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT': 
    return'[MIT](https://opensource.org/licenses/MIT)';
    break;
    case 'ISC': 
    return'[ISC](https://opensource.org/licenses/ISC)';
    break;
    case 'Mozilla Public License': 
    return'[Mozilla Public License](https://opensource.org/licenses/MPL-2.0)';
    break;
    case 'Apache 2.0': 
    return'[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    break;
    case 'none': 
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## License
  [${data.license}](${renderLicenseLink(data.license)})

  ## Questions?
  GitHub: [${data.github}](https://github.com/${data.github})
  Email Me: ${data.email}

`;
}

module.exports = generateMarkdown;
