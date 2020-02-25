import UserStore from './userStore';
import ArticleStore from './articleStore';

export type TStore = {
  UserStore: typeof UserStore;
  ArticleStore: typeof ArticleStore;
};

export default { UserStore, ArticleStore };
