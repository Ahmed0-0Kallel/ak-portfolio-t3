import userData from "../constatnts/data"; // Importing user data from a data file
import { EmailIcon, MapPinIcon } from "./Icons"; // Importing EmailIcon and MapPinIcon components from a file
import { inter700 } from "./fonts"; // Importing the inter700 font
import cn from "classnames"; // Importing the classnames library
import Link from "next/link"; // Importing the Link component from Next.js

function IconLink({
  Icon,
  href,
  className,
}: {
  Icon: React.FC<{ className?: string }>;
  href: string;
  className?: string;
}) {
  // A component for rendering an icon with a link
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-row items-center gap-2 dark:hover:bg-transparent dark:hover:text-white",
        className
      )}
    >
      <Icon className="m-1 inline h-6 w-6" />
    </Link>
  );
}

export default function Contact() {
  // The main Contact component
  return (
    <div className='flex flex-col  grow items-center justify-center animate-fadeIn'>
      <div className="max-w-6xl  mx-auto h-48 bg-transparent dark:bg-opacity-5 dark:bg-[#161616]">
        {/* Contact heading */}
        <div
          className={cn(
            inter700.className, '',
            " relative my-10 h-full w-fit whitespace-nowrap bg-gradient-to-br from-black via-transparent to-transparent bg-400% bg-clip-text py-3  text-4xl leading-5 text-transparent motion-safe:animate-background-pan dark:from-white dark:via-black xs:text-5xl sm:-mb-2 sm:pb-2 sm:text-6xl"
          )}
        >
          Contact
        </div>
      </div>
      <div className="relative rounded-md shadow-xl bg-white  dark:bg-[#0e0d0d] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">

        <div className="md:ml-4">
          {/* Contact form section */}
          <h1 className="dark:text-white text-black font-semibold text-2xl">
            Let&apos;s talk.
          </h1>
          <p className=" text-base bg-white  dark:bg-[#0e0d0d] mt-2">
            Fill in the details and I&apos;ll get back to you as soon as I can.
          </p>

          <div className="icons-container inline-flex flex-col my-4">
            {/* Email icon and link */}
            <div className="flex flex-row items-center space-x-2 rounded-md hover:border hover:border-blue-500 p-1">
              <IconLink
                href={userData.email}
                Icon={EmailIcon}
              />
              <p className="bg-white  dark:bg-[#0e0d0d] font-light text-sm">
                {userData.email}
              </p>
            </div>
            {/* Map pin icon and location */}
            <div className="flex flex-row items-center space-x-2 rounded-md hover:border hover:border-blue-500 p-1 my-1">
              <IconLink
                href={userData.email}
                Icon={MapPinIcon}
              />
              <p className="bg-white  dark:bg-[#0e0d0d] font-light text-sm">
                {userData.location}
              </p>
            </div>
          </div>
        </div>
        <form className="form rounded-lg p-4 flex flex-col">
          {/* Name input */}
          <label htmlFor="name" className="text-sm text-black dark:text-white mx-4">
            {" "}
            Your Name
          </label>
          <input
            type="text"
            className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
            name="name"
          />
          {/* Email input */}
          <label htmlFor="email" className="text-sm text-black dark:text-white mx-4 mt-4">
            Email
          </label>
          <input
            type="text"
            className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
            name="email"
          />
          {/* Message input */}
          <label
            htmlFor="message"
            className="text-sm text-black dark:text-white mx-4 mt-4"
          >
            Message
          </label>
          <textarea
            rows={4}
            className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
            name="message"
          ></textarea>
          {/* Submit button */}
          <button
            type="submit"
            className="dark:bg-black bg-black rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}
