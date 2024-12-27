"use client";

import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/loader";
import Cards from "../../components/cards";
import Slider from "@/components/slider";

type Blog = {
  _id: string;
  title: string;
  description: string;
  datePosted: string; // Use string because Sanity's datetime returns a string
  imageUrl: string; 
};

export default function Blogs() {
  const blogImages = ["/slider1blogs.jpg", "/slider2blogs.jpg", "/slider3blogs.jpg"];

  const [blogs, setBlogs] = useState<Blog[]>([]); // State to store fetched blogs

  useEffect(() => {
    // Fetch blogs from Sanity
    const fetchBlogs = async () => {
      const query = `*[_type == "blogPost"]{
          _id,
          title,
          description,
          datePosted,
          "imageUrl": image.asset-> url
        } | order(datePosted desc)`; // Order blogs by date descending

      try {
        const data: Blog[] = await client.fetch(query); // Fetch data
        setBlogs(data); // Update state with fetched blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <>
    <Slider images={blogImages} />
    <div className="md:px-14 px-2 py-8 md:pt-28 pt-12 bg-gray-200">
      <h1 className="mb-6 text-center text-4xl font-bold text-gray-800 sm:text-5xl">All Blogs</h1>
      {blogs.length > 0 ? (
        <Cards blogs={blogs}/>
      ) : (
        <Loader/>
      )}
    </div>
    </>
            
  );
}
