import React, { useEffect, useState } from "react";
import styles from "../../Styles/Style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ProductDetailsInfo from "./ProductDetailsInfo.jsx";
import { addToWishlist, removeFromWishlist } from "../../Redux/WishlistAction";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../Redux/CartAction";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import ReactImageMagnify from "react-image-magnify";

const ProductDetails = ({ data }) => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(0);
  const [click, setClick] = useState(false);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => count > 1 && setCount(count - 1);

  const addToCartHandler = (id) => {
    const exists = cart?.some((item) => item?.id === id);
    if (exists) return toast.error("Item already in cart");
    if (data.stock < count) return toast.error("Product stock limited!");
    dispatch(addTocart({ ...data, qty: count }));
    toast.success("Item added to cart");
  };

  useEffect(() => {
    setClick(wishlist?.some((item) => item?.id === data?.id));
  }, [wishlist]);

  const toggleWishlist = () => {
    setClick(!click);
    click ? dispatch(removeFromWishlist(data)) : dispatch(addToWishlist(data));
  };

  return (
    <div className="bg-white">
      {data && (
        <div className={` ${styles.section} w-[90%] md:w-[80%]`}>
          <div className="py-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Images */}
              <div className="w-full md:w-1/2">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "product",
                      isFluidWidth: true,
                      src: data?.image_Url[select]?.url,
                    },
                    largeImage: {
                      src: data?.image_Url[select]?.url,
                      width: 600,
                      height: 800,
                    },
                  }}
                />
                <div className="flex gap-4 mt-4">
                  {data?.image_Url.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.url}
                      alt="thumb"
                      onClick={() => setSelect(idx)}
                      className={`w-[100px] h-[100px] object-cover rounded-lg border cursor-pointer ${
                        select === idx ? "border-blue-500 border-2" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="w-full md:w-1/2">
                <h1 className="text-2xl font-bold text-gray-800">{data.name}</h1>
                <p className="mt-2 text-gray-600">{data.description}</p>

                <div className="flex items-center gap-4 mt-4">
                  <span className="text-xl font-bold text-green-600">
                    ₨{data.discount_price}
                  </span>
                  {data.price && (
                    <span className="line-through text-gray-500">
                      ₨{data.price}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={decrementCount}
                      className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border rounded bg-gray-100">
                      {count}
                    </span>
                    <button
                      onClick={incrementCount}
                      className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded"
                    >
                      +
                    </button>
                  </div>

                  <div onClick={toggleWishlist} className="cursor-pointer">
                    {click ? <AiFillHeart size={28} color="red" /> : <AiOutlineHeart size={28} />}
                  </div>
                </div>

                <button
                  onClick={() => addToCartHandler(data?.id)}
                  className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded flex items-center gap-2"
                >
                  <AiOutlineShoppingCart /> Add to Cart
                </button>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt="Shop"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{data.shop.name}</h3>
                    <p className="text-sm text-gray-500">({data.rating}) ratings</p>
                  </div>
                  <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center">
                    <AiOutlineMessage className="mr-1" /> Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          <ProductDetailsInfo data={data} />
          <ToastContainer position="top-right" autoClose={2000} theme="light" />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
