import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  UserIcon,
  UserCircleIcon,
  CogIcon,
  LogoutIcon,
  HeartIcon,
} from "@heroicons/react/outline";

const Right = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        type="button"
        className="bg-green-500 p-1 rounded-full text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-white"
      >
        <a href="/favorites">
          <span className="sr-only">View my events</span>
          <HeartIcon className="h-6 w-6" aria-hidden="true" />
        </a>
      </button>
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="bg-green-500 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <UserCircleIcon className="h-6 w-6 text-gray-200 hover:text-white" />
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-5 ring-green-400 ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/profile"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  <span className="inline-flex items-center">
                    <UserIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                    Minha conta
                  </span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/settings"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  <span className="inline-flex">
                    <CogIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                    Configurações
                  </span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  <span className="inline-flex items-center">
                    <LogoutIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                    Sair
                  </span>
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Right;
