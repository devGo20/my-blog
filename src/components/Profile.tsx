import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className='flex items-center flex-col'>
      <Image
        src={`/images/profile.jpeg`}
        alt='profile'
        width={150}
        height={150}
        className='rounded-full'
      />
      <h1 className='font-bold text-lg'>HI, I'm eunbin</h1>
      <p className='text-base'>Front engineer</p>
      <span className='text-xs text-gray-600'>풀스택 개발자가 되고픈 은빈</span>
      <Link
        href='/contact'
        className='text-xs rounded-full bg-yellow-300 px-4 py-2 font-bold mt-2'
      >
        Contact Me!
      </Link>
    </section>
  );
}
