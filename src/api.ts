import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { User } from './types/user';
import { Articles } from './types/article';

class Client {
  private api: AxiosInstance;

  public constructor() {
    this.api = axios.create({
      baseURL: this.API_ROOT
    });
  }

  private API_ROOT: string = 'https://conduit.productionready.io/api';

  setBearerToken = (token: string) => {
    this.api.defaults.headers['Authorization'] = token;
  };

  authApi = {
    current: (): Promise<AxiosResponse<{ user: User }>> =>
      this.api.get('/user'),
    login: (
      email: string,
      password: string
    ): Promise<AxiosResponse<{ user: User }>> => {
      return this.api.post('/users/login', { user: { email, password } });
    },
    register: (
      name: string,
      email: string,
      password: string
    ): Promise<AxiosResponse<{ user: User }>> => {
      return this.api.post('/users', {
        user: { username: name, email, password }
      });
    },
    save: (user: User): Promise<AxiosResponse<{ user: User }>> =>
      this.api.put('/user', user)
  };

  articleApi = {
    allArticle: (): Promise<AxiosResponse<Articles>> => {
      return this.api.get('/articles');
    }
  };
}

export default new Client();
