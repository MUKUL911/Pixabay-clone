import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Navbar = () => {
  const {fetchImageByCategory,setQuery}  = useContext(PixabayContext);
  return (
    <>
    <div className="container text-center my-3" >
      <button   onClick={()=>fetchImageByCategory("nature")} type="button"  className="btn text-2xl rounded-xl border-2 my-2.5 mx-4 bg-amber-400 hover:bg-amber-500 inline-flex justify-center items-center">
        Nature
      </button> 
      <button   onClick={()=>fetchImageByCategory("science")}type="button"  className="btn text-2xl rounded-xl border-2 my-2.5 mx-4 bg-amber-400 hover:bg-amber-500 inline-flex justify-center items-center">
        Science
      </button> 
      <button   onClick={()=>fetchImageByCategory("Electronics")}type="button"  className="btn text-2xl rounded-xl border-2 my-2.5 mx-4 bg-amber-400 hover:bg-amber-500 inline-flex justify-center items-center">
       Electronics
      </button> 
      <button  onClick={()=>fetchImageByCategory("bikes")} type="button"  className="btn text-2xl rounded-xl border-2 my-2.5 mx-4 bg-amber-400 hover:bg-amber-500 inline-flex justify-center items-center">
        Bikes
      </button> 
      <button   onClick={()=>fetchImageByCategory("space")}type="button"  className="btn text-2xl rounded-xl border-2 my-2.5 mx-4 bg-amber-400 hover:bg-amber-500 inline-flex justify-center items-center">
        Space
      </button> 

      
    </div>

    <div className="form">
      <input type="text" onChange={(e)=>setQuery(e.target.value)} className="form-control" />
    </div>
    </>

  );
};

export default Navbar;
