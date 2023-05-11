import { PhotoAPI } from "./PhotoAPI";
import { loadMoreBtn } from '../index.js'

export function SearchPhoto(evt) {
    evt.preventDefault();
  console.log(evt)
    const photoName = evt.target.searchInput.value.trim();
    listPhoto.innerHTML = ``;
    PhotoAPI.PAGE = 1;
    PhotoAPI.QUERY = photoName;
    
    function SearchPhoto(evt) {
        evt.preventDefault();
      
        const photoName = evt.target.searchInput.value.trim();
        listPhoto.innerHTML = ``;
        PhotoAPI.PAGE = 1;
        PhotoAPI.QUERY = photoName;
      
        fetch(`${PhotoAPI.BASE_URL}?${PhotoAPI.params}`).then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(
              'Sorry, there are no images matching your search query. Please try again.'
            );

          }
        }).then((data) => {
          if (data.hits.length < PhotoAPI.PER_PAGE) {
            loadMoreBtn.disabled = true
          }


        }).catch((error) => {
          console.log(error);
          Notiflix.Notify.failure(error.message);
        });
      }
  }