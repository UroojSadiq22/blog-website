"use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "@/app/loader";
import { Button } from "@/components/ui/button";

type Blog = {
  _id: string;
  title: string;
  description: string;
  datePosted: string;
  imageUrl: string;
};

type Comment = {
  name: string;
  message: string;
  date: string;
};

export default function BlogPage() {
  const { id } = useParams(); // Access the dynamic `id` from the URL
  const [blog, setBlog] = useState<Blog | null>(null); // State to store the fetched blog
  const [name, setName] = useState(""); // State for commenter's name
  const [message, setMessage] = useState(""); // State for comment message
  const [comments, setComments] = useState<Comment[]>([]); // State for comments

  useEffect(() => {
    const fetchBlog = async () => {
      const query = `*[_type == "blogPost" && _id == $id][0]{
        _id,
        title,
        description,
        datePosted,
          "imageUrl": image.asset-> url,
       
      }`; // Fetch the blog based on the `id`
      try {
        const data: Blog | null = await client.fetch(query, { id });
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  const handleAddComment = () => {
    if (name.trim() === "" || message.trim() === "") {
      alert("Name and message are required.");
      return;
    }

    const newComment: Comment = {
      name,
      message,
      date: new Date().toISOString(),
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setName("");
    setMessage("");
  };

  if (!blog) {
    return <Loader />; // Show a loading message while fetching
  }

  return (
    <div className="md:px-14 px-2 py-8 md:pt-28 pt-20 bg-gray-200 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">{blog.title}</h1>
      <p className="text-gray-600 text-sm mb-4">
        Posted on: {new Date(blog.datePosted).toLocaleDateString()}
      </p>
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        width={400}
        height={300}
        className="rounded-lg"
      />
      <p className="text-gray-700 p-2 w-full max-w-[30rem] text-center">
        {blog.description}
      </p>

      <div className=" p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold my-4">Comments</h2>
        {comments.length > 0 ? (
          <ul className="space-y-4 mb-4">
            {comments.map((comment, index) => (
              <li key={index} className="border-b pb-2">
                <p className="font-semibold">{comment.name}</p>
                <p className="text-gray-600 text-sm">
                  {new Date(comment.date).toLocaleDateString()}
                </p>
                <p>{comment.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Comment"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
          />

          <Button
            onClick={handleAddComment}
            variant="outline"
            className="px-4 py-2 rounded-md md:w-1/2 w-full hover:bg-gray-500"
          >
            Post Comment
          </Button>
        </div>
      </div>
    </div>
  );
}
