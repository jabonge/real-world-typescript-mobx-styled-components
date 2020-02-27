import { observable, action } from 'mobx';

class ModalStore {
  @observable
  isOpen: boolean = false;

  @action.bound
  openModal() {
    this.isOpen = true;
  }

  @action.bound
  closeModal() {
    this.isOpen = false;
  }
}

export default new ModalStore();
