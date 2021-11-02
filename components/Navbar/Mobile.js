import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import { NAVBAR_LABELS } from "../../globals";

const Mobile = () => {
  const router = useRouter();

  const navigation = NAVBAR_LABELS.map((label) => {
    label.current = router.pathname === label.href;
    return label;
  });

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
              item.current
                ? "bg-green-600 text-white"
                : "text-white hover:bg-gray-700 hover:text-white",
              "block px-3 py-1 rounded-md text-base font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  );
};

export default Mobile;
