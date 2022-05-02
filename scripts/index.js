// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// import { navbar } from "../components/navbar";

// let nav = document.getElementById("navbar");
// nav.innerHTML = navbar();
import { navbar } from "../components/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML = navbar();

import { append, searchNews } from "./fetch.js";

let search_input = (e) => {
    if(e.key === "Enter"){
        let value = document.getElementById("search_input").value;
        searchNews(value).then((data) => {
            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results, container);
      });
       
    }
};


document.getElementById("search_input").addEventListener("keydown", search);

let categories = document.getElementById("categories").children;

function cSearch() {
    console.log(this.id);
    searchNews(this.id).then((data) => {
        console.log(data);

        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
}

for(let el of categories) {
    el.addEventListener("click",cSearch)
}

