import "./style.css";
import { instansiateHomePage } from "./instansiateDom"
import { instansiateAboutPage } from "./homePage.js";
import { hideHome, showHome } from "./instansiateDom";



instansiateHomePage();
instansiateAboutPage()
const nav = document.querySelector(".headerNav")

nav.addEventListener("click", (e)=>{
    if(e.target.id == "HomePage"){
        showHome()
    }else if (e.target.id == "AboutPage"){
        hideHome()
        
    }
})