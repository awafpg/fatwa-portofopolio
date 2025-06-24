import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home = () => {
  const projects = [
    {
      name: "Ava Travel",
      year: 2025,
      link: "https://ava-travel.vercel.app",
    },
    {
      name: "WellEat Website",
      year: 2024,
      link: "https://WellEat.vercel.app",
    },
    // Tambah data lainnya jika perlu
  ];

  return (
    <div>
      <NavBar />
      {/* Personal Information */}
      <section className="flex flex-col lg:flex-row p-8 gap-8">
        {/* Left */}
        <div className="lg:w-1/3 w-full">
          <div className="bg-white p-6 rounded shadow-lg">
            <div className="mb-4">
              <img
                src="/profil_awa.jpg"
                alt="profil"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://dummyimage.com/600x400/000/fff";
                }}
                className="rounded w-full"
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">Fatwa Penata Gama</h1>
            <p className="text-gray-600 mb-2">
              Frontend Developer passionate about crafting clean, responsive,
              and interactive user interfaces using modern tools like React and
              Tailwind CSS. Focused on performance, accessibility, and seamless
              user experience across devices.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Email: awafpg@gmail.com <br />
              Address: Bekasi, Jawa Barat
            </p>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th>Project</th>
                  <th>Year</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td className="py-1">{project.name}</td>
                    <td className="py-1">{project.year}</td>
                    <td className="py-1">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/link_icon.png"
                          alt="link"
                          className="w-6 h-6"
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-2/3 w-full">
          <h1 className="text-3xl font-bold">About Me</h1>
          <hr className="my-2" />
          <h2 className="text-xl font-semibold text-gray-700">
            Junior Web Developer
          </h2>
          <hr className="my-2" />
          <p className="mb-4 text-gray-600">
            Dedicated full-stack JavaScript developer with expertise in both
            front-end and back-end technologies. Proficient in React, Node.js,
            Express, and Tailwind CSS to build responsive, intuitive, and
            visually engaging applications. Developed 1 project in 2 months,
            focusing on React and Tailwind CSS to create a responsive and
            visually engaging application. Optimized performance, implemented
            clean, scalable code for seamless user experiences and efficient
            maintenance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold">Frontend Developer</h3>
              <div className="flex space-x-2 my-2">
                <img src="/html.png" alt="html" className="h-10" />
                <img src="/css.png" alt="css" className="h-10" />
                <img src="/javascript.png" alt="js" className="h-10" />
              </div>
              <p className="text-gray-600">
                Dedicated frontend developer skilled in building responsive,
                intuitive, and visually engaging user interfaces using React and
                Tailwind CSS. Successfully developed a project within 2 months,
                focusing on creating seamless user experiences through clean and
                scalable component-based architecture. Prioritized performance
                optimization and UI consistency across devices.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Backend Developer</h3>
              <div className="flex space-x-2 my-2">
                <img src="/nodejs.png" alt="node" className="h-10" />
              </div>
              <p className="text-gray-600">
                Experienced in developing robust server-side applications using
                Node.js and Express. Ensured efficient data handling, API
                integration, and backend logic to support scalable frontend
                applications. Wrote maintainable code that enables quick
                updates, secure processing, and strong performance across
                endpoints.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Find me on :</h2>
            <div className="flex space-x-4 mt-2">
              <a href="mailto:awafpg@gmail.com" target="_blank">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                  alt="gmail"
                  className="h-8"
                />
              </a>
              <a href="http://wa.me/+62895280016800" target="_blank">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="wa"
                  className="h-8"
                />
              </a>
              <a href="http://instagram.com/awafpg" target="_blank">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  alt="ig"
                  className="h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
