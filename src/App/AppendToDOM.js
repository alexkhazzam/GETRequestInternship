import { HandlingUserInputs } from "./HandlingUserInputs.js";

export class AppendToDOM extends HandlingUserInputs {
  constructor() {
    super();
    this.awaitAsyncReq();
    this.ul = document.querySelector("ul");
    this.listItems = document.querySelectorAll("li");
  }
  createLi() {
    let li = document.createElement("li");
    li.textContent = "";
    li.textContent = `${this.name}`;
    this.ul.append(li);
  }
}
