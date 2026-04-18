import "./style.css";
import { instansiateHomePage } from "./instansiateDom"
import { showAbout, hideAbout } from "./homePage.js";
import { hideHome, showHome } from "./instansiateDom";



instansiateHomePage();
const nav = document.querySelector(".headerNav")

nav.addEventListener("click", (e)=>{
    if(e.target.id == "HomePage"){
        showHome()
        hideAbout()
    }else if (e.target.id == "AboutPage"){
        hideHome()
        showAbout()
        
    }
})