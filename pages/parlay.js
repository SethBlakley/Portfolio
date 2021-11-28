import "tailwindcss/tailwind.css";
import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import { projects } from "../public/resources/History";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Parlay() {
  return (
    <main>
      <div className="flex flex-col bg-gray-800 sm:pt-2 sm:px-5 ">
        <div className="mb-20 overflow-hidden bg-gray-100 rounded-lg">
          <section>
            <div class="reactplayer">
              <ReactPlayer
                url="https://youtu.be/qSyHm0s7z-c"
                playing={true}
                muted={true}
                loop={true}
                width="100%"
                height="100%"
              />
            </div>
          </section>
          <section className="flex justify-center w-auto mt-12">
            <div className="flex p-20 bg-white rounded-lg shadow-lg">
              <h1>Position</h1>
              <h2>Project Management/Tech Lead</h2>
              <div>hello</div>
            </div>
          </section>
          <section
            aria-labelledby="quick-links-title"
            id="projects"
            className="pt-10"
          >
            <div className="mx-8 mb-20 overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow-xl md:divide-y-0 md:grid md:grid-cols-2 md:gap-px">
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
                        <div
                          className={`flex w-32 justify-center items-center mr-2 mt-2 rounded-2xl border-solid border-black border-2 p-2 ${madeWith.color}`}
                        >
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
