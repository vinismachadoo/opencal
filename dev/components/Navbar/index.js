import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Right from "./Right";
import Left from "./Left";
import Mobile from "./Mobile";

const index = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Menu areas*/}
              <Left />
              <Right />
            </div>
          </div>
          {/* Mobile menu dropdown*/}
          <Mobile />
        </>
      )}
    </Disclosure>
  );
};

export default index;
