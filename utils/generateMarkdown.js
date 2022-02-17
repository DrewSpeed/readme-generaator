// creates license
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)` 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
  return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'GNU') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  } else {
  link = renderLicenseLink(license)
  return `## License
  This application is covered by the [${license}](${link}) license.`
  }
}

function renderLicenseToc(license) {
  if (license === 'None') {
    return
  } else {
    return `- [License](#license)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  license = data.license;
  return `# ${data.title}
${renderLicenseBadge(license)}
## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseToc(license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
To see more of my work, visit [my Github profile](github.com/${data.github}).<br/>
If you have any questions regarding this application, please email me at 
[${data.email}](${data.email}).
`;
}

module.exports = generateMarkdown;
