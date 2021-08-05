const axios = require('axios');

class CreateJiraIssueAction {
    constructor (baseurl, project, issuetype, summary, description, labels, token, squad) {
        this.baseurl = baseurl;
        this.project = project;
        this.issuetype = issuetype;
        this.summary = summary;
        this.description = description;
        this.labels = labels;
        this.token = token;
        this.squad = squad;
      }

      async execute() {
          let config = {
              headers: {
                  'Authorization': `Basic ${this.token}`,
              }
          }

          let data = {
            "fields": {
                "summary": this.summary,
                "description": this.description,
                "project": {
                  "key": this.project
                },
                "issuetype": {
                  "name": this.issuetype
                },
                "labels": this.labels,
                /* required Squad field */
                "customfield_11987": {
                    "value": this.squad
                }

            }
          }

          const response = await axios.post(`${this.baseurl}/rest/api/2/issue`, data, config);
          //console.log('Full response:\n');
          //console.log(response)
          //console.log('\n')
          return response;
      }
}

module.exports = CreateJiraIssueAction;
