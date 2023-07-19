'use client';
import { Post } from '@/service/posts';
import PostCard from './PostCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarouselGrid(props: { posts: Post[] }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} itemClass='pr-4'>
      {props.posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </Carousel>
  );
}
