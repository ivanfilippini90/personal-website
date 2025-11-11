import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-indigo-400">
          Hello, I'm Ivan Filippini
        </h1>
        <p className="text-2xl mt-4 text-gray-300">
          A passionate web developer & designer
        </p>
      </header>

      {/* Add your sports image here */}
      <section className="py-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          <Image
            src="/sport-bg.png"
            alt="Sports Collage"
            width={900}
            height={500}
            className="object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 text-center max-w-3xl">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-300">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I'm a front-end developer who loves clean design and intuitive user
          experiences. I build modern web apps with React and Next.js. When I’m
          not coding, I explore new tech or creative design ideas.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-500">
        <p>Built with ❤️ using Next.js & Tailwind CSS</p>
        <p>&copy; 2025 Ivan Filippini</p>
      </footer>
    </div>
  );
};

export default Page;
