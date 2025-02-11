// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    //commonly used licenses, get links from github//
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'BSD3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'Mozilla Public 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;
    default:
      return '';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //links from clicking on badge//
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/license/MIT'
      break;
    case 'GPL v3':
      return 'https://www.gnu.org/licenses/agpl-3.0'
      break;
    case 'Apache 2.0':
      return 'https://opensource.org/license/apache-2-0'
      break;
    case 'BSD3-Clause':
      return 'https://opensource.org/license/BSD-3-Clause'
      break;
    case 'Mozilla Public 2.0':
      return 'https://opensource.org/license/MPL-2.0'
      break;
    default:
      return '';
      break;

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }

  const licenseLink = renderLicenseLink(license);
  return `## License
  
  This project is licensed under ${license} license. For more information, see [here](${licenseLink})`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license); 
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.projectName}

  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ${licenseSection}

  ## Questions
  If you have any questions about the repository, contact me at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).`;
}

export default generateMarkdown;
