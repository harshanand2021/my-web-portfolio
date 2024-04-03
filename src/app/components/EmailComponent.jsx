import React from "react";
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailComponent = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2">
            
        </div> */}
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Wheather you have a question or just want to greet me, I'll try my
          best to get back to you
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GitHubIcon} alt="GitHub icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium"
            >
              Your Email
            </label>
            <input
              className="bg-[#1819E] border border-[#33353F] placeholder-[#919498] text-gray-500 text-sm rounded-lg block w-full p-2.5"
              type="email"
              id="email"
              required
              placeholder="yourid@email.com"
            />

            <label
              htmlFor="subject"
              className="text-white block mb-1 text-sm font-medium"
            >
              Subject
            </label>
            <input
              className="bg-[#1819E] border border-[#33353F] placeholder-[#919498] text-gray-500 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              required
              placeholder="Just Saying Hi.."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block-w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-violet-400 hover:bg-violet-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailComponent;
