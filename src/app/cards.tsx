"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Heart, MessageCircle } from "lucide-react";

type Blog = {
  _id: string;
  title: string;
  description: string;
  datePosted: string;
  imageUrl: string;
};

type CardsProps = {
  blogs: Blog[]; // Accept blogs as a prop
};

export default function Cards({ blogs }: CardsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
           <div className="relative w-full h-48">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm">
                {new Date(blog.datePosted).toLocaleDateString()}
              </p>
              <p className="mt-2 text-gray-700 text-sm line-clamp-3">
                {blog.description}
              </p>
            </div>
            <div className="flex justify-between rounded-lg bg-gray-300 p-4">
              <div className="flex md:gap-3 gap-2">
                <Heart />
                <MessageCircle />
                <Eye />
              </div>
              <Link href={`blogpage/${blog._id}`}>
                <p className="flex md:gap-2 items-center justify-center">
                  Continue Reading <ArrowRight />
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
