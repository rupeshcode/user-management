"use client";

import { Button, Card, Group, Text } from "@mantine/core";
import "./tshirts.scss";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const tshirt = [
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
];
const TshirtsPageView = () => {
  return (
    <div className=" tshirtpage flex justify-center items-center">
      <div className=" flex flex-wrap justify-start items-center mt-3 ">
        {tshirt.map((ns: any, index) => (
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

export default TshirtsPageView;
