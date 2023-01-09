import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, SectionHeader } from '../../Assets';
import { Posts } from '../../data/posts';

const Section = styled.section`
  background-color: #f6f6f6;
`;
const ContainerBlog = styled(Container)`
  display: block;
`;
const WrapperPosts = styled.div`
  --bs-gutter-y: 1.5rem;
  --bs-gutter-x: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;
const Post = styled.div`
  @media (min-width: 1200px) {
    flex: 0 0 auto;
    width: 33.33333333% !important;
  }
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 50%;
  }
  article {
    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
    background-color: #fff;
    padding: 30px;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;

    h2 {
      font-size: 22px;
      font-weight: 700;
      padding: 0;
      margin: 0 0 20px 0;
      a {
        color: var(--color-default);
        transition: 0.3s;
      }
      a:hover {
        color: var(--color-primary);
      }
    }
  }
`;
const Category = styled.div`
  font-size: 16px;
  color: #6f6f6f;
  margin-bottom: 10px;
`;

const PostImg = styled.div`
  max-height: 240px;
  margin: -30px -30px 15px -30px;
  overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;
const Author = styled.div`
  display: flex !important;
  align-items: center !important;
  img {
    width: 50px;
    border-radius: 50%;
    margin-right: 15px;
    flex-shrink: 0 !important;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;
const PostAutor = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;
const PostDate = styled.p`
  font-size: 14px;
  color: #3c3c3c;
  margin-bottom: 0;

  time {
    font-size: 14px;
    color: #3c3c3c;
  }
`;

const RecentBlogPosts = () => {
  if (Posts.length > 3) {
    Posts.length = 3;
  }

  return (
    <Section id='recent-posts'>
      <ContainerBlog data-aos='fade-up'>
        <SectionHeader>
          <h2>Recent Blog Posts</h2>
          <p>
            Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui
            vel architecto accusamus fugit aut qui distinctio
          </p>
        </SectionHeader>
        <WrapperPosts>
          {Posts.map((item, index) => {
            return (
              <Post key={index}>
                <article>
                  <PostImg>
                    <img src={item.postImg} alt='' />
                  </PostImg>
                  <Category>{item.category}</Category>
                  <h2>
                    <Link to='/blog-details'>{item.title}</Link>
                  </h2>
                  <Author>
                    <img src={item.photoAuthor} alt='' />
                    <div>
                      <PostAutor>{item.name}</PostAutor>
                      <PostDate>
                        <time>{item.date}</time>
                      </PostDate>
                    </div>
                  </Author>
                </article>
              </Post>
            );
          })}
        </WrapperPosts>
      </ContainerBlog>
    </Section>
  );
};

export default RecentBlogPosts;
