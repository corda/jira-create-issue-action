# git-jira-create-action

## Requirements

This github action step has no external requirements and can be used as a standalone step.

## Input

This github action step takes the following arguments as input:
- jiraBaseUrl (the base url for the jira project)
- project (the jira project)
- issueType (the issue type that the tickets will have when created)
- summary (the summary of the jira tickets created)
- description (the description of the jira tickets created)
- labels (the labels that the jira ticket will have once created)
- jiraEmail (the email of the jira account to use, which needs to have write access to the project)
- jiraToken (an access token of the jira account to use)

## Usage

This github action step should be placed in a github action workflow that is triggered by an issue generation.

Once the issue is generated, call this action step to automatically generate a relevant ticket in jira.
