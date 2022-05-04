import React from "react";
import styled from "styled-components";
import { images } from "../images/images.jpg";

const Content = () => {
  return (
    <ContentWrapper>
      <div>
        <h1>This is the new content area</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id metus
        sem. Donec sem mi, porttitor vel purus vestibulum, interdum fermentum
        massa. Donec rutrum in urna et vestibulum. Ut sem orci, sollicitudin
        vitae iaculis in, tincidunt eget orci. Nam nec bibendum libero. Fusce
        aliquam interdum massa, at vehicula nunc pellentesque vel. Integer ac ex
        augue. Suspendisse potenti. Mauris at magna at quam placerat congue vel
        a est. In et tortor eget sapien eleifend cursus eget sed est.
      </p>
      <img height="200px" src={images} alt="image" />;
    </ContentWrapper>
  );
};

export const ContentWrapper = styled.div`
  flex: 4 0px;
`;

export default Content;
