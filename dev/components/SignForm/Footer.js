const Footer = ({ footer, theme }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <a
      href={footer.redirectTo}
      data-test="Link"
      className="flex group justify-center"
    >
      <span className="py-3 pr-2 text-center text-gray-800 text-xs md:text-sm">
        {footer.text}
      </span>
      <span
        className={classNames(
          theme === "signup"
            ? "group-hover:text-blue-600"
            : "group-hover:text-purple-600",
          "py-3 text-center text-gray-800 text-xs md:text-sm"
        )}
      >
        {footer.textLink}
      </span>
    </a>
  );
};

export default Footer;
