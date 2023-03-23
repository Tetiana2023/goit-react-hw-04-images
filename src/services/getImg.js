import axios from 'axios';
const API_KEY = '33287226-4c6d423cc3cce82da2cd47053';
const BASE_URL = 'https://pixabay.com';

export const getImg = async (inputValue, page) => {
  const response = await axios.get(
    `${BASE_URL}/api/?key=${API_KEY}&q=${inputValue}&page=${page}&per_page=12&orientation=horizontal&image_type=photo&`
  );
  return response.data;
 
};
