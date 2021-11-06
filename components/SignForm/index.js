import Cover from "./Cover";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const index = ({
  title,
  subtitle,
  inputs,
  newsletter,
  buttonText,
  theme,
  footer,
}) => {
  return (
    <div className="flex min-h-screen bg-white">
      <Cover theme={theme} />
      <div className="md:w-1/2 max-w-lg mx-auto my-auto px-6 py-5 shadow-none">
        <Header title={title} subtitle={subtitle} />
        <Body
          inputs={inputs}
          newsletter={newsletter}
          buttonText={buttonText}
          theme={theme}
        />
        <Footer footer={footer} theme={theme} />
      </div>
    </div>
  );
};

export default index;
