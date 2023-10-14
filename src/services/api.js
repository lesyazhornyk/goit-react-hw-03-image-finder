import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33346369-2ef3107e5072afedc1a33039c';

export const fetchImages = async (page, search) => {
  const params = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 12,
  });

  if (page) {
    params.set('page', page);
  }

  if (search) {
    params.set('q', search);
  }

  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data.hits;
};

const api = {
  fetchImages,
};

export default api;
