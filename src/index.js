import Notiflix from "notiflix";
import axios from "axios";
import lodash from "lodash";
import './css/styles.css';
import './js/PhotoAPI.js';
import { SearchPhoto } from "./js/SearchPhoto.js";



const searchInput = document.getElementById('search-photo-input');
const searchButton = document.getElementById('search-photo-button')
const listPhoto = document.querySelector('list-photo')
export const loadMoreBtn = document.getElementById('load-more-btn')

searchButton.addEventListener ('click', SearchPhoto)
loadMoreBtn.addEventListener ('click', loadMorePhoto)

