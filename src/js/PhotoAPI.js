import axios from 'axios'


export class PhotoAPI{
#BASE_URL = `https://pixabay.com/api/`;
#KEY = `36257865-655e5ef0d461eea0383acd722`;
#PER_PAGE = 40;
#PAGE = 1;
#IMAGE_TYPE = 'photo';
#ORIENTATION = 'horizontal';
QUERY = '';
TOTAL_PAGES = 1;
PAGE = 1;


async searchPhoto (query){
const url = this.#BASE_URL;
const params = new searchParams ({
    key:this.#KEY,
    type_image: this.#IMAGE_TYPE,
    orientation: this.#ORIENTATION,
    perPages: this.#PER_PAGE,
    page:this.#PAGE
});

const response = await axios.get(`${url}?${params}`)
const data = response.data

this.TOTAL_PAGES =math.cell(data.totalHits/this.#PER_PAGE)
return data
}

get PerPage() {
    return this.#PER_PAGE;
}}

