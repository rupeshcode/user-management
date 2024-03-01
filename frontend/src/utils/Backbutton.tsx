import React from "react";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@mantine/core";

const Backbutton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()}>
      <IoIosArrowBack size={25} />
    </Button>
  );
};

export default Backbutton;
