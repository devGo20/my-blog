import { getAllPosts, getPost } from '@/service/posts';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    slug: string; // []안 slug가 key
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제목: ${params.slug}`,
  };
}
export const revalidate = 3; // false (default) | 0 | number

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPost(slug);

  if (!post) {
    redirect('/posts');
  }
  return (
    <>
      <h1>{post.title} </h1>
      <p>{post.date}</p>
      <p>{post.description}</p>
    </>
  );
}

export async function generateStaticParams() {
  // build할 때 명시된 것을 미리 만들어두는 것
  const posts = await getAllPosts();
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 함(SSG)
  return posts.map((post) => ({
    slug: post.path,
  }));
}
