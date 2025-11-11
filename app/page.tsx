const Page = () => {
  return (
    <div
      className="min-h-screen text-gray-900 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/ChatGPT Image Nov 10, 2025, 08_22_37 PM.png')",
      }}
    >
      {/* Overlay for readability */}
      <div className="bg-black bg-opacity-50 min-h-screen">
        {/* Header Section */}
        <header className="text-center py-16 text-white">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Hello, I'm Ivan Filippini
          </h1>
          <p className="text-2xl mt-4 font-light drop-shadow-md">
            A passionate web developer & designer
          </p>
        </header>

        {/* Bio Section */}
        <section className="px-6 py-16 text-center text-white">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-indigo-300">About Me</h2>
            <p className="text-lg leading-relaxed">
              I'm a front-end developer with a love for clean design and intuitive user experiences.
              I build websites with modern frameworks like React, Next.js, and more.
              When I'm not coding, I explore new tech trends or work on creative projects.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 text-center">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-4xl mx-auto text-white">
            <h2 className="text-3xl font-semibold mb-8 text-indigo-300">Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>HTML & CSS</li>
              <li>Node.js</li>
              <li>Git & GitHub</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-16 text-center text-white">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-indigo-300">Get in Touch</h2>
            <p className="text-lg mb-4">
              Feel free to reach out for collaborations, questions, or just to say hi!
            </p>
            <a
              href="mailto:ivanfilippini90@proton.me"
              className="text-xl text-indigo-300 hover:underline"
            >
              ivanfilippini90@proton.me
            </a>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-6 bg-black bg-opacity-60 text-white text-center">
          <p>Built with ❤️ using Next.js & Tailwind CSS</p>
          <p>&copy; 2025 Ivan Filippini</p>
        </footer>
      </div>
    </div>
  );
};

export default Page;
