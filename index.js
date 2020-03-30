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
      label: core.getInput('label'),
      jiraEmail: core.getInput('jiraEmail'),
      jiraToken: core.getInput('jiraToken')
    };
    const base64token = Buffer.from(`${inputs.jiraEmail}:${inputs.jiraToken}`).toString('base64');
    await new CreateJiraIssueAction(inputs.jiraBaseUrl, inputs.project, inputs.issuetype, inputs.summary, inputs.description, inputs.label, base64token).execute();
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

exec();
