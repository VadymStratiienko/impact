import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
  margin: 0 auto;
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (max-width: 1200px) {
    max-width: 1140px;
  }
  @media (max-width: 992px) {
    max-width: 960px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    max-width: 720px;
  }
  @media (max-width: 576px) {
    max-width: 540px;
  }
`;
export const SectionHeader = styled.div`
  text-align: center;
  padding-bottom: 60px;
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    ::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: var(--color-primary);
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
  }
  p {
    margin-bottom: 0;
    color: #6f6f6f;
  }
`;
