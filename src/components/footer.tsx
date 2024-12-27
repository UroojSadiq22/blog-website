import { Facebook, Linkedin, Mail, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <>
      <main className="flex flex-col justify-center md:p-14 p-4 bottom-0 left-0 right-0 z-50 lg:h-[70%] bg-black text-white">
        <div className="flex lg:flex-row flex-col justify-around md:items-start items-center lg:gap-0 gap-8">
          <div className="flex flex-col justify-center md:items-start items-center">
            <h1 className="font-bold text-lg md:mb-6 mb-4">
              Contact the Publisher
            </h1>
            <p className="text-gray-400 mb-2">mike@runo.com</p>
            <p className="text-gray-400 text-sm">+944 450 904 505</p>
          </div>

          <div className="flex flex-row gap-20 items-start">
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-lg md:mb-6 mb-4">Explorate</h1>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-white/80">Partners</li>
                <li className="cursor-pointer hover:text-white/80">
                  Job Opportunities
                </li>
                <li className="cursor-pointer hover:text-white/80">
                  Advertise
                </li>
                <li className="cursor-pointer hover:text-white/80">
                  Membership
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-lg md:mb-6 mb-4">Headquarter</h1>

              <p className="cursor-pointer hover:text-white/80 text-gray-500 text-sm md:w-[70%]">
                191 Middleville Road, NY 1001, Sydney Australia
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center md:items-start items-center gap-4">
            <div>
              <h1 className=" text-white text-center text-xl font-extrabold">
                {" "}
                RUNO
              </h1>

              <p className="md:text-start text-center text-lg mt-4 font-bold">
                Connections
              </p>
            </div>

            <div className="flex list-none border border-transparent gap-2 md:gap-0">
              <li className="lg:p-2 p-1 h-9 hover:bg-white cursor-pointer hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out">
                <Linkedin color="gray" />
              </li>

              <li className="lg:p-2 p-1 h-9 hover:bg-white cursor-pointer hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out">
                <Twitter color="gray" />
              </li>

              <li className="lg:p-2 p-1 h-9 hover:bg-white cursor-pointer hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out">
                <Facebook color="gray" />
              </li>

              <li className="lg:p-2 p-1 h-9 hover:bg-white cursor-pointer hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out">
                <Youtube color="gray" />
              </li>

              <li className="lg:p-2 p-1 h-9 hover:bg-white cursor-pointer hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out">
                <Mail color="gray" />
              </li>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-gray-800 md:p-4 p-2 text-sm text-center ">
        <div className="flex flex-row justify-between items-center md:px-4">
          <div className="flex items-center">
            <p>© {new Date().getFullYear()} </p>
            <h1 className="flex md:flex-row flex-col border-l-2 md:items-center md:gap-1 items-start ml-2 pl-2">
              <span className=" font-bold text-gray-500 md:text-lg text-sm">
                RUNO
              </span>{" "}
              Publisher Studio
            </h1>
          </div>

          <p className="text-gray-400 cursor-pointer md:text-base text-xs">
            Subscribe Now
          </p>
        </div>

        <div className="w-full h-0.5 bg-blue-500 my-3"></div>
        <div className=" flex md:flex-row flex-col items-center justify-center md:gap-2">
          <p>
            Made with ❤️ by{" "}
            <span className="font-semibold text-white md:text-base text-xs">
              Urooj Sadiq
            </span>
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
