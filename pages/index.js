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
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'data:image/png;base64,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',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'data:image/png;base64,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',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]


const posts2 = [
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

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
          <div className="py-5 font-bold text-white">Front End Software Engineer</div>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            See Projects
          </button>
        </div>
      </div>
        

      <div id="bgbg" className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      
        
        
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed!!!!!!!!!!!!!!!!!!!!!!!.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center">
          <div className="mt-12 flex xs:flex-col justify-center lg:flex-row ">
            {posts1.map((post) => (
              <div key={post.title} className=" lg:w-96 mx-2 flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex xs:flex-col justify-center lg:flex-row ">
            {posts1.map((post) => (
              <div key={post.title} className="lg:w-96 mx-2 flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
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

          <div className="p-6 bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500 border-2 border-black border-solid">
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

          <div className="p-6 bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500 border-2 border-gray-400 border-solid">
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
