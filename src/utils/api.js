import axios from 'axios';

const BASE_URL = 'https://v2.jokeapi.dev';

export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data.categories;
};

export const fetchJokes = async (category, amount = 2) => {
  const response = await axios.get(
    `${BASE_URL}/joke/${category}?type=single&amount=${amount}`,
  );
  return response.data.jokes;
};
