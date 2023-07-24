import FilterPosts from '@/components/FilterPosts';
import { getPosts } from '@/service/posts';

export default async function PostsPage() {
  const { posts, uniqueCategories } = await getPosts();
  return <FilterPosts posts={posts} categories={uniqueCategories} />;
}
