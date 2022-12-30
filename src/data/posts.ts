import Blog_1 from "../Assets/img/blog/blog-1.jpg";
import Blog_2 from "../Assets/img/blog/blog-2.jpg";
import Blog_3 from "../Assets/img/blog/blog-3.jpg";
import Blog_4 from "../Assets/img/blog/blog-4.jpg";
import Blog_5 from "../Assets/img/blog/blog-5.jpg";
import Blog_6 from "../Assets/img/blog/blog-6.jpg";
import Author_1 from "../Assets/img/blog/blog-author.jpg";
import Author_2 from "../Assets/img/blog/blog-author-2.jpg";
import Author_3 from "../Assets/img/blog/blog-author-3.jpg";
import Author_4 from "../Assets/img/blog/blog-author-4.jpg";
import Author_5 from "../Assets/img/blog/blog-author-5.jpg";
import Author_6 from "../Assets/img/blog/blog-author-6.jpg";

interface IPosts {
  postImg: string;
  category: string;
  title: string;
  photoAuthor: string;
  name: string;
  date: string;
}

export const Posts: IPosts[] = [
  {
    postImg: Blog_1,
    category: "Politics",
    title: "Dolorum optio tempore voluptas dignissimos",
    photoAuthor: Author_1,
    name: "Maria Doe",
    date: "Jan 1, 2022",
  },
  {
    postImg: Blog_2,
    category: "Sports",
    title: "Nisi magni odit consequatur autem nulla dolorem",
    photoAuthor: Author_2,
    name: "Allisa Mayer",
    date: "Jun 5, 2022",
  },
  {
    postImg: Blog_3,
    category: "Entertainment",
    title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
    photoAuthor: Author_3,
    name: "Mark Dower",
    date: "Jun 22, 2022",
  },
  {
    postImg: Blog_4,
    category: "Sports",
    title: "Non rem rerum nam cum quo minus olor distincti",
    photoAuthor: Author_4,
    name: "Lisa Neymar",
    date: "Jun 30, 2022",
  },
  {
    postImg: Blog_5,
    category: "Politics",
    title: "Accusamus quaerat aliquam qui debitis facilis consequatur",
    photoAuthor: Author_5,
    name: "Denis Peterson",
    date: "Jun 30, 2022",
  },
  {
    postImg: Blog_6,
    category: "Entertainment",
    title: "Distinctio provident quibusdam numquam aperiam aut",
    photoAuthor: Author_6,
    name: "Mika Lendon",
    date: "Feb 14, 2022",
  },
];
