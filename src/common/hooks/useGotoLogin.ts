import { useCallback } from 'react';
import useStores from '../../hooks/useStores';
import { useHistory } from 'react-router';

export default function useGotoLogin(): [typeof ModalStore, () => void] {
  const { ModalStore } = useStores();
  const history = useHistory();
  const login = useCallback(() => {
    ModalStore.closeModal();
    history.push('/login');
  }, [ModalStore, history]);
  return [ModalStore, login];
}
