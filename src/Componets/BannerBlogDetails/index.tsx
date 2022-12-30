import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../Assets";

const PageHeader = styled.div`
  padding: 60px 0 60px 0;
  min-height: 20vh;
  position: relative;
  background-color: var(--color-primary);
  display: flex !important;
  align-items: center !important;
`;
const ContainerBannerBlog = styled(Container)`
  display: block;
  position: relative;
`;
const Block = styled.div`
  display: flex !important;
  justify-content: center !important;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  > * {
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;
const Content = styled.div`
  text-align: center !important;
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 50%;
  }
  h2 {
    font-size: 56px;
    font-weight: 500;
    color: #fff;
    font-family: var(--font-secondary);
  }
  p {
    color: rgba(255, 255, 255, 0.8);
  }
`;
const Navigate = styled.div`
  background-color: #f6f6f6;
  padding: 20px 0;
  ol a {
    color: var(--color-primary);
    transition: 0.3s;
  }
  ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-default);
  }
  ol li + li {
    padding-left: 10px;
  }
  ol li + li::before {
    display: inline-block;
    padding-right: 10px;
    color: var(--color-secondary);
    content: "/";
  }
`;

const BannerBlogDetails = () => {
  return (
    <div>
      <PageHeader>
        <ContainerBannerBlog>
          <Block>
            <Content>
              <h2>Blog Details</h2>
              <p>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
            </Content>
          </Block>
        </ContainerBannerBlog>
      </PageHeader>
      <Navigate>
        <Container>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Blog Details</li>
          </ol>
        </Container>
      </Navigate>
    </div>
  );
};

export default BannerBlogDetails;
