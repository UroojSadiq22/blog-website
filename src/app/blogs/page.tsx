"use client"

import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';

type Blog = {
    _id: string;
    title: string;
    description: string;
    datePosted: string; // Use string because Sanity's datetime returns a string
  };

export default function Blogs(){
    const [blogs, setBlogs] = useState<Blog[]>([]); // State to store fetched blogs

    useEffect(() => {
      // Fetch blogs from Sanity
      const fetchBlogs = async () => {
        const query = `*[_type == "blogPost"]{
          _id,
          title,
          description,
          datePosted
        } | order(datePosted desc)`; // Order blogs by date descending
  
        try {
          const data: Blog[] = await client.fetch(query); // Fetch data
          setBlogs(data); // Update state with fetched blogs
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };
  
      fetchBlogs();
    }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className="px-14 py-8 pt-28 bg-gray-200">
    <h1 className="text-3xl font-bold mb-6 text-center">All Blogs</h1>
    {blogs.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 text-sm">{new Date(blog.datePosted).toLocaleDateString()}</p>
            <p className="mt-2 text-gray-700 text-sm line-clamp-3">{blog.description}</p>
          </div>
        ))}
      </div>
    ) : (
      <p>No blogs available at the moment.</p>
    )}
  </div>
  );
};


