import getImagesByQuery from "./js/pixabay-api"
import { clearGallery, showLoader, createGallery, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const loadMoreButton = document.querySelector(".more-btn");


let page = 1;
let query = "";
form.addEventListener("submit", handleSubmit);
loadMoreButton.addEventListener("click", handleClick)

function handleSubmit(event) {
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
        form.reset();
         return
    }
    getImagesByQuery(input.value, page).then(res => {
        if (res.hits.length === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                 messageColor: 'white',
                backgroundColor: 'red',
                maxWidth: "432px",
                close: true,
                position: "topRight",
})
        } else {
            createGallery(res.hits);
            showLoadMoreButton();
            if (page >= (res.totalHits / 15)) {
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
        
    }).catch(error => {
        iziToast.show({
                message: error.message,
                 messageColor: 'white',
                backgroundColor: 'red',
                maxWidth: "432px",
                close: true,
                position: "topRight",
        })
        hideLoader();
    })
    
    form.reset();
    
}

function handleClick() {
    showLoader();
    page++
    hideLoadMoreButton()
    getImagesByQuery(query, page).then(res => {
        if (page >= (res.totalHits / 15)) {
            hideLoadMoreButton();
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                messageColor: 'white',
                backgroundColor: 'lightBlue',
                maxWidth: "432px",
                close: true,
                position: "topRight",
        })
        }
        createGallery(res.hits);
        const card = document.querySelector(".gallery-item");
        const size = card.getBoundingClientRect();
        window.scrollBy({
            top: size.height * 2,
            behavior: 'smooth' 
        });
        hideLoader()
        showLoadMoreButton()
    })
}