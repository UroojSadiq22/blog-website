"use client"
import Slider from '@/components/slider';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function Contact(){

    const contactImages = ["/slider1contact.jpg", "/slider2contact.jpg", "/slider3contact.jpg"];

    const [formData, setFormData] = useState<{ name: string, email: string, message: string }>({
        name: '',
        email: '',
        message: '',
      });
    
      const [formStatus, setFormStatus] = useState<string | null>(null);
    
      const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simulate form submission
        setFormStatus('Sending...');
        setTimeout(() => {
          setFormStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        }, 2000);
      };
    return(
        <main>
                    <Slider images={contactImages} />
            <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
            Get in Touch with Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We’d love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.
          </p>
        </div>

       

        <div className='flex md:flex-row-reverse flex-col justify-center px-14'>

 {/* Contact Form */}
 <div className="flex justify-center flex-1">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl space-y-6"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2 w-full p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 w-full p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="mt-2 w-full p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>

 {/* Form Status */}
 {formStatus && (
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-gray-600">{formStatus}</p>
          </div>
        )}
        </div>

       

        {/* Contact Info Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Location</h2>
          <p className="mt-4 text-lg text-gray-600">
            You can also reach us at:
          </p>
          <p className="mt-2 text-lg text-gray-600">
            <span className="font-semibold">Email:</span> contact@runo.com
          </p>
          <p className="mt-2 text-lg text-gray-600">
            <span className="font-semibold">Phone:</span> +123 456 7890
          </p>
        </div>


        </div>
      </div>
    </div>
        </main>
    )
}