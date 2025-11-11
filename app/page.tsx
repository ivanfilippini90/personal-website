const Page = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col text-white"
      style={{
        backgroundImage: "url('/sports-bg.png')",
      }}
    >
      {/* A soft dark overlay to make text pop */}
      <div className="bg-black/60 flex-1 flex flex-col">
        {/* Header */}
        <header className="text-center py-20">
          <h1 className="text-5xl font-extrabold drop-shadow-xl">
            Hello, I'm Ivan Filippini
          </h1>
          <p className="text-2xl mt-4 font-light drop-shadow-md">
            A passionate web developer & designer
          </p>
        </header>

        {/* About Section */}
        <section className="px-6 py-16 text-center">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-indigo-300">
              About Me
            </h2>
            <p className="text-lg leading-relaxed">
              I'm a front-end developer who loves clean design and intuitive
              user experiences. I build modern web apps with React and Next.js.
              When I’m not coding, I explore new tech or creative design ideas.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 text-center">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-indigo-300">
              Skills
            </h2>
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
        <section className="px-4 py-16 text-center">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-indigo-300">
              Get in Touch
            </h2>
            <p className="text-lg mb-4">
              Feel free to reach out for collaborations, questions, or just to
              say hi!
            </p>
            <a
              href="mailto:ivanfilippini90@proton.me"
              className="text-xl text-indigo-300 hover:underline"
            >
              ivanfilippini90@proton.me
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-black/60 text-center">
          <p>Built with ❤️ using Next.js & Tailwind CSS</p>
          <p>&copy; 2025 Ivan Filippini</p>
        </footer>
      </div>
    </div>
  );
};

export default Page;
