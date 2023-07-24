import { getIsFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';

export default async function FeaturePosts() {
  const featuredPosts = await getIsFeaturedPosts(true);
  return (
    <section className='mb-10 '>
      <h1 className='font-bold mb-3'>Featured Posts</h1>
      <div
        className='flex-wrap justify-center sm:grid md:grid-cols-2 xl:grid-cols-3 
        3xl:flex gap-4'
      >
        {featuredPosts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}
