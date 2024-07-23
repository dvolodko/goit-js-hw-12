import axios from 'axios';

const KEY = '32552782-0d4c86680018457e820f20492';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const config = {
  params: {
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  },
};

export async function fetchImages(query, page) {
  config.params.q = query;
  config.params.page = page;

  const response = await axios.get('', config);

  return response.data;
}
