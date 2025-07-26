import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

import ProductDetailsCart from "./ProductDetailsCart";
import styles from "../../Styles/Style";
import { removeFromWishlist, addToWishlist } from "../../Redux/WishlistAction";
import { addTocart } from "../../Redux/CartAction";

const Product = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const productNameSlug = data.name.replace(/\s+/g, "-");
  const formatter = new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    setClick(wishlist?.some((item) => item.id === data.id));
  }, [wishlist]);

  const handleWishlistToggle = () => {
    setClick(!click);
    click ? dispatch(removeFromWishlist(data)) : dispatch(addToWishlist(data));
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      toast.error("Item already in cart");
    } else {
      dispatch(addTocart(data));
      toast.success("Item added to cart");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 relative cursor-pointer h-[360px] group">
      <Link to={`/product/${productNameSlug}`}>
        <img
          src={data.image_Url[0].url}
          alt={data.name}
          className="w-full h-[140px] object-contain select-none mb-2 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <Link to={`/`}>
        <h5 className={`${styles.shop_name} select-none mb-1 text-sm text-gray-600`}>
          {data.shop.name}
        </h5>
      </Link>

      <Link to={`/product/${productNameSlug}`}>
        <h4 className="font-semibold text-gray-800 text-base truncate mb-1">
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>

        <div className="flex text-yellow-400 mb-2">
          {[...Array(4)].map((_, i) => (
            <AiFillStar key={i} size={18} />
          ))}
          <AiOutlineStar size={18} />
        </div>
      </Link>

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h5 className="text-sm text-gray-400 line-through">
            {data.price !== 0 && formatter.format(data.price)}
          </h5>
          <h4 className="text-blue-600 font-bold text-[16px]">
            {formatter.format(data.discount_price)}
          </h4>
        </div>
        <span className="text-sm text-green-500">{data.total_sell} sold</span>
      </div>

      {/* Action Icons */}
      <div>
        {click ? (
          <AiFillHeart
            size={22}
            color="red"
            onClick={handleWishlistToggle}
            className="absolute top-4 right-3 hover:scale-110 transition"
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            color="#333"
            onClick={handleWishlistToggle}
            className="absolute top-4 right-3 hover:text-red-500 transition"
            title="Add to wishlist"
          />
        )}

        <AiOutlineEye
          size={22}
          color="#333"
          onClick={() => setOpen(!open)}
          className="absolute top-12 right-3 cursor-pointer hover:text-blue-500 transition"
          title="Quick View"
        />

        <AiOutlineShoppingCart
          size={24}
          color="#333"
          onClick={() => handleAddToCart(data?.id)}
          className="absolute top-[88px] right-3 cursor-pointer hover:text-green-600 transition"
          title="Add to Cart"
        />
      </div>

      {open && <ProductDetailsCart setOpen={setOpen} data={data} />}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </div>
  );
};

export default Product;
