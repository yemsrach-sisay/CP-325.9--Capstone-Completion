import React from "react";
import "./aboutus.css"; // Make sure this path is correct

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <h1>About Us</h1>
      {/* <img
        src="https://source.unsplash.com/1600x900/?shopping"
        alt="About Us"
        className="aboutus-image"
      /> */}
      <p>
        Welcome to S&Y Shopping Center! We are your one-stop destination for all
        your shopping needs. Our mission is to provide you with a wide range of
        high-quality products at affordable prices.
      </p>
      <h2>Our Story</h2>
      <p>
        Founded in 2024, S&Y Shopping Center has quickly grown to become a
        trusted name in the retail industry. Our team is dedicated to providing
        exceptional customer service and a seamless shopping experience.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>
          Customer Satisfaction: We prioritize our customers and strive to meet
          their needs and exceed their expectations.
        </li>
        <li>
          Quality: We offer products from top brands to ensure you get the best
          value for your money.
        </li>
        <li>
          Innovation: We continuously improve our services and introduce new
          products to keep up with market trends.
        </li>
        <li>
          Integrity: We conduct our business with honesty and transparency.
        </li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        If you have any questions, feel free to{" "}
        <a href="/contact">contact us</a>. We are here to help you!
      </p>
    </div>
  );
};

export default AboutUs;
