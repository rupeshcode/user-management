import { Badge, Button, Card, Group, Text } from "@mantine/core";
import Image from "next/image";
import { Container } from "postcss";
import React from "react";
import { useSelector } from "react-redux";

const WishList = () => {
  const products = useSelector((state: RootState) => state.WishList.wishlist);
  return (
    <>
      <h3>WishList Items</h3>
      <div className="row">
        {products.map((product: any) => (
          <div key={product.id} className="">
            <div className="flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                height={100}
                width={100}
              />
              {product.rs}
              {product.alt}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WishList;
