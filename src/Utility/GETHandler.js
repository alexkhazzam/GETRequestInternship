import { postObjData } from "../App/State.js";
import { HandlingUserInputs } from "../App/HandlingUserInputs.js";

export class GETHandler {
  constructor() {
    this.listOfObjects = [];
    this.listOfPosts;
    this.userInput = "storybook";
  }

  sendGET(method, url) {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = "json"; //no need for "JSON.parse()"

      xhr.onload = function () {
        resolve(xhr.response);
      };

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          console.log(xhr.status);
          reject(new Error("Something went wrong!"));
        }
      };

      xhr.onerror = function () {
        console.log(xhr.response);
        reject(new Error("Failed to send request!"));
      };

      xhr.send();
    });
    return promise;
  }

  async fetchPosts() {
    const responseData = await this.sendGET(
      "GET",
      "https://api.github.com/search/repositories?q=react-native&sort=stars&order=des"
    );
    this.listOfPosts = responseData;
    for (let i = 0; i <= 30; i++) {
      //30 loops for 30 posts
      let item = {
        fullName: this.listOfPosts.items[i].full_name,
        Description: this.listOfPosts.items[i].description,
        Language: this.listOfPosts.items[i].language,
        GithubUrl: this.listOfPosts.items[i].html_url,
        HomepageUrl: this.listOfPosts.items[i].homepage,
        Created: this.listOfPosts.items[i].created_at,
        Updated: this.listOfPosts.items[i].updated_at,
        Stars: this.listOfPosts.items[i].stargazers_count,
        Watchers: this.listOfPosts.items[i].watchers_count,
        OpenIssues: this.listOfPosts.items[i].open_issues_count,
      };
      postObjData.push(item);
      const handlingUserInputs = new HandlingUserInputs(); //this should not be in the loop because it will call the class 30 times; if i move it out of the loop, then an error will be thrown saying that it cannot find "full_name" of undefined or something like that
      handlingUserInputs.awaitAsyncReq();
    }
  }
}
