import { observable, action, runInAction, computed } from 'mobx';
import { Article } from '../types/article';
import client from '../api';

class ArticleStore {
  @observable articleList: Article[] = [];
  @observable loading: boolean = false;
  @observable error: string | null = null;

  @observable articleCount: number = 0;
  @computed get totalPage() {
    return Math.ceil(this.articleCount / 10);
  }

  @action.bound
  async getAllArticle() {
    this.loading = true;
    try {
      const { data } = await client.articleApi.allArticle();
      runInAction(() => {
        this.articleList = data.articles;
        this.articleCount = data.articlesCount;
        this.loading = false;
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
        this.error = err;
        this.loading = false;
      });
    }
  }
}

export default new ArticleStore();
