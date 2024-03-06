import React from "react";
import scss from "./mens.module.scss";
import { Button, Card, Group, Image, Tabs, Text } from "@mantine/core";
import { IoShirtSharp, IoWatch } from "react-icons/io5";
import { RiTShirtFill } from "react-icons/ri";
import Backbutton from "@/utils/Backbutton";
import { useRouter } from "next/router";

const tshirt = [
  {
    id: 1,
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    id: 2,
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    id: 3,
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    id: 4,
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    id: 5,
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
];

const shirt = [
  {
    image: "/assets/shirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/shirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/shirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "499.00",
    button: "Quick View",
  },
  {
    image: "/assets/shirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
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

const Mens = () => {
  const router = useRouter();
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
          <Tabs defaultValue="shirt">
            <Tabs.List>
              <Tabs.Tab ml={4} value="shirt" leftSection={<IoShirtSharp />}>
                Shirt
              </Tabs.Tab>
              <Tabs.Tab ml={4} value="tshirt" leftSection={<RiTShirtFill />}>
                Tshirt
              </Tabs.Tab>
              <Tabs.Tab ml={4} value="accessories" leftSection={<IoWatch />}>
                Accessories
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel className={scss.tabdesc} value="shirt">
              <div className={scss.homeproductss}>
                {shirt.map((item, index) => (
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
                      onClick={() => {
                        router.push("/checkoutdetails");
                      }}
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

            <Tabs.Panel className={scss.tabdesc} value="tshirt">
              <div className={scss.homeproductss}>
                {tshirt.map((item, index) => (
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
                      onClick={() => {
                        router.push("/checkoutdetails");
                      }}
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

            <Tabs.Panel className={scss.tabdesc} value="accessories">
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
                      onClick={() => {
                        router.push("/checkoutdetails");
                      }}
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

export default Mens;
