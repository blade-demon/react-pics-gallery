import React, { useState } from "react";
import styled from "styled-components";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const StyledContainer = styled.div`
  margin-top: 1rem;
`;

const App = () => {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async term => {
    const responds = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    setImages(responds.data.results);
  };

  return (
    <StyledContainer className="ui container">
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ImageList images={images} />{" "}
    </StyledContainer>
  );
};

export default App;
