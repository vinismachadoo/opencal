const Cover = ({ theme }) => {
  return (
    <div className="w-1/2 bg-cover md:block hidden max-h-screen overflow-hidden relative">
      <img
        src={`/${theme}.jpg`}
        alt=""
        className="object-cover absolute top-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Cover;
