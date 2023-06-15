import axios, { AxiosPromise } from 'axios';
import { CreateHomeStay, GetHomeStay, GetUser, LoginResponse, RegisterResponse, Upgrade } from './utils/InterfaceApi';

const instance = axios.create({
  baseURL: 'https://group1.altapro.online/',
});

const api = {
  Login: (email: string, password: string): AxiosPromise<LoginResponse> =>
    instance({
      method: 'POST',
      url: '/login',
      data: {
        email,
        password,
      },
    }),

  Register: (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone: string,
    birth_date: string,
    address: string,
    gender: string,
  ): AxiosPromise<RegisterResponse> =>
    instance({
      method: 'POST',
      url: '/users',
      data: {
        first_name,
        last_name,
        email,
        password,
        phone,
        birth_date,
        address,
        gender,
      },
    }),

  GetUser: (
    token: string
  ): AxiosPromise<GetUser[]> =>
    instance({
      method: 'GET',
      url: '/users',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  Upgrade: (
    token: string,
    
  ): AxiosPromise<Upgrade[]> =>
    instance({
      method: 'POST',
      url: '/users/host-doc',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }),

 CreateHome: (
    token: string,
    title: string,
    description: string,
    location: string,
    address: string,
    price: number,
    facilities: string

  ): AxiosPromise<CreateHomeStay> =>
    instance({
      method: 'POST',
      url: '/homestays',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        title,
        description,
        location,
        address,
        price,
        facilities
      }
    }),

  GetHomestay: (): AxiosPromise<GetHomeStay[]> =>
    instance({
      method: 'GET',
      url: '/homestays',
    }),
};

export default api;