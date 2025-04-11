import Image from 'next/image';
import Link from 'next/link';

const RelatedBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Reporting Income and Deductions in Partnerships',
      date: '8 December 2025',
      image: '/blogpic2.png',
      link: '/blog2',
    },
    {
      id: 2,
      title: 'Small Business Guide to Company Tax',
      date: '8 December 2025',
      image: '/blogpic3.png',
      link: '/blog3',
    },
    {
      id: 3,
      title: 'Understanding GST Obligations for Businesses',
      date: '8 December 2025',
      image: '/blogpic4.png',
      link: '/blog4',
    },
    {
      id: 4,
      title: 'Superannuation Contributions and Regulations',
      date: '8 December 2025',
      image: '/blogpic5.png',
      link: '/blog5',
    },
  ];

  return (
    <div className="p-4 bg-white border shadow-lg rounded-lg mt-8">
      <h2 className="font-semibold text-lg mb-3">All Related Blogs</h2>
      <div className="space-y-3 md:w-[350px]">
        {blogs.map((blog) => (
          <Link key={blog.id} href={blog.link} className="block hover:bg-gray-100 transition rounded-lg p-2">
            <div className="md:flex md:items-start gap-3">
              <Image
                src={blog.image}
                alt={`Image for ${blog.title}`}
                width={100}
                height={100}
                className="rounded-sm object-cover w-full h-full md:w-[100px] md:h-[100px]"
              />
              <div>
                <p className="text-sm text-gray-500 flex items-center gap-1">📅 {blog.date}</p>
                <h3 className="text-sm font-semibold text-gray-800 mt-9 line-clamp-2">
                  {blog.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
