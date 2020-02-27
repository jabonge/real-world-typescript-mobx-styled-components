import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { useObserver } from 'mobx-react';
import Button from '@material-ui/core/Button';
import useGotoLogin from './hooks/useGotoLogin';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  .Top {
    color: powderblue;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
  }
  .Content {
    font-size: 20px;
    font-weight: normal;
  }
  .Bottom {
    align-self: flex-end;
    & > :first-child {
      margin-right: 10px;
    }
  }
`;

const customStyle = {
  content: {
    margin: 'auto',
    width: '20%',
    height: '30%'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
};

export default function CustomModal() {
  const [ModalStore, login] = useGotoLogin();

  return useObserver(() => (
    <Modal isOpen={ModalStore.isOpen} style={customStyle}>
      <Container>
        <div className="Top">
          <h1>Message</h1>
        </div>
        <div className="Content">
          <h4>로그인 후 이용가능합니다.</h4>
        </div>
        <div className="Bottom">
          <Button variant="outlined" color="primary" onClick={login}>
            로그인
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={ModalStore.closeModal}
          >
            닫기
          </Button>
        </div>
      </Container>
    </Modal>
  ));
}
