import React from "react";
import ImageCard from "./ImageCard";
import styled from "styled-components";

const StyledImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 0px;
  grid-auto-rows: minmax(10px, auto);
`;

const ImageList = props => {
  const images = props.images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));

  return <StyledImageList>{images} </StyledImageList>;
};

export default ImageList;
