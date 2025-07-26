import React, { useEffect, useState } from "react";
import { productData } from "../../Static/data";
import styles from "../../Styles/Style";
import Product from "../Layout/Product";
import { motion } from "framer-motion";

const SuggestedProduct = ({ data }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items = productData?.filter(
      (product) => product.category === data?.category && product.id !== data.id
    );
    setProducts(items);
  }, [data]);

  return (
    <>
      {data && (
        <div className={`${styles.section} py-6`}>
          <h2 className="text-[28px] font-semibold text-center text-[#004466] mb-8">
            🔋 Related Solar Products ☀️
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {products.length > 0 ? (
              products.map((product, index) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={index}
                >
                  <Product data={product} />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No related solar products found.
              </p>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SuggestedProduct;
