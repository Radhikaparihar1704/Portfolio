import React from "react";

function Contact() {
  return (
    <div id="contact" className="min-h-screen w-full flex flex-col items-center justify-center bg-radial-[at_20%_55%] from-black via-black to-cyan-900 text-white px-6 font-sans relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-t from-cyan-300 via-indigo-400 to-white bg-clip-text text-transparent">
        Contact Me
      </h2>
      <div className="flex flex-col md:flex-row gap-12 justify-center items-start mb-10 max-w-4xl w-full">
        <div className="flex flex-col gap-4 text-lg">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              className="hover:text-cyan-400 transition-colors duration-300"
              href="mailto:radhikaparihar1704@gmail.com"
              target="_blank"
            >
              radhikaparihar1704@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              className="hover:text-cyan-400 transition-colors duration-300"
              href="https://www.linkedin.com/in/radhika-parihar1720040567"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4 w-full md:w-96">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black py-3 rounded-full font-medium shadow-md hover:translate-y-[-2px] transition-all duration-300">
            Send
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;

