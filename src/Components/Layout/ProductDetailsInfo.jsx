import React, { useState } from "react";
import styles from "../../Styles/Style";
import { Link } from "react-router-dom";
import ProductReview from "./ProductReview";
import { motion } from "framer-motion";

import reviewImage1 from "../../Assets/reviewImage1.jpg";
import reviewImage2 from "../../Assets/reviewImage2.jpg";
import reviewImage3 from "../../Assets/reviewImage3.jpg";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaSolarPanel, FaStore } from "react-icons/fa";

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-4 py-6 md:px-10 rounded mt-10 shadow-lg">
      <div className="flex items-center justify-between border-b pb-3">
        {["Product Details", "Product Reviews", "Seller Information"].map((label, idx) => {
          const index = idx + 1;
          return (
            <div key={index} className="relative">
              <h5
                className={`text-[16px] md:text-[18px] px-1 font-semibold cursor-pointer transition-all ${
                  active === index ? "text-blue-600" : "text-black"
                }`}
                onClick={() => setActive(index)}
              >
                {label}
              </h5>
              {active === index && <div className={`${styles.active_indicator}`} />}
            </div>
          );
        })}
      </div>

      {/* Product Details */}
      {active === 1 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-5 space-y-5 text-gray-800 leading-7"
        >
          <h2 className="text-xl font-bold text-green-700 flex items-center">
            <FaSolarPanel className="mr-2" /> Clean Energy Powered by the Sun
          </h2>
          <p>
            This premium solar panel delivers high-efficiency performance even under low sunlight. It’s ideal for
            homes, offices, and remote setups, reducing dependency on the grid.
          </p>
          <p>
            Built with durable materials and backed by 25 years of warranty, this solar solution is engineered for
            long-term sustainability. Each unit is tested for optimal current output and weather resistance.
          </p>
          <p>
            Upgrade your lifestyle and save on electricity bills while contributing to a cleaner planet. Switch to solar
            — the smarter, greener way to power your life.
          </p>
        </motion.div>
      )}

      {/* Product Reviews */}
      {active === 2 && (
        <div className="mt-5 space-y-6">
          {[reviewImage1, reviewImage2, reviewImage3].map((img, idx) => {
            const reviews = [
              {
                author: "Rahi Ahmed",
                comment: "Solid solar performance. Battery charges even on cloudy days!",
                stars: [true, true, true, false, false],
                date: "1 day ago",
              },
              {
                author: "Naim Mia",
                comment: "Highly efficient. Cut my electricity bill in half.",
                stars: [true, true, true, true, true],
                date: "3 days ago",
              },
              {
                author: "Alamin Ahmed",
                comment: "Easy to install, eco-friendly, and worth every rupee.",
                stars: [true, true, false, false, false],
                date: "1 week ago",
              },
            ];

            const review = reviews[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -30 * (idx + 1) }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductReview
                  authorName={review.author}
                  reviewImage={img}
                  comment={review.comment}
                  thardStar={review.stars[2] ? <AiFillStar color="#f6Ba00" /> : <AiOutlineStar color="#f6Ba00" />}
                  fourthStar={review.stars[3] ? <AiFillStar color="#f6Ba00" /> : <AiOutlineStar color="#f6Ba00" />}
                  fifthStar={review.stars[4] ? <AiFillStar color="#f6Ba00" /> : <AiOutlineStar color="#f6Ba00" />}
                  publishDate={review.date}
                />
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Seller Info */}
      {active === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full block 800px:flex pt-5 pb-6 text-gray-800"
        >
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                alt="Seller avatar"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <p className="text-sm text-gray-600">Rating: {data.shop.ratings}</p>
              </div>
            </div>
            <p className="mt-4 text-[15px] leading-6">
              {data.shop.description ||
                "We specialize in sustainable energy solutions including rooftop solar systems, home battery storage, and off-grid solar kits across Pakistan."}
            </p>
          </div>

          <div className="w-full 800px:w-[50%] mt-6 800px:mt-0 flex justify-end items-start">
            <div className="text-left">
              <p className="font-medium">Joined on: <span className="font-normal">21 May, 2023</span></p>
              <p className="font-medium pt-2">Total Products: <span className="font-normal">200</span></p>
              <p className="font-medium pt-2">Total Reviews: <span className="font-normal">486</span></p>

              <Link to="/shop/:id">
                <button className="mt-4 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-md transition">
                  <FaStore /> Visit Shop
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductDetailsInfo;
