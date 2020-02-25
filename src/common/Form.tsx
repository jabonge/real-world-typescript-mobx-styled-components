import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { useLocalStore, useObserver } from 'mobx-react';
import { action } from 'mobx';

import { Link, useHistory } from 'react-router-dom';

import useStores from '../hooks/useStores';
import { brandColor } from '../styles/variable';

const FormContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Form = styled.form`
  display: flex;
  width: 40%;

  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 40px;
    font-weight: normal;
  }

  .link {
    color: ${brandColor};
  }

  & > :not(:last-child) {
    margin-bottom: 20px;
  }

  input {
    height: 50px;
    font-weight: normal;
    font-size: 20px;
    &:focus {
      ::placeholder {
        font-weight: normal;
        font-size: 0px;
      }
    }
    width: 100%;
    border: 1px solid black;
    ::placeholder {
      font-weight: normal;
      font-size: 25px;
    }
  }

  button {
    align-self: flex-end;
    width: 120px;
    height: 50px;
    background-color: ${brandColor};
    font-size: 20px;
    font-weight: normal;
    color: white;
    border-radius: 15px;
  }
`;

type RLocalStore = {
  name: string;
  email: string;
  password: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

export function RegisterForm() {
  const history = useHistory();
  const state = useLocalStore<RLocalStore>(() => ({
    name: '',
    email: '',
    password: '',
    onChangeName: action(function(
      this: RLocalStore,
      e: React.ChangeEvent<HTMLInputElement>
    ) {
      this.name = e.target.value;
    }),
    onChangePassword: action(function(
      this: RLocalStore,
      e: React.ChangeEvent<HTMLInputElement>
    ) {
      this.password = e.target.value;
    }),
    onChangeEmail: action(function(
      this: RLocalStore,
      e: React.ChangeEvent<HTMLInputElement>
    ) {
      this.email = e.target.value;
    }),
    reset: action(function(this: RLocalStore) {
      this.email = '';
      this.password = '';
      this.name = '';
    })
  }));

  const { UserStore } = useStores();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await UserStore.registerUser({
      name: state.name,
      password: state.password,
      email: state.email
    });
    if (UserStore.error) {
      console.log(UserStore.error);
    } else {
      state.reset();
      history.replace('/');
    }
  };

  return useObserver(() => (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <Link to="login" className="link">
          Hava an account?
        </Link>
        <input
          type="text"
          placeholder="Username"
          value={state.name}
          onChange={state.onChangeName}
        />
        <input
          type="text"
          placeholder="Email"
          value={state.email}
          onChange={state.onChangeEmail}
        />
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={state.onChangePassword}
        />
        <button type="submit">Sign in</button>
      </Form>
    </FormContainer>
  ));
}

type LLocalStore = {
  email: string;
  password: string;

  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

export function LoginForm() {
  const history = useHistory();
  const state = useLocalStore<LLocalStore>(() => ({
    email: '',
    password: '',

    onChangePassword: action(function(
      this: LLocalStore,
      e: React.ChangeEvent<HTMLInputElement>
    ) {
      this.password = e.target.value;
    }),
    onChangeEmail: action(function(
      this: RLocalStore,
      e: React.ChangeEvent<HTMLInputElement>
    ) {
      this.email = e.target.value;
    }),
    reset: action(function(this: RLocalStore) {
      this.email = '';
      this.password = '';
    })
  }));
  const { UserStore } = useStores();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await UserStore.loginUser({
      email: state.email,
      password: state.password
    });
    if (UserStore.error) {
      console.error(UserStore.error);
    } else {
      state.reset();
      history.replace('/');
    }
  };

  return useObserver(() => (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <h1>Sign In</h1>
        <Link to="register" className={'link'}>
          Need an account?
        </Link>

        <input
          type="text"
          placeholder="Email"
          value={state.email}
          onChange={state.onChangeEmail}
        />
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={state.onChangePassword}
        />
        <button type="submit">Sign in</button>
      </Form>
    </FormContainer>
  ));
}
