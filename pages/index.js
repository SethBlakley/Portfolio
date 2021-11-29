import "tailwindcss/tailwind.css";
import Image from "next/image";
import sbLogo1 from "../public/images/sbLogo1.png";
import { techStack } from "../public/resources/History";
import { projects } from "../public/resources/History";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <main>
      <div className="flex flex-col py-2 bg-gray-800 md:px-5 ">
        <section
          className="h-screen bg-top bg-cover border-t-2 border-l-2 border-r-2 border-gray-900 rounded-t-lg"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,100,100,0.5), rgba(100, 00, 150, 0.5)), url(https://images.unsplash.com/photo-1618335829737-2228915674e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
          }}
        >
          <div className="flex justify-center w-full lg:justify-start">
            <div className="mt-32 lg:mt-5 lg:ml-10">
              <Image src={sbLogo1} alt="Home Page" width={150} height={150} />
            </div>
          </div>

          <div className="flex flex-col items-center h-full pt-10 lg:pt-40">
            <div
              id="name-tag"
              className="flex flex-col items-center justify-center p-5 bg-gray-500 border-4 border-white border-solid rounded-xl"
            >
              <h1 className="flex text-white text-7xl">Seth Blakley</h1>
              <div className="pt-2 pb-5 text-2xl text-white">
                Software Engineer
              </div>
              <button
                className="px-4 py-2 font-bold text-white transition-colors ease-in-out bg-blue-500 rounded hover:bg-blue-700"
                onClick={() => {
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                See Projects
              </button>
            </div>
          </div>
        </section>

        <div className="relative px-4 pt-16 bg-gray-100 border-b-2 border-l-2 border-r-2 border-gray-900 rounded-b-lg md:mb-20 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              FRONT END FOCUSED <br></br> WITH FULL STACK EXPERIENCE
            </h2>
          </div>

          <section className="flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-center mt-12 sm:flex-col lg:flex-row">
              {techStack.map((post) => (
                <div className="flex flex-col m-2 overflow-hidden rounded-lg shadow-lg w-96">
                  <div className="flex-shrink-0">
                    <img
                      className="object-cover w-full h-48"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                    <div className="flex-1">
                      <p className="flex justify-center text-sm font-medium text-blue-600">
                        <a
                          href={post.category.href}
                          className="hover:underline"
                        >
                          {post.category.name}
                        </a>
                      </p>
                      <a href={post.href} className="block mt-2">
                        <p className="mt-3 text-base text-gray-500">
                          {post.description}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="quick-links-title"
            id="projects"
            className="pt-10"
          >
            <div className="mb-2 overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow-xl md:divide-y-0 md:grid md:grid-cols-2 md:gap-px">
              {projects.map((action, actionIdx) => (
                <div
                  key={action.name}
                  className={classNames(
                    actionIdx === 0
                      ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                      : "",
                    actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                    actionIdx === projects.length - 2 ? "sm:rounded-bl-lg" : "",
                    actionIdx === projects.length - 1
                      ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                      : "",
                    "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500"
                  )}
                >
                  <div>
                    <span
                      className={classNames(
                        action.iconBackground,
                        action.iconForeground,
                        "rounded-lg inline-flex p-3 ring-4 ring-red"
                      )}
                    >
                      <Image src={action.icon} height={50} width={50} />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium">
                      <a href={action.href} className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        {action.name}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{action.about}</p>
                  </div>
                  <div className="flex">
                    {action.madeWith.map((madeWith) => {
                      return (
                        <div className="flex items-center justify-center w-32 p-2 mt-2 mr-2 bg-blue-200 border-2 border-black border-solid rounded-2xl">
                          {madeWith.tech}
                        </div>
                      );
                    })}
                  </div>
                  <span
                    className="absolute text-gray-300 pointer-events-none top-6 right-6 group-hover:text-gray-400"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
