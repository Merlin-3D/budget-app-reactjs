import React, { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes/routes";
import { BsBasket2Fill, BsFillCameraFill, BsPlus } from "react-icons/bs";
import { FaLyft, FaStore } from "react-icons/fa";
import { startsWith } from "lodash";
import RightBar from "./rightBar";

const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Overview", href: "/", current: false },
  { name: "Finance", href: "/finance", current: false },
  { name: "Options", href: "/options", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Application({ children }: any) {
  const location = useLocation();

  return (
    <>
      <div className="xl:h-5/6 2xl:h-5/6 sm:h-full bg-bg-0 xl:w-9/12 2xl:w-9/12 md:w-full sm:w-full drop-shadow-2xl rounded-3xl relative">
        <Popover
          as="header"
          className={({ open }) =>
            classNames(
              open ? "fixed inset-0 z-40 overflow-y-auto" : "",
              "bg-bg-0 lg:static lg:overflow-y-visible py-4 rounded-3xl"
            )
          }
        >
          {({ open }) => (
            <>
              <div className="ml-8 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                  <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                    <div className="flex-shrink-0 flex items-center">
                      <a href="#" className="flex justify-center items-center">
                        <img
                          className="block h-8 w-auto"
                          src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-budget-award-events-flaticons-flat-flat-icons.png"
                          alt="Workflow"
                        />
                        <h1 className="text-2xl font-semibold ml-2">Budget</h1>
                      </a>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                    <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                      <div className="w-full">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <SearchIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block h-12 bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-100 focus:border-primary-100 sm:text-sm"
                            placeholder="Search"
                            type="search"
                          />
                        </div>
                      </div>
                      <nav
                        className="hidden lg:py-2 lg:flex lg:space-x-8"
                        aria-label="Global"
                      >
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              location.pathname === item.href
                                ? " border-primary-100 border-b-2 text-gray-900 "
                                : "text-gray-900 hover:bg-primary-100 hover:rounded-md hover:text-white",
                              " py-2 px-3 inline-flex items-center text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                  <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4 z-20">
                    <a
                      href="#"
                      className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </a>

                    {/* Profile dropdown */}
                    <Menu as="div" className="flex-shrink-0 relative ml-5">
                      <div>
                        <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100">
                          <span className="sr-only">Open user menu</span>
                          <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                            <svg
                              className="h-full w-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2 px-4 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "hover:bg-gray-50",
                        "block rounded-md py-2 px-3 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                    {userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>

        <div className="h-5/6">
          <div className="max-w-2xl mx-auto lg:max-w-full  lg:grid lg:grid-cols-12 lg:gap-4 h-full">
            <main className="lg:col-span-9 xl:col-span-9 ml-16 mr-10 ">
              {children}
            </main>
          </div>
        </div>
        <div className=" xl:block xl:col-span-3 bg-bg-1 absolute h-full top-0 right-0 w-3/12 rounded-r-3xl">
          <div className="sticky top-8 space-y- mt-32 px-8">
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
}
