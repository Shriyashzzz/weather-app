

const mainContent = document.querySelector(".mainContent")
let isLoading = true;

export function setisLoading(givenLaodingState){
    isLoading = givenLaodingState;
}
export function getisLoading(){
    return isLoading
}



export function showLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        mainContent.style.display = "none";
        loadingOverlay.style.display = 'block';
    }
}

export function hideLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        mainContent.style.display = "flex";
        loadingOverlay.style.display = 'none';
    }
}
