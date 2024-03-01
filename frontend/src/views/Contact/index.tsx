import React from "react";
import scss from "./contact.module.scss";
import { Button, Card, Container, TextInput, Textarea } from "@mantine/core";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { clsx } from "@/utils/string";
const Contact = () => {
  return (
    <>
      <div className={scss.image_wrapper}>
        <h2 className={scss.heading}>Contact</h2>
      </div>
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <Card shadow="lg">
              <h3 className="d-flex justify-content-center align-items-center">
                Send a Mesage
              </h3>
              <form>
                <TextInput placeholder="Your Email Address" className="mb-3" />
                <Textarea
                  placeholder="How can we help you"
                  autosize
                  minRows={2}
                  maxRows={6}
                />
                <Button
                  justify="center"
                  fullWidth
                  leftSection={<span />}
                  variant="default"
                  mt="md"
                >
                  Submit
                </Button>
              </form>
            </Card>
          </div>
          <div className="col-lg-6">
            <Card shadow="lg" className={scss.address_wrapper}>
              <div className="d-flex align-items-center ">
                <FaLocationDot className="mx-2" />
                <span>Address</span>
              </div>
              <span>prahalad Nagar, New Delhi- 509001</span>
              <div className="d-flex align-items-center">
                <FaPhoneVolume className="mx-2" />
                <span>Lets Talk</span>
              </div>
              <span>+91|9876543210</span>
              <div className="d-flex align-items-center">
                <MdEmail className="mx-2" />
                <span>Sale Support</span>
              </div>
              <span>example@gmail.com</span>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
