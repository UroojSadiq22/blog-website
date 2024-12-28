"use client"
import Slider from '@/components/slider';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone } from 'lucide-react';
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
    
      const { toast } = useToast()

      const showToast = () => {
        
            
              toast({
          description: "Your message has been sent.",
        })
        
        
        
      }

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       showToast()
          setFormData({ name: '', email: '', message: '' });
       
      };

     
    return(
        <main>
                    <Slider images={contactImages} />
            <div className="min-h-screen bg-gray-300 py-12 sm:py-14">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black/70 sm:text-5xl">
            Get in Touch with Us
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            We&apos;d love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.
          </p>
        </div>

       

        <div className='flex md:flex-row-reverse flex-col justify-center md:items-start lg:px-24'>

 {/* Contact Form */}
 <div className="flex justify-center flex-1">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-black/80 md:p-8 p-4 rounded-lg shadow-xl space-y-6"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-white/80"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-white/80"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-white/80"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="mt-2 w-full p-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200"
                placeholder="Type your message here"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="text-center py-2 rounded-lg w-full bg-white hover:bg-blue-400 border-2 border-gray-400 font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>

 
        </div>

       

        {/* Contact Info Section */}
        <div className="pt-16 py-5 md:pb-16 md:mt-20 text-center md:w-1/2 flex flex-col items-center border-2">
          <h2 className="text-3xl font-semibold text-black/70">Our Location</h2>
          <p className="mt-4 text-lg text-gray-800">
            You can also reach us at:
          </p>
          <p className="mt-2 text-lg text-gray-800 flex items-center gap-4">
            <span className="font-semibold"><Mail /></span> contact@runo.com
          </p>
          <p className="mt-2 text-lg text-gray-800 flex items-center gap-4">
            <span className="font-semibold"><Phone /></span> +123 456 7890
          </p>
        </div>


        </div>
      </div>
    </div>
        </main>
    )
}