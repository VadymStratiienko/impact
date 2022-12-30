import React from "react";
import styled from "styled-components";
import { Container } from "../../Assets";
import BlogImg from "../../Assets/img/blog/blog-1.jpg";
import BlogInsidePost from "../../Assets/img/blog/blog-inside-post.jpg";
import BlogAuthor from "../../Assets/img/blog/blog-author.jpg";
import Comments_1 from "../../Assets/img/blog/comments-1.jpg";
import Comments_2 from "../../Assets/img/blog/comments-2.jpg";
import Comments_3 from "../../Assets/img/blog/comments-3.jpg";
import Comments_4 from "../../Assets/img/blog/comments-4.jpg";
import Comments_5 from "../../Assets/img/blog/comments-5.jpg";
import Comments_6 from "../../Assets/img/blog/comments-6.jpg";
import { recentPosts } from "../../data/RecentPosts";

const ContainerBlog = styled(Container)`
  display: block;
`;

const Contents = styled.div`
  --bs-gutter-y: 3rem;
  --bs-gutter-x: 3rem;
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
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
`;
const BlogDetails = styled.article`
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
  padding: 30px;
  border-radius: 10px;
  h2 {
    font-size: 28px;
    font-weight: 700;
    padding: 0;
    margin: 20px 0 0 0;
    color: var(--color-default);
  }
`;
const PostImg = styled.div`
  margin: -30px -30px 20px -30px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;
const MetaTop = styled.div`
  margin-top: 20px;
  color: #6c757d;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    padding: 0;
    margin: 0;
    li {
      display: flex;
      align-items: center;
    }
  }
  ul li + li {
    padding-left: 20px;
  }
  i {
    font-size: 16px;
    margin-right: 8px;
    line-height: 0;
    color: var(--color-primary);
  }
  a {
    color: #6c757d;
    font-size: 14px;
    display: inline-block;
    line-height: 1;
  }
`;
const Content = styled.div`
  margin-top: 20px;
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  blockquote {
    overflow: hidden;
    background-color: rgba(34, 34, 34, 0.06);
    padding: 60px;
    position: relative;
    text-align: center;
    margin: 20px 0;
    p {
      color: var(--color-default);
      line-height: 1.6;
      margin-bottom: 0;
      font-style: italic;
      font-weight: 500;
      font-size: 22px;
      ::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background-color: var(--color-secondary);
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  h3 {
    font-size: 22px;
    margin-top: 30px;
    font-weight: bold;
  }
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;
const MetaBottom = styled.div`
  padding-top: 10px;
  border-top: 1px solid rgba(34, 34, 34, 0.15);
  i {
    color: #555555;
    display: inline;
  }
  .cats {
    list-style: none;
    display: inline;
    padding: 0 20px 0 0;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  ul li {
    display: inline-block;
  }
  a {
    color: rgba(34, 34, 34, 0.8);
    transition: 0.3s;
  }
  .tags {
    margin-top: 0;
    margin-bottom: 1rem;
    list-style: none;
    display: inline;
    padding: 0;
    font-size: 14px;
  }
  .tags li + li::before {
    padding-right: 6px;
    color: var(--color-default);
    content: ",";
  }
`;
const PostAuthor = styled.div`
  padding: 20px;
  margin-top: 30px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
  border-radius: 10px;
  display: flex !important;
  align-items: center !important;
  h4 {
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 0px;
    padding: 0;
    color: var(--color-default);
  }
  img {
    max-width: 120px;
    margin-right: 20px;
    border-radius: 50% !important;
    flex-shrink: 0 !important;
    vertical-align: middle;
  }
  p {
    margin-top: 0;
    font-style: italic;
    color: rgba(108, 117, 125, 0.8);
    margin-bottom: 0;
  }
`;
const SocialLinks = styled.div`
  margin: 0 10px 10px 0;
  a {
    color: rgba(34, 34, 34, 0.5);
    margin-right: 10px;
  }
`;
const Comments = styled.div`
  margin-top: 30px;
  h4 {
    font-weight: bold;
  }
`;
const Comment = styled.div`
  margin-top: 30px;
  position: relative;
  h5 {
    font-size: 16px;
    margin-bottom: 2px;
  }
  h5 a {
    font-weight: bold;
    color: var(--color-default);
    transition: 0.3s;
  }
  h5 a:hover {
    color: var(--color-primary);
  }
  h5 .reply {
    padding-left: 10px;
    color: var(--color-primary);
  }
  .reply i {
    font-size: 20px;
  }
  time {
    display: block;
    font-size: 14px;
    color: rgba(34, 34, 34, 0.8);
    margin-bottom: 5px;
  }
`;
const BlockComment = styled.div`
  display: flex !important;
`;
const CommentImg = styled.div`
  margin-right: 14px;
  img {
    width: 60px;
    vertical-align: middle;
  }
`;
const CommentRely = styled.div`
  padding-left: 40px;
  margin-top: 30px;
  position: relative;
`;
const ReplyForm = styled.div`
  margin-top: 30px;
  padding: 30px;
  box-shadow: 0 0 16px rgb(0 0 0 / 10%);
  border-radius: 10px;
  h4 {
    font-weight: bold;
    font-size: 22px;
  }
  p {
    font-size: 14px;
  }
`;
const Row = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
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
  input[type="text"],
  [type="email"] {
    padding: 12px 15px;
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 0;
    font-family: inherit;
  }
  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    border-color: var(--color-primary);
  }
  textarea {
    resize: none;
  }
  input:focus {
    box-shadow: none;
    border-color: rgba(0, 131, 116, 0.8);
  }
  textarea {
    border-radius: 4px;
    padding: 10px 10px;
    font-size: 14px;
    min-height: calc(1.5em + 0.75rem + 2px);
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;
const FormGroup = styled.div`
  margin-bottom: 25px;
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;
const FormGroupWebsite = styled.div`
  margin-bottom: 25px;
  flex: 1 0 0%;
  resize: none;
`;
const Button = styled.button`
  border-radius: 50px;
  padding: 14px 40px;
  border: 0;
  background-color: var(--color-secondary);
  color: #fff;
  :hover {
    background-color: rgba(248, 90, 64, 0.8);
  }
`;
const Bar = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
`;
const Sidebar = styled.div`
  padding: 30px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
  border-radius: 10px;
`;
const SidebarTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  padding: 0;
  margin: 0;
  color: var(--color-default);
`;
const SearchForm = styled.form`
  background: #fff;
  border: 1px solid rgba(34, 34, 34, 0.3);
  padding: 5px 10px;
  position: relative;
  border-radius: 50px;
  margin-top: 1rem !important;
  input[type="text"] {
    border: 0;
    padding: 4px;
    border-radius: 50px;
    width: calc(100% - 60px);
  }
`;
const ButtonSearch = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  font-size: 16px;
  padding: 0 25px;
  margin: -1px;
  background: var(--color-primary);
  color: #fff;
  transition: 0.3s;
  border-radius: 50px;
  line-height: 0;
`;
const Categories = styled.div`
  margin-top: 40px;
  h3 {
    font-size: 20px;
    font-weight: 700;
    padding: 0;
    margin: 0;
    color: var(--color-default);
  }
  ul {
    list-style: none;
    padding: 0;
    margin-top: 1rem !important;
  }
  ul a {
    color: var(--color-default);
    transition: 0.3s;
  }
  ul a span {
    padding-left: 5px;
    color: rgba(34, 34, 34, 0.4);
    font-size: 14px;
  }
  ul li + li {
    padding-top: 10px;
  }
`;
const RecentPosts = styled.div`
  margin-top: 40px;
  h3 {
    font-size: 20px;
    font-weight: 700;
    padding: 0;
    margin: 0;
    color: var(--color-default);
  }
`;
const Posts = styled.div`
  margin-top: 1rem !important;
`;
const PostItem = styled.div`
  margin-top: 1rem !important;
  img {
    width: 80px;
    float: left;
    vertical-align: middle;
  }
  h4 {
    font-size: 15px;
    margin-left: 95px;
    font-weight: bold;
  }
  h4 a {
    color: var(--color-default);
    transition: 0.3s;
  }
  h4 a:hover {
    color: var(--color-primary);
  }
  time {
    display: block;
    margin-left: 95px;
    font-style: italic;
    font-size: 14px;
    color: rgba(34, 34, 34, 0.4);
  }
`;
const Tags = styled.div`
  margin-top: 40px;
  margin-bottom: -10px;
  h3 {
    font-size: 20px;
    font-weight: 700;
    padding: 0;
    margin: 0;
    color: var(--color-default);
  }
  ul {
    list-style: none;
    padding: 0;
    margin-top: 1rem !important;
  }
  ul li {
    display: inline-block;
  }
  ul a {
    color: #555555;
    font-size: 14px;
    padding: 6px 20px;
    margin: 0 6px 8px 0;
    border: 1px solid #d5d5d5;
    display: inline-block;
    transition: 0.3s;
    border-radius: 50px;
  }
  ul a:hover {
    color: #fff;
    border: 1px solid var(--color-primary);
    background: var(--color-primary);
  }
`;

const LandingBlogDetails = () => {
  return (
    <section>
      <ContainerBlog>
        <Contents>
          <Post>
            <BlogDetails>
              <PostImg>
                <img src={BlogImg} alt="" />
              </PostImg>
              <h2>
                Dolorum optio tempore voluptas dignissimos cumque fuga qui
                quibusdam quia
              </h2>
              <MetaTop>
                <ul>
                  <li>
                    <i className="bi bi-person"></i>
                    <a href="#">John Doe</a>
                  </li>
                  <li>
                    <i className="bi bi-clock"></i>
                    <a href="#">
                      <time>Jan 1, 2022</time>
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chat-dots"></i>
                    <a href="#">12 Comments</a>
                  </li>
                </ul>
              </MetaTop>
              <Content>
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                  ea dolorem doloremque deleniti aperiam unde soluta. Est cum et
                  quod quos aut ut et sit sunt. Voluptate porro consequatur
                  assumenda perferendis dolore.
                </p>
                <p>
                  Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
                  reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi
                  numquam nihil cumque odio. Et voluptate cupiditate.
                </p>
                <blockquote>
                  <p>
                    Et vero doloremque tempore voluptatem ratione vel aut.
                    Deleniti sunt animi aut. Aut eos aliquam doloribus minus
                    autem quos.
                  </p>
                </blockquote>
                <p>
                  Sed quo laboriosam qui architecto. Occaecati repellendus omnis
                  dicta inventore tempore provident voluptas mollitia aliquid.
                  Id repellendus quia. Asperiores nihil magni dicta est suscipit
                  perspiciatis. Voluptate ex rerum assumenda dolores nihil
                  quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut
                  at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum
                  exercitationem harum qui qui blanditiis neque. Iusto autem
                  itaque. Repudiandae hic quae aspernatur ea neque qui.
                  Architecto voluptatem magni. Vel magnam quod et tempora
                  deleniti error rerum nihil tempora.
                </p>
                <h3>Et quae iure vel ut odit alias.</h3>
                <p>
                  Officiis animi maxime nulla quo et harum eum quis a. Sit hic
                  in qui quos fugit ut rerum atque. Optio provident dolores
                  atque voluptatem rem excepturi molestiae qui. Voluptatem
                  laborum omnis ullam quibusdam perspiciatis nulla nostrum.
                  Voluptatum est libero eum nesciunt aliquid qui. Quia et
                  suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt
                  accusamus quia aut ratione aspernatur dolor. Sint harum
                  eveniet dicta exercitationem minima. Exercitationem omnis
                  asperiores natus aperiam dolor consequatur id ex sed.
                  Quibusdam rerum dolores sint consequatur quidem ea. Beatae
                  minima sunt libero soluta sapiente in rem assumenda. Et qui
                  odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus
                  mollitia aut atque aut.
                </p>
                <img src={BlogInsidePost} alt="" />
                <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                <p>
                  Rerum ea est assumenda pariatur quasi et quam. Facilis nam
                  porro amet nostrum. In assumenda quia quae a id praesentium.
                  Quos deleniti libero sed occaecati aut porro autem.
                  Consectetur sed excepturi sint non placeat quia repellat
                  incidunt labore. Autem facilis hic dolorum dolores vel.
                  Consectetur quasi id et optio praesentium aut asperiores eaque
                  aut. Explicabo omnis quibusdam esse. Ex libero illum iusto
                  totam et ut aut blanditiis. Veritatis numquam ut illum ut a
                  quam vitae.
                </p>
                <p>
                  Alias quia non aliquid. Eos et ea velit. Voluptatem maxime
                  enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia
                  nisi asperiores est veniam.
                </p>
              </Content>
              <MetaBottom>
                <i className="bi bi-folder"></i>{" "}
                <ul className="cats">
                  <li>
                    <a href="#">Business</a>
                  </li>
                </ul>
                <i className="bi bi-tags"></i>{" "}
                <ul className="tags">
                  <li>
                    <a href="">Creative</a>
                  </li>
                  <li>
                    <a href="">Tips</a>
                  </li>
                  <li>
                    <a href="">Marketing</a>
                  </li>
                </ul>
              </MetaBottom>
            </BlogDetails>
            <PostAuthor>
              <img src={BlogAuthor} alt="" />
              <div>
                <h4>Jane Smith</h4>
                <SocialLinks>
                  <a href="https://twitters.com/#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="https://facebook.com/#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://instagram.com/#">
                    <i className="biu bi-instagram"></i>
                  </a>
                </SocialLinks>
                <p>
                  Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum
                  sed possimus accusantium. Quas repellat voluptatem officia
                  numquam sint aspernatur voluptas. Esse et accusantium ut unde
                  voluptas.
                </p>
              </div>
            </PostAuthor>
            <Comments>
              <h4>8 Comments</h4>
              <Comment>
                <BlockComment>
                  <CommentImg>
                    <img src={Comments_1} alt="" />
                  </CommentImg>
                  <div>
                    <h5>
                      <a href="">Georgia Reader</a>
                      <a href="#" className="reply">
                        <i className="bi bi-reply-fill"></i> Reply
                      </a>
                    </h5>
                    <time>01 Jan,2022</time>
                    <p>
                      {" "}
                      Et rerum totam nisi. Molestiae vel quam dolorum vel
                      voluptatem et et. Est ad aut sapiente quis molestiae est
                      qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam
                      placeat ex qui. Sint qui facilis et.
                    </p>
                  </div>
                </BlockComment>
              </Comment>
              <Comment>
                <BlockComment>
                  <CommentImg>
                    <img src={Comments_2} alt="" />
                  </CommentImg>
                  <div>
                    <h5>
                      <a href="#">Aron Alvarado</a>
                      <a href="#" className="reply">
                        <i className="bi bi-reply-fill"></i> Reply
                      </a>
                    </h5>
                    <time>01 Jan,2022</time>
                    <p>
                      {" "}
                      Ipsam tempora sequi voluptatem quis sapiente non. Autem
                      itaque eveniet saepe. Officiis illo ut beatae.
                    </p>
                  </div>
                </BlockComment>
                <CommentRely>
                  <BlockComment>
                    <CommentImg>
                      <img src={Comments_3} alt="" />
                    </CommentImg>
                    <div>
                      <h5>
                        <a href="#">Lynda Small</a>
                        <a href="#" className="reply">
                          <i className="bi bi-reply-fill"></i> Reply
                        </a>
                      </h5>
                      <time>01 Jan,2022</time>
                      <p>
                        {" "}
                        Enim ipsa eum fugiat fuga repellat. Commodi quo quo
                        dicta. Est ullam aspernatur ut vitae quia mollitia id
                        non. Qui ad quas nostrum rerum sed necessitatibus aut
                        est. Eum officiis sed repellat maxime vero nisi natus.
                        Amet nesciunt nesciunt qui illum omnis est et dolor
                        recusandae. Recusandae sit ad aut impedit et. Ipsa
                        labore dolor impedit et natus in porro aut. Magnam qui
                        cum. Illo similique occaecati nihil modi eligendi.
                        Pariatur distinctio labore omnis incidunt et illum.
                        Expedita et dignissimos distinctio laborum minima
                        fugiat. Libero corporis qui. Nam illo odio beatae enim
                        ducimus. Harum reiciendis error dolorum non autem
                        quisquam vero rerum neque.
                      </p>
                    </div>
                  </BlockComment>
                </CommentRely>
                <CommentRely>
                  <BlockComment>
                    <CommentImg>
                      <img src={Comments_4} alt="" />
                    </CommentImg>
                    <div>
                      <h5>
                        <a href="#">Sianna Ramsay</a>
                        <a href="#" className="reply">
                          <i className="bi bi-reply-fill"></i> Reply
                        </a>
                      </h5>
                      <time>01 Jan,2022</time>
                      <p>
                        {" "}
                        Et dignissimos impedit nulla et quo distinctio ex nemo.
                        Omnis quia dolores cupiditate et. Ut unde qui eligendi
                        sapiente omnis ullam. Placeat porro est commodi est
                        officiis voluptas repellat quisquam possimus.
                        Perferendis id consectetur necessitatibus.
                      </p>
                    </div>
                  </BlockComment>
                </CommentRely>
              </Comment>
              <Comment>
                <BlockComment>
                  <CommentImg>
                    <img src={Comments_5} alt="" />
                  </CommentImg>
                  <div>
                    <h5>
                      <a href="">Nolan Davidson</a>
                      <a href="#" className="reply">
                        <i className="bi bi-reply-fill"></i> Reply
                      </a>
                    </h5>
                    <time>01 Jan,2022</time>
                    <p>
                      {" "}
                      Distinctio nesciunt rerum reprehenderit sed. Iste omnis
                      eius repellendus quia nihil ut accusantium tempore.
                      Nesciunt expedita id dolor exercitationem aspernatur aut
                      quam ut. Voluptatem est accusamus iste at. Non aut et et
                      esse qui sit modi neque. Exercitationem et eos aspernatur.
                      Ea est consequuntur officia beatae ea aut eos soluta. Non
                      qui dolorum voluptatibus et optio veniam. Quam officia sit
                      nostrum dolorem.
                    </p>
                  </div>
                </BlockComment>
              </Comment>
              <Comment>
                <BlockComment>
                  <CommentImg>
                    <img src={Comments_6} alt="" />
                  </CommentImg>
                  <div>
                    <h5>
                      <a href="">Kay Duggan</a>
                      <a href="#" className="reply">
                        <i className="bi bi-reply-fill"></i> Reply
                      </a>
                    </h5>
                    <time>01 Jan,2022</time>
                    <p>
                      {" "}
                      Dolorem atque aut. Omnis doloremque blanditiis quia eum
                      porro quis ut velit tempore. Cumque sed quia ut maxime.
                      Est ad aut cum. Ut exercitationem non in fugiat.
                    </p>
                  </div>
                </BlockComment>
              </Comment>
              <ReplyForm>
                <h4>Leave a Reply</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form action="">
                  <Row>
                    <FormGroup>
                      <input type="text" name="name" placeholder="Your Name*" />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email*"
                      />
                    </FormGroup>
                  </Row>
                  <Row>
                    <FormGroupWebsite>
                      <input
                        type="text"
                        name="website"
                        placeholder="Your Website"
                      />
                    </FormGroupWebsite>
                  </Row>
                  <Row>
                    <FormGroupWebsite>
                      <textarea
                        name="comment"
                        placeholder="Your Comment*"
                      ></textarea>
                    </FormGroupWebsite>
                  </Row>
                  <Button>Post Comment</Button>
                </form>
              </ReplyForm>
            </Comments>
          </Post>
          <Bar>
            <Sidebar>
              <div>
                <SidebarTitle>Search</SidebarTitle>
                <SearchForm action="">
                  <input type="text" />
                  <ButtonSearch type="submit">
                    <i className="bi bi-search"></i>
                  </ButtonSearch>
                </SearchForm>
              </div>
              <Categories>
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="">
                      General
                      <span>(25)</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Lifestyle
                      <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Travel
                      <span>(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Design
                      <span>(22)</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Creative
                      <span>(8)</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Educaion
                      <span>(14)</span>
                    </a>
                  </li>
                </ul>
              </Categories>
              <RecentPosts>
                <Posts>
                  {recentPosts.map((item, index) => {
                    return (
                      <PostItem key={index}>
                        <img src={item.img} alt="" />
                        <div>
                          <h4>
                            <a href="">{item.title}</a>
                          </h4>
                          <time>{item.date}</time>
                        </div>
                      </PostItem>
                    );
                  })}
                </Posts>
              </RecentPosts>
              <Tags>
                <h3></h3>
                <ul>
                  <li>
                    <a href="">App</a>
                  </li>
                  <li>
                    <a href="">IT</a>
                  </li>
                  <li>
                    <a href="">Business</a>
                  </li>
                  <li>
                    <a href="">Mac</a>
                  </li>
                  <li>
                    <a href="">Desing</a>
                  </li>
                  <li>
                    <a href="">Office</a>
                  </li>
                  <li>
                    <a href="">Creative</a>
                  </li>
                  <li>
                    <a href="">Studio</a>
                  </li>
                  <li>
                    <a href="">Smart</a>
                  </li>
                  <li>
                    <a href="">Tips</a>
                  </li>
                  <li>
                    <a href="">Marketing</a>
                  </li>
                </ul>
              </Tags>
            </Sidebar>
          </Bar>
        </Contents>
      </ContainerBlog>
    </section>
  );
};

export default LandingBlogDetails;
