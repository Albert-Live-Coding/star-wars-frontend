import { header } from "./components/header.js";
// import { myFetch } from './utils/fetchData.js';
export const body = document.querySelector("body");
import {peopleArray, displayPeople} from "./components/people.js";


body.appendChild(header());

// myFetch().then((data) => console.log(data));

displayPeople(peopleArray);
