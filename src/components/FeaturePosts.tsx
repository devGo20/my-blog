import { getIsFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';

export default async function FeaturePosts() {
  const featuredPosts = await getIsFeaturedPosts(true);
  return (
    <section>
      <h1 className='font-bold mb-3'>Featured Posts</h1>
      <div className='grid grid-cols-3 gap-4'>
        {featuredPosts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}
