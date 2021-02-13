function renderLicenseBadge(license) {
    if (license !== "None") {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ''
  }

  
  function renderLicenseLink(license){
    if (license !== "None"){
        return (
            `\n* [license](#license)\n`
        )
    }
    return ''
  }


  function renderLicenseSection(license){
      if (license !== "None"){

          return (
            `## License
            
            This repo is set under the ${license} license.`
          )
        }
        return ''
  }



// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description

    ${data.description}
    
    ## Table of Contents

    * [installation](#installation)
    * [usage](#usage)
    ${renderLicenseLink(data.license)}
    * [contribution](#contribution)
    * [Tests](#tests)
    * [Questions](#quistions)
    
    ## Installation

    Run the following command to install the dependencies:
    \'\'\'\
    ${data.installation}
    \'\'\'\
    
    ## Usage
    ${data.usage}
    ${renderLicenseSection(data.license)}

    ## Contribution
    ${data. contribution}


    ## Tests
    Run the following command to run the tests:
    \'\'\'
    ${data.test}
    \'\'\'

   
    ## Questions

    Please contact me at ${data.email} if you have any questions about this project. Visit my GitHub to see more of my work at [${data.github}](https://github.com/${data.github}/).

       
  
  `
}
  
  module.exports = generateMarkdown;