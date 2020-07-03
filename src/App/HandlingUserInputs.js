import { postObjData } from "./State.js";
import { GETHandler } from "../Utility/GETHandler.js";
import { AppendToDOM } from "./AppendToDOM.js"; 

export class HandlingUserInputs extends GETHandler {
  constructor() {
    super();
    this.searchedDate = document.querySelector("input");
  }
  verifyInputs() {
    this.fetchPosts();
  }
  awaitAsyncReq() {
    let space = 0;
    this.editedInput = this.searchedDate.value.trim();
    postObjData.forEach((obj) => {
      let { fullName } = obj;
      if (fullName === this.editedInput) {
        console.log(fullName); 
        this.name = fullName;
        space++;
      }
      if (space === 0) {
        console.log("Could not find item");
      } else {
        const appendToDOM = new AppendToDOM();
        appendToDOM.createLi();
      }
    });
  }
}
