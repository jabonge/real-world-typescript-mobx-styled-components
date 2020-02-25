import React, { useEffect } from 'react';
import styled from 'styled-components';
import useStores from '../hooks/useStores';
import { useObserver } from 'mobx-react';
import LoadingSpinner from '../common/LoadingSpinner';
import ArticleComponent from './Article';

const ArticleListContainer = styled.div`
  width: 840px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: calc((100vw - 840px) / 2);
  margin-top: 50px;
  /* .loading {
    justify-self: center;
  } */
`;

export default function ArticleList() {
  const { ArticleStore } = useStores();
  useEffect(() => {
    ArticleStore.getAllArticle();
  }, [ArticleStore]);
  return useObserver(() => (
    <ArticleListContainer>
      {ArticleStore.loading ? (
        <div className="loading">
          <LoadingSpinner />
        </div>
      ) : (
        ArticleStore.articleList.map((v, i) => {
          return <ArticleComponent article={v} key={v.slug}></ArticleComponent>;
        })
      )}
    </ArticleListContainer>
  ));
}
