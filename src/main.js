import getImagesByQuery from "./js/pixabay-api"
import { clearGallery, showLoader, createGallery, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const loadMoreButton = document.querySelector(".more-btn");


let page = 1;
let query = "";
let totalHitsCounter;
form.addEventListener("submit", handleSubmit);
loadMoreButton.addEventListener("click", handleClick)

async function handleSubmit(event) {
    event.preventDefault();   
    clearGallery();
    showLoader();
    hideLoadMoreButton();
    page = 1;
    const [input] = event.target.elements;
    query = input.value.trim();
    if (!input.value.trim()) {
        iziToast.show({
                message: "Please enter a valid search query",
                 messageColor: 'white',
                backgroundColor: 'red',
                maxWidth: "432px",
                close: true,
                position: "topRight",
        }
        )
        hideLoader();
         return
    }
    try {
        const response = await getImagesByQuery(input.value, page);
        totalHitsCounter = response.totalHits;
        
        if (response.hits.length === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                 messageColor: 'white',
                backgroundColor: 'red',
                maxWidth: "432px",
                close: true,
                position: "topRight",
})
        } else {
            totalHitsCounter -= response.hits.length;
            createGallery(response.hits);
            showLoadMoreButton();
            // if (page >= (response.totalHits / 15)) {
                if (response.hits.length >= totalHitsCounter) {
                iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                messageColor: 'white',
                backgroundColor: 'lightBlue',
                maxWidth: "432px",
                close: true,
                position: "topRight",
        })
                hideLoadMoreButton();
            }
        }
        hideLoader();
    } catch (error) {
        iziToast.show({
                message: error.message,
                 messageColor: 'white',
                backgroundColor: 'red',
                maxWidth: "432px",
                close: true,
                position: "topRight",
        })
        hideLoader();
    }  
    form.reset();
}

async function handleClick() {
    hideLoadMoreButton();
    showLoader();
    page++
    
    try {
        const response = await getImagesByQuery(query, page);
        createGallery(response.hits);
        hideLoader();
        showLoadMoreButton();
        const card = document.querySelector(".gallery-item");
        const size = card.getBoundingClientRect();
        window.scrollBy({
            top: size.height * 2,
            behavior: 'smooth' 
        });
        totalHitsCounter -= response.hits.length; 
        if (!totalHitsCounter) {
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                messageColor: 'white',
                backgroundColor: 'lightBlue',
                maxWidth: "432px",
                close: true,
                position: "topRight",
            })
            hideLoadMoreButton();
        } 
        
    } catch (error) {
        iziToast.show({
                message: error.message,
                 messageColor: 'white',
                backgroundColor: 'red',
                maxWidth: "432px",
                close: true,
                position: "topRight",
        })
        hideLoader();
    }   
    
    
    
    
}