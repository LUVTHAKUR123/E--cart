import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product ";
import { useState } from "react";

const SearchItem = () => {
  // console.log(useParams());

  const [filterData, setFilterData] = useState([]);
  const { term } = useParams();

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );

      // console.log(data);
      setFilterData(data);
    };
    filteredData();
  }, [term]);

  return <Product items={filterData} />;
};
export default SearchItem;
