import { Carousel } from "@mantine/carousel";
import { Button, Card, Chip, Container, Select, Text } from "@mantine/core";
import Image from "next/image";
import "@mantine/carousel/styles.css";
import scss from "./checkoutdetails.module.scss";

import React, { useState } from "react";
import { clsx } from "@/utils/string";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/Redux/Slice/AddtoCartSlice";

const Checkout = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState();

  // const cartItems = useSelector((state) => state.Cart.cart);
  // const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(
    "/assets/about/about-01.webp"
  );
  const handleImageChange = (newImage: any) => {
    setSelectedImage(newImage);
  };

  // const handleAddToCart = (item: any) => {
  //   dispatch(addItem(item));
  // };
  return (
    <>
      <Container>
        <div className={clsx(scss.maindiv, "row")}>
          <div className="col-md-2">
            <div>
              <Image
                className="mb-2"
                src="/assets/about/about-01.webp"
                alt="checkoutimg"
                height={100}
                width={100}
                onClick={() => handleImageChange("/assets/about/about-01.webp")}
                style={{ border: "2px solid gray" }}
              />
              <Image
                className="mb-2"
                src="/assets/about/about-02.webp"
                alt="checkoutimg"
                height={100}
                width={100}
                onClick={() => handleImageChange("/assets/about/about-02.webp")}
                style={{ border: "2px solid gray" }}
              />
              <Image
                src="/assets/about/img.webp"
                alt="checkoutimg"
                height={100}
                width={100}
                onClick={() => handleImageChange("/assets/about/img.webp")}
                style={{ border: "2px solid gray" }}
              />
            </div>
          </div>
          <div className="col-md-5">
            <Carousel
              loop
              withIndicators
              // height={500}
              dragFree
              slideGap="md"
              align="start"
              initialSlide={
                selectedImage === "/assets/about/about-02.webp"
                  ? 1
                  : selectedImage === "/assets/about/img.webp"
                  ? 2
                  : 0
              }
            >
              <Carousel.Slide>
                <Image
                  src="/assets/about/about-01.webp"
                  alt="checkoutimg"
                  height={100}
                  width={1000}
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  src="/assets/about/about-02.webp"
                  alt="checkoutimg"
                  height={100}
                  width={1000}
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  src="/assets/about/img.webp"
                  alt="checkoutimg"
                  height={100}
                  width={1000}
                />
              </Carousel.Slide>
            </Carousel>
          </div>
          <div className="col-md-5">
            <Card shadow="lg">
              <h2>product Details</h2>
              <h2>$5</h2>
              <p className="my-2">
                Reimagine the feeling of a classic T-shirt. With our cotton
                T-shirts, everyday essentials no longer have to be ordinary.
              </p>

              <div className={clsx(scss.button_wrapper, "d-flex flex-column")}>
                <div>
                  <Text>Select Color:</Text>
                </div>
                <div className="d-flex flex-row">
                  <Chip color="red" className="p-1">
                    Red
                  </Chip>
                  <Chip color="blue" className="p-1">
                    Blue
                  </Chip>
                  <Chip color="green" className="p-1">
                    Green
                  </Chip>
                  <Chip color="yellow" className="p-1">
                    Yellow
                  </Chip>
                </div>
              </div>
              <div>
                <Select
                  className="my-3"
                  label="Choose size"
                  placeholder="Pick value"
                  data={["S", "M", "L", "XL"]}
                  searchable
                  nothingFoundMessage="Nothing found..."
                />
              </div>

              {/* <div className="d-flex justify-content-center">
                <button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div> */}
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
