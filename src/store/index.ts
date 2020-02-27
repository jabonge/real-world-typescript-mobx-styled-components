import UserStore from './userStore';
import ArticleStore from './articleStore';
import ModalStore from './modalStore';

export type TStore = {
  UserStore: typeof UserStore;
  ArticleStore: typeof ArticleStore;
  ModalStore: typeof ModalStore;
};

export default { UserStore, ArticleStore, ModalStore };
