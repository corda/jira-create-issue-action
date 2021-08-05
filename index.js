const core = require('@actions/core')
const CreateJiraIssueAction = require('./common/net/jira/action');

async function exec () {
  try {
    const inputs = {
      jiraBaseUrl: core.getInput('jiraBaseUrl'),
      project: core.getInput('project'),
      issuetype: core.getInput('issuetype'),
      summary: core.getInput('summary'),
      description: core.getInput('description'),
      labels: core.getInput('labels'),
      jiraEmail: core.getInput('jiraEmail'),
      jiraToken: core.getInput('jiraToken'),
      squad: core.getInput('squad'),
    };
    const base64token = Buffer.from(`${inputs.jiraEmail}:${inputs.jiraToken}`).toString('base64');
    const response = await new CreateJiraIssueAction(inputs.jiraBaseUrl, inputs.project, inputs.issuetype, inputs.summary, inputs.description, inputs.labels.split(','), base64token, inputs.squad).execute();
    console.log(response);
    core.setOutput("issue", response.data.key);
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

exec();
