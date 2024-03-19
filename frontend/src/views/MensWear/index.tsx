import React, { useRef, useState } from "react";
import { Carousel } from "@mantine/carousel";
import scss from "./menswear.module.scss";
import Autoplay from "embla-carousel-autoplay";
import "@mantine/carousel/styles.css";
import { clsx } from "@/utils/string";
import {
  BackgroundImage,
  Button,
  Card,
  Center,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { Tabs, rem } from "@mantine/core";
import { IoShirtSharp, IoWatch } from "react-icons/io5";
import { RiTShirtFill } from "react-icons/ri";
import { Badge } from "react-bootstrap";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/Redux/Slice/AddtoCartSlice";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { addtowishList } from "@/Redux/Slice/AddtoWishList";

const slidebaroffer = [
  {
    image: "/assets/offers/1.jpg",
    alt: "offer1",
  },
  {
    image: "/assets/offers/2.jpeg",
    alt: "offer2",
  },
  {
    image: "/assets/offers/1.jpg",
    alt: "offer3",
  },
];
const homeproducts = [
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
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
    image: "/assets/watches/1.jpeg",
    alt: "Watch",
    desc: "Hublot Watch For Men",

    rs: "2000.00",
    button: "Quick View",
  },
];
const tshirt = [
  {
    id: 1,
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "499.00",
  },
  {
    id: 2,
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "499.00",
  },
  {
    id: 3,
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "499.00",
  },
  {
    id: 4,
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "699.00",
  },
  {
    id: 5,
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "49.00",
  },
  {
    id: 6,
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    rs: "599.00",
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

const Menswear = () => {
  const [isCard1Hovered, setIsCard1Hovered] = useState(false);
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);
  const [isCard3Hovered, setIsCard3Hovered] = useState(false);
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const router = useRouter();
  // const cartItems = useSelector((state) => state.Cart.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (item: any) => {
    dispatch(addItem(item));
  };

  const handleAddToWishList = (item: any) => {
    if (dispatch(addtowishList(item))) {
      alert("Item added to wish list");
    }
  };
  return (
    <>
      <div className={scss.maindiv}>
        <div className="mt-2">
          <Carousel
            loop
            maw={1300}
            mx="auto"
            withIndicators
            height={400}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {slidebaroffer.map((items: any, index) => (
              <Carousel.Slide key={index}>
                <img className={scss.offer} src={items.image} alt={items.alt} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>

        <div className={clsx(scss.allcards, "col-12 container")}>
          <div
            className={clsx(scss.card1, "col-3", {
              [scss.hovered]: isCard1Hovered,
            })}
            onMouseEnter={() => setIsCard1Hovered(true)}
            onMouseLeave={() => setIsCard1Hovered(false)}
          >
            <div className={clsx(scss.cards, "col-12")}>
              <BackgroundImage
                onClick={() => {
                  router.push("/mensproducts");
                }}
                className={scss.bckground}
                src="/assets/images/mens.jpg"
              >
                <Text className={scss.desc} c="black">
                  <b>Men</b>
                </Text>
                {isCard1Hovered && (
                  <Text c="black">
                    <b className={scss.hdesc}>Shop Now</b>
                  </Text>
                )}
              </BackgroundImage>
            </div>
          </div>
          <div
            className={clsx(scss.card2, "col-3", {
              [scss.hovered]: isCard2Hovered,
            })}
            onMouseEnter={() => setIsCard2Hovered(true)}
            onMouseLeave={() => setIsCard2Hovered(false)}
          >
            <div className="col-12">
              <BackgroundImage
                onClick={() => {
                  router.push("/womensection");
                }}
                className={scss.bckground}
                src="/assets/images/women.jpg"
              >
                <Text className={scss.desc} c="black">
                  <b>Women</b>
                </Text>
                {isCard2Hovered && (
                  <Text c="black">
                    <b className={scss.hdesc}>Shop Now</b>
                  </Text>
                )}
              </BackgroundImage>
            </div>
          </div>
          <div
            className={clsx(scss.card3, "col-3", {
              [scss.hovered]: isCard3Hovered,
            })}
            onMouseEnter={() => setIsCard3Hovered(true)}
            onMouseLeave={() => setIsCard3Hovered(false)}
          >
            <div className="col-12">
              <BackgroundImage
                onClick={() => {
                  router.push("/accessoriesproduct");
                }}
                className={scss.bckground}
                src="/assets/images/accessories.jpg"
              >
                <Text className={scss.desc} c="black">
                  <b>Accessories</b>
                </Text>
                {isCard3Hovered && (
                  <Text c="black">
                    <b className={scss.hdesc}>Shop Now</b>
                  </Text>
                )}
              </BackgroundImage>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={scss.productheading}>
            <h2>Products</h2>
          </div>
          <div className={scss.tabpanel}>
            <Tabs defaultValue="home">
              <Tabs.List>
                <Tabs.Tab ml={4} value="home" leftSection={<IoShirtSharp />}>
                  Home
                </Tabs.Tab>
                <Tabs.Tab ml={4} value="mens" leftSection={<IoShirtSharp />}>
                  Mens
                </Tabs.Tab>
                <Tabs.Tab ml={4} value="womens" leftSection={<RiTShirtFill />}>
                  Womens
                </Tabs.Tab>
                <Tabs.Tab ml={4} value="accessories" leftSection={<IoWatch />}>
                  Accessories
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel className={scss.tabdesc} value="home">
                <div className={scss.homeproductss}>
                  {homeproducts.map((item, index) => (
                    <Card
                      key={index}
                      className={scss.productcard}
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      withBorder
                    >
                      <Card.Section>
                        <div className="Image_div">
                          <Image
                            className={scss.productimg}
                            src={item.image}
                            h={250}
                            alt="Norway"
                          />
                          <div className={scss.icon_div}>
                            <CiHeart />
                          </div>
                        </div>
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
              <Tabs.Panel className={scss.tabdesc} value="mens">
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
                        <div className="Image_div">
                          <Image
                            className={scss.productimg}
                            src={item.image}
                            h={250}
                            alt="Norway"
                          />
                          <div className={scss.icon_div}>
                            <CiHeart />
                          </div>
                        </div>
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

              <Tabs.Panel className={scss.tabdesc} value="womens">
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
                        <div className="Image_div">
                          <Image
                            className={scss.productimg}
                            src={item.image}
                            h={250}
                            alt="Norway"
                          />
                          <div className={scss.icon_div}>
                            <CiHeart
                              onClick={() => handleAddToWishList(item)}
                            />
                          </div>
                        </div>
                      </Card.Section>
                      <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>{item.desc} </Text>
                      </Group>
                      <Text>Rs. {item.rs}/-</Text>
                      <Button
                        onClick={() => handleAddToCart(item)}
                        color="blue"
                        fullWidth
                        mt="md"
                        radius="md"
                      >
                        Add to Cart
                      </Button>
                      {/*
                      <div className="d-flex justify-content-center">
                        <Button>Add to Cart</Button>
                      </div> */}
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
                        <div className="Image_div">
                          <Image
                            className={scss.productimg}
                            src={item.image}
                            h={250}
                            alt="Norway"
                          />
                          <div className={scss.icon_div}>
                            <CiHeart />
                          </div>
                        </div>
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
    </>
  );
};

export default Menswear;
