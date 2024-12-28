"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Cards from "./cards";
import { Button } from "@/components/ui/button";
import Loader from "./loader";
import Slider from "./slider";

type Blog = {
  _id: string;
  title: string;
  description: string;
  datePosted: string;
  imageUrl: string;
};

export default function Hero() {
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

  // Pass only the first 3 blogs to the home page
  const latestBlogs = blogs.slice(0, 3); // Get the first 3 blogs

  const images = ["/slider1.png", "/slider2.png", "/slider3.png"];
  return (
    <>
     <Slider images={images} />
      <div className="md:px-14 px-2 py-8  pt-12 bg-gray-300">
        <h1 className="mb-20 text-center text-4xl font-bold text-gray-800 sm:text-5xl">Latest Blogs</h1>
      
        {blogs.length > 0 ? <Cards blogs={latestBlogs} /> : <Loader />}

        {blogs.length > 0 && (
          <div className="mt-8 text-center">
            <a href="/blogs">
              <Button variant="outline" className="md:w-[30%] w-full hover:bg-blue-400 border-2 border-gray-400 font-semibold">View More</Button>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
