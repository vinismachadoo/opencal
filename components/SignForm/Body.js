import { SimpleButton, GoogleButton } from "./Buttons";

export const NewsletterCheckbox = () => {
  return (
    <div className="mt-6 block text-xs md:text-sm text-gray-800">
      <input
        type="checkbox"
        className="focus:ring-blue-400 inline-block mr-2 focus:outline-none focus:ring-2 focus:border-transparent border-2 rounded border-gray-300"
      />
      <span display="inline">
        Concordo em receber novidades sobre os próximos eventos adicionados ao
        calendário
      </span>
    </div>
  );
};

const Body = ({ inputs, newsletter, buttonText, theme, googleText }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <form action="#">
      {inputs.map((input) => (
        <div className="mt-3 md:mt-5" key={input.placeholder}>
          <input
            type={input.type}
            className={classNames(
              theme === "signup"
                ? "focus:ring-blue-400"
                : "focus:ring-purple-400",
              "leading-tight block w-full text-xs md:text-sm p-2 border-2 rounded border-gray-100 focus:outline-none focus:ring-2 focus:border-transparent"
            )}
            placeholder={input.placeholder}
          />
        </div>
      ))}
      {newsletter && <NewsletterCheckbox theme={theme} />}
      <SimpleButton theme={theme} buttonText={buttonText} />
      <hr className="my-1 md:my-3" />
      <GoogleButton googleText={googleText} />
    </form>
  );
};

export default Body;
