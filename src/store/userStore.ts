import { observable, action, runInAction, reaction } from 'mobx';
import { User } from '../types/user';
import api from '../api';

type Register = {
  name: string;
  email: string;
  password: string;
};

type Login = {
  email: string;
  password: string;
};

class UserStore {
  @observable user: User | null = null;
  @observable token: string | null = null;
  @observable loading: boolean = false;
  @observable error: string | null = null;

  constructor() {
    if (this.token) {
      window.localStorage.setItem('jwt', this.token);
      this.setToken(this.token);
    }
    reaction(
      () => this.token,
      token => {
        if (token) {
          console.log('hi token');
          window.localStorage.setItem('jwt', token);
          api.setBearerToken(token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      }
    );
  }

  setToken(token: string) {
    this.token = token;
  }

  @action.bound async getUser() {
    this.loading = true;
    try {
      const { data } = await api.authApi.current();
      runInAction(() => {
        this.user = data.user;
        this.loading = false;
        console.log('runInAction');
      });
    } catch (err) {
      runInAction(() => {
        this.error = err;
        this.loading = false;
      });
    }
  }

  @action.bound async registerUser(register: Register) {
    this.loading = true;
    try {
      const { data } = await api.authApi.register(
        register.name,
        register.email,
        register.password
      );
      runInAction(() => {
        this.user = data.user;
        this.setToken(data.user.token);
        this.loading = false;
        console.log('runInAction');
      });
    } catch (err) {
      runInAction(() => {
        this.error = err;
        this.loading = false;
      });
    }
  }

  @action.bound async loginUser(login: Login) {
    this.loading = true;
    try {
      const { data } = await api.authApi.login(login.email, login.password);
      runInAction(() => {
        this.user = data.user;
        this.setToken(data.user.token);
        this.loading = false;
        console.log('runInAction');
      });
    } catch (err) {
      runInAction(() => {
        this.error = err;
        this.loading = false;
      });
    }
  }
}

export default new UserStore();
