// 컴포넌트가 아닌 순수 로직 .ts
import path from 'path';
import { promises as fs } from 'fs';

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export async function getIsFeaturedPosts(isFeatured: boolean): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data).filter((item: Post) => item.featured === isFeatured);
}
export async function getPosts(): Promise<{
  posts: Post[];
  uniqueCategories: string[];
}> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const parsedData: Post[] = JSON.parse(data);
  const uniqueCategories: string[] = [
    ...new Set<string>(parsedData.map((item: Post) => item.category)),
  ];

  return {
    posts: parsedData,
    uniqueCategories: uniqueCategories,
  };
}
