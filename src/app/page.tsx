"use client"

import { client } from '@/sanity/lib/client';
import Hero from './hero';
import { useEffect, useState } from 'react';

type Blog = {
  _id: string;
  title: string;
  description: string;
  datePosted: string;
};


export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "blogPost"]{
        _id,
        title,
        description,
        datePosted
      } | order(datePosted desc) [0..2]`; // Fetching the first 3 blogs

      try {
        const data = await client.fetch(query);
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
  
  return (
    <>
    <Hero/>
    <div className="px-14 py-8 pt-16 bg-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm">{new Date(blog.datePosted).toLocaleDateString()}</p>
              <p className="mt-2 text-gray-700 text-sm line-clamp-3">{blog.description}</p>
            </div>
          ))}
        </div>
        {blogs.length > 0 && (
          <div className="mt-8 text-center">
            <a href="/blogs" className="text-blue-500 hover:underline">View More</a>
          </div>
        )}
      </div>

    </>
  );
}
