import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="w-1/6 bg-gray-200 p-5 max-h-screen">
      <div className="border-b border-gray-500 pb-1 pl-2 text-lg font-bold">CATEGORY</div>
      {
        categories?.map((category, i)=>(
            <div onClick={()=> setCategory(category)} className="text-lg cursor-pointer hover:bg-gray-300 p-2" key={i}>{category}</div>
        ))
      }
    </div>
  );
};

export default Category;