import axios from 'axios';

const api = axios.create({baseURL: 'https://task6-back.herokuapp.com'});

export const axiosData = async ({region, seed, limit, errors, page}) => {
  return await api.get('/' + region, {
    params: {seed, limit, errors, page}
  });
};

export const axiosCSV = async requestConfig => {
  return await api.get('/csv', {params: requestConfig});
}