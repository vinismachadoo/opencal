import { useRouter } from "next/router";
import { NAVBAR_LABELS } from "../../globals";

const Left = () => {
  const router = useRouter();

  const navigation = NAVBAR_LABELS.map((label) => {
    label.current = router.pathname === label.href;
    return label;
  });

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      <a href="/">
        <div className="flex-shrink-0 flex items-center">
          <span className="block lg:hidden h-8 w-auto text-white font-bold text-2xl align-middle">
            📅
          </span>
          <span className="hidden lg:block h-8 w-auto text-white font-bold text-2xl  align-middle">
            📅 Opencal
          </span>
        </div>
      </a>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-green-600 text-white"
                  : "text-white hover:bg-green-400 hover:text-white",
                "px-3 py-2 rounded-md text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Left;
