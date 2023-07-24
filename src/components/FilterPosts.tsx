'use client';
import { Post } from '@/service/posts';
import PostCard from './PostCard';
import { useState } from 'react';
type Props = {
  posts: Post[];
  categories: string[];
};
export default function FilterPosts({ posts, categories }: Props) {
  const [filterPosts, setFilterPosts] = useState(posts);
  const [selectCategory, setSelectCategory] = useState('');
  const handleFilterPosts = (category: string) => {
    setFilterPosts(posts.filter((item: Post) => item.category === category));
    setSelectCategory(category);
  };
  return (
    <div className='flex'>
      <div
        className='flex-1 flex-wrap justify-center sm:grid md:grid-cols-2 xl:grid-cols-3 
        3xl:flex gap-4 mr-44'
      >
        {filterPosts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
      <aside
        id='default-sidebar'
        className='w-44 fixed right-0 h-screen'
        aria-label='Sidebar'
      >
        <div className='px-3 py-4 overflow-y-auto'>
          <ul className='space-y-2 font-medium'>
            <li
              className='font-bold underline decoration-sky-500'
              onClick={() => setFilterPosts(posts)}
            >
              Category
            </li>
            {categories.map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  category === selectCategory ? 'text-sky-500' : ''
                }`}
                onClick={() => handleFilterPosts(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
