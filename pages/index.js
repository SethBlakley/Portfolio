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
    name: "Schedule a one-on-one",
    href: "#",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    icon: CashIcon,
    name: "Payroll",
    href: "#",
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    icon: ReceiptRefundIcon,
    name: "Submit an expense",
    href: "#",
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    icon: AcademicCapIcon,
    name: "Training",
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
            "linear-gradient(rgba(217, 45, 123, 0.6), rgba(20, 37, 80, 0.9)), url(https://images.unsplash.com/photo-1618335829737-2228915674e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
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
          <div className="py-5 font-bold text-white">Front End Engineer</div>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            See Projects
          </button>
        </div>
      </div>

      <section aria-labelledby="quick-links-title" id="bgbg">
        <div className="overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
          <h2 className="sr-only" id="quick-links-title">
            Quick links
          </h2>

          <div className="p-6 bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
            <div className="inline-flex p-3 rounded-lg ring-4 ring-red">
              <Image src={logo} alt="Loopmedia" height={25} width={25} />
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a href="" className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  Loop Media Web
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et
                dolorem. Sit repellendus qui ut at blanditiis et quo et
                molestiae.
              </p>
            </div>
          </div>

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
