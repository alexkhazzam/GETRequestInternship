import { HandlingUserInputs } from "./App/HandlingUserInputs.js";
import { SearchResultsList } from "./App/SearchResultsList.js";
import { ClickRowHandler } from "./Utility/ClickRowHandler.js";
import { GETHandler } from "./Utility/GETHandler.js";
import { AppendToDOM } from "./App/AppendToDOM.js"; 
import { BrowserCookiesHandler } from "./Utility/BrowserCookiesHandler.js";
import { postObjData } from "./App/State.js";

//using single quotes for a more modern JavaScript-feel

class App {
  DOMHelper() {
    const handlingUserInputs = new HandlingUserInputs();
    const appendToDOM = new AppendToDOM();
  }
  fetchInputs() {
    const handlingUserInputs = new HandlingUserInputs();
    handlingUserInputs.verifyInputs();
  }
  initiateGETReq() {
    const getHandler = new GETHandler();
  }
}

const searchBtn = document.querySelector("button");
searchBtn.addEventListener("click", () => {
  const app = new App();
  app.DOMHelper();
  app.initiateGETReq();
  app.fetchInputs();
});
