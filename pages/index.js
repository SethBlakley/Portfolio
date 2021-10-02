import "tailwindcss/tailwind.css";
import Image from "next/image";
import logo from "../public/images/logo_icon.png";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const posts1 = [
  {
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    imageUrl:
      "data:image/png;base64,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",
  },
];

const posts2 = [
  {
    category: { name: "server", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
  },
];

const posts3 = [
  {
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl:
      "https://www.crn.com/resources/0263-10e2702204e9-fc026e082999-1000/expand-your-the-postgresql-possibilities-cc.jpg",
  },
];

const posts4 = [
  {
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl:
      "https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1479&q=80",
  },
];

const actions = [
  {
    icon: ClockIcon,
    name: "Loop Media Web",
    href: "#",
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    icon: BadgeCheckIcon,
    name: "Loop Media Moble",
    href: "#",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    icon: UsersIcon,
    name: "Fitness Center",
    href: "#",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    icon: CashIcon,
    name: "Potluck",
    href: "#",
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    icon: ReceiptRefundIcon,
    name: "Enciv",
    href: "#",
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    icon: AcademicCapIcon,
    name: "Helpful Engineering",
    href: "#",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    icon: ReceiptRefundIcon,
    name: "Games Library",
    href: "#",
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    icon: AcademicCapIcon,
    name: "Calculator",
    href: "#",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-gray-800 sm:pt-2 sm:px-5 ">
      <div
        className="pb-40 bg-top bg-cover border-t-2 border-l-2 border-r-2 border-gray-900 rounded-t-lg md:pb-80 "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,100,100,0.5), rgba(100, 00, 150, 0.5)), url(https://images.unsplash.com/photo-1618335829737-2228915674e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
        }}
      >
        <div className="w-40 pl-5">
          <img
            src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
            alt="Girl in a jacket"
          />
        </div>
        <div id="test" className="flex flex-col items-center w-full h-full">
          <h1 className="flex mt-40 font-bold text-white text-7xl">
            Seth Blakley
          </h1>
          <div className="py-5 font-bold text-white">
            Front End Software Engineer
          </div>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            See Projects
          </button>
        </div>
      </div>

      <div
        id="bgbg"
        className="relative px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed!!!!!!!!!!!!!!!!!!!!!!!.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="flex justify-center mt-12 xs:flex-col lg:flex-row ">
            {posts1.map((post) => (
              <div className="flex flex-col mx-2 overflow-hidden rounded-lg shadow-lg lg:w-96">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-48"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
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

          <div className="flex justify-center mt-12 xs:flex-col lg:flex-row ">
            {posts2.map((post) => (
              <div className="flex flex-col mx-2 overflow-hidden rounded-lg shadow-lg lg:w-96">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-48"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
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

          <div className="flex justify-center mt-12 xs:flex-col lg:flex-row ">
            {posts3.map((post) => (
              <div className="flex flex-col mx-2 overflow-hidden rounded-lg shadow-lg lg:w-96">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-48"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
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

          <div className="flex justify-center mt-12 xs:flex-col lg:flex-row ">
            {posts4.map((post) => (
              <div className="flex flex-col mx-2 overflow-hidden rounded-lg shadow-lg lg:w-96">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-48"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
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
        </div>
      </div>

      <section aria-labelledby="quick-links-title" id="">
        <div className="overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
          <h2 className="sr-only" id="quick-links-title">
            Quick links
          </h2>

          {actions.map((action, actionIdx) => (
            <div
              key={action.name}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1
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
                  <action.icon className="w-6 h-6" aria-hidden="true" />
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
                <p className="mt-2 text-sm text-gray-500">
                  Doloribus dolores nostrum quia qui natus officia quod et
                  dolorem. Sit repellendus qui ut at blanditiis et quo et
                  molestiae.
                </p>
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
  );
}
