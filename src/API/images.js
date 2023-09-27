import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getAllImages = async (searchWords, page) => {
  const API_KEY = '38592698-fb670dc072756c252ce931a2b';
  const value = searchWords.trim().split(' ').join('+');

  const { data } = await axios(
    `/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
