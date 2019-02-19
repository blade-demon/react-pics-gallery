import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 250px;
  grid-row-end: span 3;
`;

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <StyledImage ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
