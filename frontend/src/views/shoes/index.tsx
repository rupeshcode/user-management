"use client";
import React from "react";
import "./shoes.scss";
import { Button, Card, Group, Text } from "@mantine/core";
import { AiOutlineHeart } from "react-icons/ai";

const shoes = [
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
];

const ShoesPageView = () => {
  return (
    <div className=" shoespage flex justify-center items-center">
      <div className=" flex flex-wrap justify-start items-center mt-3 ">
        {shoes.map((ns: any, index) => (
          <div className="mb-4 mx-2">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{ backgroundColor: "#900c3f" }}
            >
              <Card.Section>
                <div className="flex justify-center pt-3 productimage">
                  <img src={ns.image} alt={ns.alt} className="images" />
                </div>
                <div className="icnoverlay">
                  <AiOutlineHeart size={25} className="likeicn" />
                </div>
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text className="txtclr" weight={500}>
                  {ns.desc}
                </Text>
              </Group>

              <Text size="sm" color="dimmed">
                <del className="delclr">Rs. {ns.drs} /-</del>
              </Text>
              <Text className="txtclr" size="sm">
                Rs. {ns.rs} /-
              </Text>

              <div className="flex">
                <div className="mx-2">
                  <Button
                    variant="light"
                    className="btnclrr"
                    mt="md"
                    radius="md"
                  >
                    Buy Now
                  </Button>
                </div>
                <div>
                  <Button
                    variant="light"
                    className="btnclrr"
                    mt="md"
                    radius="md"
                  >
                    Add Cart
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoesPageView;
