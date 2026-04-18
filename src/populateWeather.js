import { fetchWeatherGif } from "./api";
import { getRelativeDate, isItDayTime } from "./date.js";

const weatherArticle = document.querySelector(".weatherBox")
export const main = document.querySelector("main")






export async function populateWeatherData(cleanWeatherData, isFarenheight = true){
    await populateWeatherHeader(cleanWeatherData, isFarenheight);
    setWeatherBoxBG(cleanWeatherData)
     
}



function setWeatherBoxBG(cleanWeatherData){
    const weatherBox = document.querySelector(".weatherBox")
     if(!isItDayTime(cleanWeatherData.currentConditions.datetime)){
        main.classList.add("mainNightBg")
        weatherBox.classList.add("weatherNightBG");
     }else if(isItDayTime(cleanWeatherData.currentConditions.datetime)){
        console.log(isItDayTime(cleanWeatherData.currentConditions.datetime))
        if (main.classList.contains('mainNightBg')) {
            main.classList.remove("mainNightBg")
            weatherBox.classList.remove("weatherNightBG")
        }      
     }
    
}


async function populateWeatherCards(cleanWeatherData){
    const weatherCardBox = createElement("div", "weatherCardBox") 
    for(let i =1; i<4;i++){
        weatherCardBox.append(await getCardBox(cleanWeatherData, i))
    }
    weatherArticle.append(weatherCardBox)


}

async function getCardBox(cleanWeatherData, dayindex){
    let dayIconUrl = await getWeathericon(cleanWeatherData.days[dayindex].icon)
    const dayCard = createElement("div", "weatherCard")

    dayCard.append(createElement("p", "cardDay", getRelativeDate(cleanWeatherData.days[dayindex].datetime)), createElement("img", "iconCard", dayIconUrl));

    return dayCard;

}




async function populateWeatherArticle(cleanWeatherData, isFarenheight){
    const weatherInfobox = createElement("div", "weatherInfoBox")
    const minTodayBox =  createElement("div", "minMaxBox")
    const maxTodayBox = createElement("div", "minMaxBox")
    minTodayBox.append(createElement("p", "minP", "Min Today"), `${getTemp(cleanWeatherData.days[0].tempmin, isFarenheight)}`)
    maxTodayBox.append(createElement("p", "maxP", "Max Today"), `${getTemp(cleanWeatherData.days[0].tempmax, isFarenheight)}`)
    weatherInfobox.append(maxTodayBox, minTodayBox)
    weatherArticle.appendChild(weatherInfobox)

    await populateWeatherCards(cleanWeatherData)

}



 

async function populateWeatherHeader(cleanWeatherData, isFarenheight ){
    let resolvedAddress = createElement("p", "addressTitle", cleanWeatherData.address)
    let weathericonurl = await  getWeathericon(cleanWeatherData.icon);
    const weatherTempBox = createElement("div", "weatherTempBox")
    const weathericonElement = createElement("img","today-Weather-Icon", weathericonurl)

    weatherTempBox.append(weathericonElement, createElement("p", "tempInfo", getTemp(cleanWeatherData.temp,isFarenheight )))
    weatherArticle.append(resolvedAddress, weatherTempBox)
    populateWeatherArticle(cleanWeatherData, isFarenheight)


}





function getTemp(temp, isFarenheight){
    if (isFarenheight){
        return `${Math.round(temp)}˚F`
    }else{
        return `${Math.round((temp - 32) * (5/9))}˚C`
    }
}



async function getWeathericon(givenIcon){
    return await import(`./weather-icons/${givenIcon}.svg`).then((icon) =>{
        return icon.default;
            
    })
}



export async function populateSearchGif(weatherDesc){
    const todayWeatherIcon = document.querySelector(".weather-gif")
    let rawGif = await fetchWeatherGif(`${weatherDesc} weather`);

    let  gifUrl = rawGif[0].images.downsized_medium.url;
    todayWeatherIcon.src = gifUrl;
    
}





function createElement(elementType, className,elementContent){
    const newElement = document.createElement(elementType);
    newElement.classList.add(className);
    if(elementType == "p" && elementContent){
        newElement.textContent = elementContent
    } else if(elementType == "img" && elementContent){
        newElement.src = elementContent
    }
    return newElement;

}




