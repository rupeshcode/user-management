import React from "react";
import scss from "./accessories.module.scss";
import { Button, Card, Group, Image, Tabs, Text } from "@mantine/core";
import { IoShirtSharp, IoWatch } from "react-icons/io5";
import { RiTShirtFill } from "react-icons/ri";
import { GiBelt, GiConverseShoe } from "react-icons/gi";
import { PiBaseballCapBold } from "react-icons/pi";
import Backbutton from "@/utils/Backbutton";

const shoes = [
  {
    image: "/assets/shoes/1.jpeg",
    alt: "black shoes",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "black shoes",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "black shoes",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "black shoes",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "black shoes",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
];
const cap = [
  {
    image: "/assets/cap/1.jpeg",
    alt: "black cap",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/cap/1.jpeg",
    alt: "black cap",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/cap/1.jpeg",
    alt: "black cap",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/cap/1.jpeg",
    alt: "black cap",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/cap/1.jpeg",
    alt: "black cap",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
];

const belt = [
  {
    image: "/assets/belt/1.jpeg",
    alt: "black tbelt",
    desc: "belt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/belt/1.jpeg",
    alt: "black tbelt",
    desc: "belt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/belt/1.jpeg",
    alt: "black tbelt",
    desc: "belt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/belt/1.jpeg",
    alt: "black tbelt",
    desc: "belt For Men",
    rs: "499.00",
    button: "Quick View",
  },
];

const watches = [
  {
    image: "/assets/watches/1.jpeg",
    alt: "Watch",
    desc: "Hublot Watch For Men",

    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/watches/1.jpeg",
    alt: "Watch",
    desc: "Hublot Watch For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/watches/1.jpeg",
    alt: "Watch",
    desc: "Hublot Watch For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/watches/1.jpeg",
    alt: "Watch",
    desc: "Hublot Watch For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/watches/1.jpeg",
    alt: "Watch",
    desc: "Hublot Watch For Men",
    rs: "499.00",
    button: "Quick View",
  },
];

const Accessories = () => {
  return (
    <div className={scss.maindiv}>
      <div className="container">
        <div className="my-4">
          <Backbutton />
        </div>
        <div className={scss.productheading}>
          <h2>Accessories Products</h2>
        </div>
        <div className={scss.tabpanel}>
          <Tabs defaultValue="shoes">
            <Tabs.List>
              <Tabs.Tab ml={4} value="shoes" leftSection={<GiConverseShoe />}>
                Shoes
              </Tabs.Tab>
              <Tabs.Tab ml={4} value="cap" leftSection={<PiBaseballCapBold />}>
                Cap
              </Tabs.Tab>
              <Tabs.Tab ml={4} value="watch" leftSection={<IoWatch />}>
                Watch
              </Tabs.Tab>
              <Tabs.Tab ml={4} value="belt" leftSection={<GiBelt />}>
                Belt
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel className={scss.tabdesc} value="shoes">
              <div className={scss.homeproductss}>
                {shoes.map((item, index) => (
                  <Card
                    key={index}
                    className={scss.productcard}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                  >
                    <Card.Section>
                      <Image
                        className={scss.productimg}
                        src={item.image}
                        h={250}
                        alt="Norway"
                      />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                      <Text fw={500}>{item.desc} </Text>
                    </Group>
                    <Text>Rs. {item.rs}/-</Text>

                    <Button
                      // onClick={handlequickview}
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="md"
                    >
                      {item.button}
                    </Button>
                  </Card>
                ))}
              </div>
            </Tabs.Panel>

            <Tabs.Panel className={scss.tabdesc} value="cap">
              <div className={scss.homeproductss}>
                {cap.map((item, index) => (
                  <Card
                    key={index}
                    className={scss.productcard}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                  >
                    <Card.Section>
                      <Image
                        className={scss.productimg}
                        src={item.image}
                        h={250}
                        alt="Norway"
                      />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                      <Text fw={500}>{item.desc} </Text>
                    </Group>
                    <Text>Rs. {item.rs}/-</Text>

                    <Button
                      // onClick={handlequickview}
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="md"
                    >
                      {item.button}
                    </Button>
                  </Card>
                ))}
              </div>
            </Tabs.Panel>

            <Tabs.Panel className={scss.tabdesc} value="watch">
              <div className={scss.homeproductss}>
                {watches.map((item, index) => (
                  <Card
                    key={index}
                    className={scss.productcard}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                  >
                    <Card.Section>
                      <Image
                        className={scss.productimg}
                        src={item.image}
                        h={250}
                        alt="Norway"
                      />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                      <Text fw={500}>{item.desc} </Text>
                    </Group>
                    <Text>Rs. {item.rs}/-</Text>

                    <Button
                      // onClick={handlequickview}
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="md"
                    >
                      {item.button}
                    </Button>
                  </Card>
                ))}
              </div>
            </Tabs.Panel>

            <Tabs.Panel className={scss.tabdesc} value="belt">
              <div className={scss.homeproductss}>
                {belt.map((item, index) => (
                  <Card
                    key={index}
                    className={scss.productcard}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                  >
                    <Card.Section>
                      <Image
                        className={scss.productimg}
                        src={item.image}
                        h={250}
                        alt="Norway"
                      />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                      <Text fw={500}>{item.desc} </Text>
                    </Group>
                    <Text>Rs. {item.rs}/-</Text>

                    <Button
                      // onClick={handlequickview}
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="md"
                    >
                      {item.button}
                    </Button>
                  </Card>
                ))}
              </div>
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
