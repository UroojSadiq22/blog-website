import Slider from '@/components/slider';
import Image from 'next/image';
import Link from 'next/link';

export default function About(){
    const aboutImages = ["/slider1about.jpg", "/slider2about.jpg", "/slider3about.jpg"];
    return(
        <main>
        <Slider images={aboutImages} />
            <div className="min-h-screen bg-gray-300 py-12 sm:py-14">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-black/70 sm:text-5xl">
            About RUNO
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:w-[70%]">
            Welcome to RUNO, a platform where creativity and knowledge come together. Explore insightful content from a variety of topics and stay updated with the latest trends.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">What is RUNO?</h2>
            <p className="text-lg text-gray-600">
              RUNO is an innovative blogging platform. We bring you a modern and smooth experience while exploring new ideas, trends, and stories across various domains. Whether you&apos;re looking for tech insights, personal growth tips, or lifestyle inspiration, RUNO has something for everyone.
            </p>
            <p className="text-lg text-gray-600">
              Our team of passionate writers and creators strives to provide valuable content that inspires and educates. With a focus on minimalistic design and fast performance, RUNO ensures that every visit is a pleasant one.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="text-center py-2 rounded-lg md:w-1/2 w-full bg-white hover:bg-blue-400 border-2 border-gray-400 font-semibold">
               
                  Get In Touch
              
            
    
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              src="/aboutus.jpg"
              alt="Blog RUNO"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center bg-black/80 p-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-white">Modern Design</h3>
            <p className="text-gray-300 mt-4">
              RUNO offers a clean, user-friendly design for an intuitive experience. Our responsive layout ensures it looks great on all devices.
            </p>
          </div>
          <div className="text-center bg-black/80 p-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-white">Fast Performance</h3>
            <p className="text-gray-300 mt-4">
              Built with Next.js, RUNO provides fast page loads, optimized for performance. We prioritize speed so you can enjoy seamless browsing.
            </p>
          </div>
          <div className="text-center bg-black/80 p-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-white">Diverse Content</h3>
            <p className="text-gray-300 mt-4">
              From tech tutorials to lifestyle articles, RUNO delivers content that caters to a variety of interests and passions.
            </p>
          </div>
        </div>

      
      </div>
    </div>
        </main>
    )
}