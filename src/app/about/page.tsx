import Slider from '@/components/slider';
import Image from 'next/image';
import Link from 'next/link';

export default function About(){
    const aboutImages = ["/aboutslider1.jpg", "/aboutslider2.jpg", "/abouslider3.jpg"];
    return(
        <main>
        <Slider images={aboutImages} />
            <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
            About RUNO
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to RUNO, a platform where creativity and knowledge come together. Explore insightful content from a variety of topics and stay updated with the latest trends.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">What is RUNO?</h2>
            <p className="text-lg text-gray-600">
              RUNO is an innovative blogging platform built with Next.js and Tailwind CSS. We bring you a modern and smooth experience while exploring new ideas, trends, and stories across various domains. Whether you're looking for tech insights, personal growth tips, or lifestyle inspiration, RUNO has something for everyone.
            </p>
            <p className="text-lg text-gray-600">
              Our team of passionate writers and creators strives to provide valuable content that inspires and educates. With a focus on minimalistic design and fast performance, RUNO ensures that every visit is a pleasant one.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <h1 className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700">
                  Get In Touch
                </h1>
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
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Modern Design</h3>
            <p className="text-gray-600 mt-4">
              RUNO offers a clean, user-friendly design for an intuitive experience. Our responsive layout ensures it looks great on all devices.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Fast Performance</h3>
            <p className="text-gray-600 mt-4">
              Built with Next.js, RUNO provides fast page loads, optimized for performance. We prioritize speed so you can enjoy seamless browsing.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Diverse Content</h3>
            <p className="text-gray-600 mt-4">
              From tech tutorials to lifestyle articles, RUNO delivers content that caters to a variety of interests and passions.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-24 text-center">
          <p className="text-gray-500 text-lg">
            Thank you for visiting RUNO Blog! Stay tuned for more exciting content and feel free to reach out if you have any questions or suggestions.
          </p>
        </div>
      </div>
    </div>
        </main>
    )
}