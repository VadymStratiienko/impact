import BlogRecent_1 from '../Assets/img/blog/blog-recent-1.jpg';
import BlogRecent_2 from '../Assets/img/blog/blog-recent-2.jpg';
import BlogRecent_3 from '../Assets/img/blog/blog-recent-3.jpg';
import BlogRecent_4 from '../Assets/img/blog/blog-recent-4.jpg';
import BlogRecent_5 from '../Assets/img/blog/blog-recent-5.jpg';

interface IRecentPosts {
  title: string;
  img: string;
  date: string;
}

export const recentPosts: IRecentPosts[] = [
  {
    title: 'Nihil blanditiis at in nihil autem',
    img: BlogRecent_1,
    date: 'Jan 1, 2020',
  },
  {
    title: 'Quidem autem et impedit',
    img: BlogRecent_2,
    date: 'Jan 1, 2020',
  },
  {
    title: 'Id quia et et ut maxime similique occaecati ut',
    img: BlogRecent_3,
    date: 'Jan 1, 2020',
  },
  {
    title: 'Laborum corporis quo dara net para',
    img: BlogRecent_4,
    date: 'Jan 1, 2020',
  },
  {
    title: 'Et dolores corrupti quae illo quod dolor',
    img: BlogRecent_5,
    date: 'Jan 1, 2020',
  },
];
