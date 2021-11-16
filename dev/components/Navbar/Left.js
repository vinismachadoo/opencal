import { useRouter } from "next/router";

export const NAVBAR_LABELS = [
  {
    name: "Calendário",
    href: "/calendar",
  },
  { name: "Criar Evento", href: "/create" },
  { name: "Evento", href: "/event/1" },
];

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
          <span className="block lg:hidden h-8 w-auto text-black font-bold text-2xl align-middle">
            📅
          </span>
          <span className="hidden lg:block h-8 w-auto text-black font-bold text-2xl  align-middle">
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
                  ? "bg-gray-100 text-black"
                  : "text-black hover:bg-gray-100 hover:text-black",
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
