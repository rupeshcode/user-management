import { Carousel } from "@mantine/carousel";
import { Button, Card, Container, Select } from "@mantine/core";
import Image from "next/image";
import "@mantine/carousel/styles.css";
import scss from "./checkoutdetails.module.scss";

import React, { useState } from "react";
import { clsx } from "@/utils/string";

const Checkout = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/assets/about/about-01.webp"
  );
  const handleImageChange = (newImage: any) => {
    setSelectedImage(newImage);
  };
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
              />
              <Image
                className="mb-2"
                src="/assets/about/about-02.webp"
                alt="checkoutimg"
                height={100}
                width={100}
                onClick={() => handleImageChange("/assets/about/about-02.webp")}
              />
              <Image
                src="/assets/about/img.webp"
                alt="checkoutimg"
                height={100}
                width={100}
                onClick={() => handleImageChange("/assets/about/img.webp")}
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
              <p className="my-2">
                Reimagine the feeling of a classic T-shirt. With our cotton
                T-shirts, everyday essentials no longer have to be ordinary.
              </p>
              <div className={scss.button_wrapper}>
                <Button>S</Button>
                <Button>M</Button>
                <Button>L</Button>
                <Button>XL</Button>
              </div>
              <div>
                <Select
                  className="my-3"
                  label="Choose Color"
                  placeholder="Pick value"
                  data={["Red", "White", "Green", "Yellow"]}
                  searchable
                  nothingFoundMessage="Nothing found..."
                />
              </div>
              <div>
                <Button>Submit</Button>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
