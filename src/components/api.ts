import axios, { AxiosInstance } from 'axios';

const Access_Key = 'kcbG2Jgq2oXSu1iIa5Mf1PUXvAgyf4nTnbStAzDMij0';


const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  params: {
    client_id: Access_Key
  }
});

export const fetchPhotosByQuery = async <T>(query: string, page: number):Promise<T> =>  {
  const response = await axiosInstance.get<T>(`/search/photos?page=${page}&query=${query}`);

  return response.data;
};
