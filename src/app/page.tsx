import FeaturePosts from '@/components/FeaturePosts';
import PostFeed from '@/components/PostFeed';
import Profile from '@/components/Profile';

export default function Home() {
  return (
    <main>
      <Profile />
      <FeaturePosts />
      <PostFeed />
    </main>
  );
}
