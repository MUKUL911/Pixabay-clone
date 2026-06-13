import PixabayContext from "./PixabayContext";
import { useState, useEffect } from "react";
import React from "react";
// import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]);
  const [query,setQuery] = useState('london')
  const api_key = "28921413-231cf0e1900f363a6647b342b";

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=60`,
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
    };

    fetchData();
  }, [query] );

  const fetchImageByCategory = async (category) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${category}&image_type=photo&pretty=true&per_page=60`,
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
  };

  return (
    <PixabayContext.Provider value={{ imageData, fetchImageByCategory , setQuery}}>
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
