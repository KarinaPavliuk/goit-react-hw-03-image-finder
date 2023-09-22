import axios from 'axios';
axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=38592698-fb670dc072756c252ce931a2b&image_type=photo&orientation=horizontal&per_page=12';
//  /?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export const getAllImages = async () => {
  const { data } = await axios('images');
  return data;
};
