import { Carousel } from "@mantine/carousel";
import { Button, Card, Container, Select } from "@mantine/core";
import Image from "next/image";
import "@mantine/carousel/styles.css";
import scss from "./checkoutdetails.module.scss";

import React from "react";

const Checkout = () => {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-md-2">
            <div className="d-flex flex-direction-column">
              <Image
                src="/assets/about/about-01.webp"
                alt="checkoutimg"
                height={100}
                width={100}
              />
              <Image
                src="/assets/about/about-02.webp"
                alt="checkoutimg"
                height={100}
                width={100}
              />
              <Image
                src="/assets/about/img.webp"
                alt="checkoutimg"
                height={100}
                width={100}
              />
            </div>
          </div>
          <div className="col-md-5">
            <Carousel
              loop
              withIndicators
              height={500}
              dragFree
              slideGap="md"
              align="start"
            >
              <Carousel.Slide>
                <Image
                  src="/assets/about/about-01.webp"
                  alt="checkoutimg"
                  height={1000}
                  width={1000}
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  src="/assets/about/about-02.webp"
                  alt="checkoutimg"
                  height={1000}
                  width={1000}
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  src="/assets/about/img.webp"
                  alt="checkoutimg"
                  height={1000}
                  width={1000}
                />
              </Carousel.Slide>
              {/* ...other slides */}
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
