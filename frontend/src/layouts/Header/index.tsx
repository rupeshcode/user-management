import React from "react";
import scss from "./header.module.scss";

import { FaUserCircle } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { Button, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { clsx } from "@/utils/string";

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };
  return (
    <div className={scss.header}>
      <img className={scss.logo} src="/assets/images/flogo.png" alt="Logo" />

      <div className="d-flex ">
        <Text
          size="md"
          onClick={() => {
            router.push("/home");
          }}
          className={clsx(scss.header_content, "mx-2")}
        >
          Home
        </Text>

        <Text
          size="md"
          onClick={() => {
            router.push("/shop");
          }}
          className={clsx(scss.header_content, "mx-2")}
        >
          Shop
        </Text>

        <Text
          size="md"
          onClick={() => {
            router.push("/about");
          }}
          className={clsx(scss.header_content, "mx-2")}
        >
          About
        </Text>
        <Text
          size="md"
          onClick={() => {
            router.push("/contact");
          }}
          className={clsx(scss.header_content, "mx-2")}
        >
          Contact
        </Text>
      </div>

      <div className={scss.searchContainer}>
        <input className={scss.searchBox} type="text" placeholder="Search..." />
        <button className={scss.searchButton}>Search</button>
      </div>

      <div className={scss.searchContainer}>
        <div className={scss.icons}>
          <ImCart className={scss.icon} />
          <FaUserCircle className={scss.icon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
