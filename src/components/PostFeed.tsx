import { getIsFeaturedPosts } from '@/service/posts';
import 'react-multi-carousel/lib/styles.css';
import CarouselGrid from './CarouselGrid';

export default async function PostFeed() {
  const posts = await getIsFeaturedPosts(false);

  return (
    <section className='flex flex-col'>
      <h1 className='font-bold mb-3'>You may like</h1>
      <CarouselGrid posts={posts} />
    </section>
  );
}
