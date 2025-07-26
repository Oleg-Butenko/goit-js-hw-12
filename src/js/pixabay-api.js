import axios from "axios";
export default getImagesByQuery;

const API_KEY = "51380879-d62d23ff75e6f86b6b9ab3020";

async function getImagesByQuery(query, page) {
    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: API_KEY,
            q: query.trim(),
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 15,
            page
        }
    })  
    return response.data
}