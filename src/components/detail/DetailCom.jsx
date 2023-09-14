import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailCom = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const { carts } = useSelector((state) => state.carts);

  console.log(productDetail, "productDetail");
  console.log(carts, "carts");


  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const testData = (value) => {
    console.log(value);
  }
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        description: productDetail?.description,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[500px] object-contain"
        src={productDetail?.image}
        alt=""
      />
      <div>
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500 font-serif font-bold">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500 font-serif font-bold">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold font-sans">
          {productDetail?.price} <span className="font-serif">$</span>
        </div>
        <div className="flex items-center  my-4 border border-black rounded-2xl w-[200px] h-15 bg-gray-300 ">
          <div
            onClick={decrement}
            className="w-[25%] text-5xl text-center cursor-pointer border-r border-black rounded-l-2xl  hover:bg-black hover:text-white"
          >
            -
          </div>
          <input
            className="w-[50%] h-[100%] text-center text-4xl font-bold bg-gray-100 text-black"
            type="text"
            onChange={()=> testData}
            value={quantity}
          />
          <div
            onClick={increment}
            className="w-[25%] text-5xl text-center cursor-pointer border-l border-black rounded-r-2xl  hover:bg-black hover:text-white"
          >
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border border-black w-[200px] h-16 text-2xl rounded-2xl bg-gray-200 cursor-pointer my-4 flex items-center justify-center hover:bg-black hover:text-white"
        >
          Add to basket
        </div>
      </div>
    </div>
  );
};

export default DetailCom;
