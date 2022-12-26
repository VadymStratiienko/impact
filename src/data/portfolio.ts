import App_1 from "../Assets/img/portfolio/app-1.jpg";
import App_2 from "../Assets/img/portfolio/app-2.jpg";
import App_3 from "../Assets/img/portfolio/app-3.jpg";
import Books_1 from "../Assets/img/portfolio/books-1.jpg";
import Books_2 from "../Assets/img/portfolio/books-2.jpg";
import Books_3 from "../Assets/img/portfolio/books-3.jpg";
import Branding_1 from "../Assets/img/portfolio/branding-1.jpg";
import Branding_2 from "../Assets/img/portfolio/branding-2.jpg";
import Branding_3 from "../Assets/img/portfolio/branding-3.jpg";
import Product_1 from "../Assets/img/portfolio/product-1.jpg";
import Product_2 from "../Assets/img/portfolio/product-2.jpg";
import Product_3 from "../Assets/img/portfolio/product-3.jpg";


interface IProduct {
    title: string;
    text: string;
    img: string;
    category: string;
  }

export const portfolioData: IProduct[] = [
    {
        title: "App 1",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: App_1,
        category: "App",
      },
      {
        title: "App 2",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: App_2,
        category: "App",
      },
      {
        title: "App 3",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: App_3,
        category: "App",
      },
      {
        title: "Books 1",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: Books_1,
        category: "Books",
      },
      {
        title: "Books 2",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: Books_2,
        category: "Books",
      },
      {
        title: "Books 3",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: Books_3,
        category: "Books",
      },
      {
        title: "Branding 1",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: Branding_1,
        category: "Branding",
      },
      {
        title: "Branding 2",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: Branding_2,
        category: "Branding",
      },
      {
        title: "Branding 3",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: Branding_3,
        category: "Branding",
      },
      {
        title: "Product 1",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: Product_1,
        category: "Product",
      },
      {
        title: "Product 2",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: Product_2,
        category: "Product",
      },
      {
        title: "Product 3",
        text: "Lorem ipsum, dolor sit amet consectetur",
        img: Product_3,
        category: "Product",
      },
];