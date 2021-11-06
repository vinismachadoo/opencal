export const SimpleButton = ({ theme, buttonText }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex justify-center">
      <button
        className={classNames(
          theme === "signup"
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-purple-500 hover:bg-purple-600",
          "w-full mt-8 mb-3 px-5 py-2 md:py-3 text-xs md:text-sm font-bold shadow-sm text-white rounded-full"
        )}
      >
        {buttonText}
      </button>
    </div>
  );
};

export const GoogleButton = () => {
  return (
    <div className="flex justify-center">
      <button className="w-full mt-3 border border-gray-300 px-5 py-2 md:py-3 text-xs md:text-sm font-bold shadow-sm text-gray-600 rounded-full hover:bg-gray-200 hover:border-gray-200">
        <div className="flex items-center justify-center">
          <img
            className="mr-2 w-2.5 h-2.5 md:w-3.5 md:h-3.5"
            alt="Google logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          />
          <span>Entrar com Google</span>
        </div>
      </button>
    </div>
  );
};
