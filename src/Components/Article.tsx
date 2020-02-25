import React from 'react';
import styled from 'styled-components';

import { Article } from '../types/article';
import { brandColor } from '../styles/variable';

const ArticleContainer = styled.div`
  width: 850px;
  height: 185px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
  border-top: 1px solid gray;

  .body {
    & > :first-child {
      font-size: 23px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    & > :nth-child(2) {
      font-size: 13;
      color: gray;
    }
  }
  h2 {
    color: gray;
    font-size: 10px;
  }

  button {
    border: 1px solid ${brandColor};
    height: 25px;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    img {
      margin-right: 10px;
    }
    div {
      display: flex;
      flex-direction: column;
      & > :first-child {
        color: ${brandColor};
        font-size: 15px;
      }
      & > :nth-child(2) {
        color: gray;
      }
    }
  }
`;

type IProps = {
  article: Article;
};

export default function ArticleComponent(props: IProps) {
  const { article } = props;
  return (
    <ArticleContainer>
      <TopRow>
        <div>
          <img
            src={article.author.image}
            width="30"
            height="30"
            alt="user profile"
          />
          <div>
            <span>{article.author.username}</span>
            <span>{new Date(article.createdAt).toDateString()}</span>
          </div>
        </div>

        <button>좋아요 {article.favoritesCount}</button>
      </TopRow>
      <div className="body">
        <h1>{article.title}</h1>
        <h3>{article.body}</h3>
      </div>
      <h2>Read more..</h2>
    </ArticleContainer>
  );
}
