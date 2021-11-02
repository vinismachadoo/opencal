import FilterTag from "./FilterTag";

const index = () => {
  return (
    <div className="mt-3 flex flex-wrap">
      <FilterTag filterName="Funk" />
      <FilterTag filterName="Pagode" />
      <FilterTag filterName="Eletrônica" />
      <FilterTag filterName="Brasilidades" />
    </div>
  );
};

export default index;
