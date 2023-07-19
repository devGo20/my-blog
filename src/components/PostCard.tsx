import { Post } from '@/service/posts';
import Image from 'next/image';

export default function PostCard(post: Post) {
  return (
    <div className='rounded overflow-hidden shadow-lg'>
      <Image
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={200}
        height={200}
        className='w-full'
      />
      <div className='p-6'>
        <p className='text-gray-700 text-xs text-base text-right'>
          {post.date}
        </p>
        <div className='font-bold text-xl mb-1'>{post.title}</div>
        <p className='text-gray-700 text-sm text-base'>{post.description}</p>
        <p className='mt-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full'>
          {post.category}
        </p>
      </div>
    </div>
  );
}
