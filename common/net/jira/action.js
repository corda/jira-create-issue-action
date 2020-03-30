const axios = require('axios');

class CreateJiraIssueAction {
    constructor (baseurl, project, issuetype, summary, description, labels, token) {
        this.baseurl = baseurl;
        this.project = project;
        this.issuetype = issuetype;
        this.summary = summary;
        this.description = description;
        this.labels = labels;
        this.token = token;
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
                "labels": this.labels
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