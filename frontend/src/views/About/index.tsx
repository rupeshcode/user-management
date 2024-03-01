import Image from "next/image";
import React from "react";
import scss from "./about.module.scss";
import { Card, Container } from "@mantine/core";
const About = () => {
  return (
    <>
      <div className={scss.image_wrapper}>
        <h2 className="d-flex align-items-center justify-content-center">
          About
        </h2>
      </div>
      <Container>
        <div className="row mt-2">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <Card shadow="lg">
              <h2>Our Story</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat consequat enim, non auctor massa ultrices non. Morbi sed
              odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Maecenas varius egestas diam, eu sodales metus
              scelerisque congue. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Maecenas gravida
              justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
              ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
              vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
              condimentum euismod tortor, eget facilisis diam faucibus et. Morbi
              a tempor elit. Donec gravida lorem elit, quis condimentum ex
              semper sit amet. Fusce eget ligula magna.
              <p>
                {" "}
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Image
              className={scss.about_image_2}
              src="/assets/about/about-01.webp"
              alt="about1"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="row mt-2">
          <div className="col-lg-4 col-md-4">
            <Image
              className={scss.about_image_2}
              src="/assets/about/about-02.webp"
              alt="about2"
              width={700}
              height={700}
            />
          </div>
          <div className="col-lg-8 col-md-8">
            <Card shadow="lg">
              <p>
                Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum
                rhoncus dignissim risus, sed consectetur erat. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nullam maximus mauris sit amet odio convallis,
                in pharetra magna gravida. Praesent sed nunc fermentum mi
                molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit
                egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor,
                consequat odio in, porttitor ante. Ut mauris ligula, volutpat in
                sodales in, porta non odio. Pellentesque tempor urna vitae mi
                vestibulum, nec venenatis nulla lobortis. Proin at gravida ante.
              </p>

              <p>
                Creativity is just connecting things. When you ask creative
                people how they did something, they feel a little guilty because
                they didnt really do it, they just saw something. It seemed
                obvious to them after a while. - Steve Jobs
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
