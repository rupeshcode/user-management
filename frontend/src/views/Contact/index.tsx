import React from "react";
import scss from "./contact.module.scss";
import { Button, Card, Container, TextInput, Textarea } from "@mantine/core";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <>
      <div className={scss.image_wrapper}>
        <h2 className="d-flex align-items-center justify-content-center">
          Contact
        </h2>
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
            <Card shadow="lg">
              <div className="d-flex align-items-center ">
                <FaLocationDot className="mx-2" />
                <p>Address</p>
              </div>
              <p>prahalad Nagar, New Delhi- 509001</p>
              <div className="d-flex">
                <FaPhoneVolume className="mx-2" />
                <p>Lets Talk</p>
              </div>
              <p>+91|9876543210</p>
              <div className="d-flex">
                <MdEmail className="mx-2" />
                <p>Sale Support</p>
              </div>
              <p>example@gmail.com</p>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
