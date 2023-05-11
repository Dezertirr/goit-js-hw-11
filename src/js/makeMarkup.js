export function makePhotoList(data){
    const photoList = data.map ((result) => {
        return `<li class="list-photo-item"> <img src="${result.webformatURL}" alt="${result.tags}" loading='lazy'/>
        <ul class="statistics-list">
        <li>
        <p>Likes:</p><strong>${result.likes}</strong>
        </li>
        <li>
        <p>Views:</p><strong>${result.views}</strong>
        </li>
        <li>
        <p>Comments:</p><strong>${result.comments}</strong>
        </li>
        <li>
        <p>Downloads:</p><strong>${result.downloads}</strong>
        </li>
         </ul>
          </li>`;
    }).join('')
}

export function createListPhoto (hits){
    const markup = markupHits(hits);
    listPhoto.insertAdjacentHTML('beforeend', markup);
}