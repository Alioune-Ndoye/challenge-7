// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)',
    Apache_2: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 

    GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD-3-Clause': '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3-Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',  

    None: '',
  };

  return licenseBadges[license]   
 || '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache_2: 'https://opensource.org/licenses/Apache-2.0',   

    GPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    None: '',
  };

  return licenseLinks[license]   
 || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing) 
  
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions 
  
  
  For any questions or issues, please contact me at:
  * GitHub: [${data.github}](https://github.com/${data.github})
  * Email: ${data.email}
  `;
  
}

export default  generateMarkdown;








