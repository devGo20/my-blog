import FilterPosts from '@/components/FilterPosts';
import { getAllPosts } from '@/service/posts';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterPosts posts={posts} categories={categories} />;
}
