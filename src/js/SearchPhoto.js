import { PhotoAPI } from "./PhotoAPI";
import { loadMoreBtn, listPhoto, searchForm } from '../index.js'
import Notiflix from "notiflix";
import { makePhotoList} from './makeMarkup.js';

const photoAPI = new PhotoAPI();

export async function SearchPictures(evt) {
  evt.preventDefault();
  photoAPI.QUERY = evt.target.elements.searchQuery.value.trim();
  listPhoto.innerHTML = '';
  loadMoreBtn.style.display = 'none';
  photoAPI.clearPage()
  searchForm.reset()
  if (!photoAPI.QUERY) return;
  try{
    const result = await photoAPI.searchPhoto()
    if(result.hits.length === 0){
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return;
    }
    const markup = makePhotoList(result.hits)
    listPhoto.insertAdjacentHTML("beforeend", markup)
    if (photoAPI.TOTAL_PAGES === photoAPI.PAGE - 1){
      console.log('777')
      return
    }
    loadMoreBtn.removeAttribute('style');
  }catch {
    Notiflix.Notify.failure(`Sorry, this invalid request`)
  }
}


  export async function loadMorePhoto(){
    loadMoreBtn.style.display = 'none';
    try {
        const result = await photoAPI.searchPhoto();
        const markup = makePhotoList(result.hits)
        listPhoto.insertAdjacentHTML("beforeend", markup)
        if (photoAPI.TOTAL_PAGES === photoAPI.PAGE - 1){
          console.log('777')
          return
        }
        if (PhotoApi.PAGE >= PhotoApi.TOTAL_PAGES) {
          Notiflix.Notify.warning(
            "We're sorry, but you've reached the end of search results."
          );
    }
  }
    catch(error){
      console.log(error);
      Notiflix.Notify.failure(`Oops, Something went wrong!`)
    }
  
}
  