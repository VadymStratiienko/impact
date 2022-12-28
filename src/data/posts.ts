import Blog_1 from "../Assets/img/blog/blog-1.jpg";
import Blog_2 from "../Assets/img/blog/blog-2.jpg";
import Blog_3 from "../Assets/img/blog/blog-3.jpg";
import Author_1 from "../Assets/img/blog/blog-author.jpg";
import Author_2 from "../Assets/img/blog/blog-author-2.jpg";
import Author_3 from "../Assets/img/blog/blog-author-3.jpg";

interface IPosts {
  postImg: string;
  category: string;
  title: string;
  photoAuthor: string;
  name: string;
  date: string;
}

export const Posts:IPosts[] = [
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
];
